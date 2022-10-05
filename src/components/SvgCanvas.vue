<template>
  <div class="canvas">
    <svg @mousedown="mousedownEvent" @mouseup="mouseupEvent" @mousemove="mousemoveEvent">
      <SvgPoints :fetchedPoints="points"/>
      <CanvasRectangles @incrementId="incrementId" :addPoint="addRectPoint" :currentId="currentId" :rectangleCreateMode="rectangleCreateMode" />
    </svg>
  </div>
</template>
<script>
import SvgPoints from './SvgPoints.vue';
import Points from "../models/Points";
import CanvasRectangles from "./shapes/CanvasRectangles.vue"

export default {
  name: "SvgCanvas",
  props: {
    currentShape: String,
  },
  components: {
    SvgPoints,
    CanvasRectangles,
  },
  data(){
    return {
      currentId: 0,
      createMode: false,
      points: {},
      rectangleCreateMode: false,
      addRectPoint: {},
    }
  },
  created(){
    this.points = new Points(0);
  },
  methods: {
    mousedownEvent(mouse){
      this.createMode = true;
      let coordinates = this.adjustCoordinates(mouse);
      if(this.rectangleCreateMode){
        this.currentId++;
        this.addRectPoint = coordinates;
      }
    },

    mouseupEvent(){
      this.createMode = false;
    },

    mousemoveEvent(mouse){
      let coordinates = this.adjustCoordinates(mouse);
      if(this.createMode){
        if(this.rectangleCreateMode){
          this.addRectPoint = coordinates;
        }
      }
    },

    adjustCoordinates(mouse){
      return {x: mouse.pageX-10, y: mouse.pageY-10}
    },
    
    handleChangeShape(currentShape){
      switch(currentShape){
        case 'rectangle':
          this.rectangleCreateMode = true;
          break;
      }
    },

    incrementId(){
      this.currentId++;
    }
  },
  watch: {
    currentShape: function(){
      this.handleChangeShape(this.currentShape);
    },
  },
};
</script>
<style scoped>
.canvas {
  flex-grow: 12;
  background-color: white;
}
svg{
  width: 100%;
  height: 100%;
}
</style>