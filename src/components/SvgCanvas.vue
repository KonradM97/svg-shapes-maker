<template>
  <div class="canvas">
    <svg @mousedown="mousedownEvent" @mouseup="mouseupEvent" @mousemove="mousemoveEvent">
      <CanvasShape v-for="shape in shapes" :key="shape.id" :shape="shape"/>
      <SvgPoints v-for="pointsArray in points" :key="pointsArray.id" :pointsArray="pointsArray"/>
    </svg>
  </div>
</template>
<script>
import SvgPoints from './SvgPoints.vue';
import Points from "../models/Points";
import CanvasShape from "./svgCanvasComponents/CanvasShape.vue"
import Shape from '../models/canvas/Shape';
import ShapeType from '../models/ShapeType';

export default {
  name: "SvgCanvas",
  props: {
    currentShape: String,
    currentMode: {
      default: 'Create',
      type: String,
    },
    color: String,
  },
  components: {
    SvgPoints,
    CanvasShape,
  },
  data(){
    return {
      currentId: 0,
      createMode: false,
      points: [],
      rectangleCreateMode: false,
      shapes: [],
      notFirstMouseMove: false,
    }
  },
  created(){

  },
  methods: {
    addPointToCurrentPointsArray(coordinates){
      this.points[this.currentId].addPoint(coordinates.x,coordinates.y)
    },

    createShape(coordinates){
      this.points.push(new Points(this.currentId))
      this.addPointToCurrentPointsArray(coordinates);
      this.shapes.push(new Shape(this.currentId, this.points[this.currentId], this.currentShape, this.color));
    },

    mousedownEvent(mouse){
      this.createMode = true;
      let coordinates = this.adjustCoordinates(mouse);
      this.createShape(coordinates);
    },

    mouseupEvent(){
      if(this.createMode)
      {
        this.currentId++;
        this.createMode = false;
        this.notFirstMouseMove = false;
      }
    },

    mousemoveEvent(mouse){
      if(this.createMode){
        let coordinates = this.adjustCoordinates(mouse);
        if(this.notFirstMouseMove === false){
          this.handleFirstMouseMove(coordinates);
        } else {
          this.handleUpdateMouseMove(coordinates);
        }
      }
    },

    handleFirstMouseMove(coordinates){
      switch(this.shapes[this.currentId].type){
        case ShapeType.RECTANGLE:
        case ShapeType.CIRCLE:
          this.addPointToCurrentPointsArray(coordinates);
          break; 
        
      }
      this.notFirstMouseMove = true;
    },
    handleUpdateMouseMove(coordinates){
      switch(this.shapes[this.currentId].type){
        case ShapeType.RECTANGLE:
        case ShapeType.CIRCLE:
            this.points[this.currentId].setLastPoint(coordinates.x,coordinates.y);
          break; 
      }
    },
    adjustCoordinates(mouse){
      return {x: mouse.pageX-10, y: mouse.pageY-10}
    },

  },
  watch: {
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