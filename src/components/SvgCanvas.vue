<template>
  <div class="canvas">
    <svg @mousedown="mousedownEvent" @mouseup="mouseupEvent" @mousemove="mousemoveEvent">
      <CanvasShape @shapeMouseMove="shapeMouseMoveHandler" v-for="shape in shapes" :key="shape.id" :shape="shape"/>
      <SvgPoints v-for="pointsArray in points" :key="pointsArray.id" :pointsArray="pointsArray"/>
    </svg>
  </div>
</template>
<script>
import CanvasShape from "./svgCanvasComponents/CanvasShape.vue"
import ModeTypes from '../models/ModeTypes';
import Points from "../models/Points";
import Shape from '../models/canvas/Shape';
import ShapeType from '../models/ShapeType';
import SvgPoints from './SvgPoints.vue';

export default {
  name: "SvgCanvas",
  props: {
    currentShape: String,
    currentMode: {
      default: ModeTypes.CREATE,
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
      selectedShapeId: 0,
      shapes: [],
      notFirstMouseMove: false,
    }
  },
  created(){

  },
  methods: {
    
    addPointToCurrentPointsArray(coordinates){
      this.points[this.points.length-1].addPoint(coordinates.x,coordinates.y)
    },

    adjustCoordinates(mouse){
      return {x: mouse.pageX-10, y: mouse.pageY-10}
    },

    createShape(coordinates){
      this.points.push(new Points(this.currentId))
      this.addPointToCurrentPointsArray(coordinates);
      this.shapes.push(new Shape(this.currentId, this.points[this.points.length-1], this.currentShape, this.color));
    },

    mousedownEvent(mouse){
      switch(this.currentMode){
        case ModeTypes.CREATE:
          this.mousedownCreateHandler(mouse);
          break;
        case ModeTypes.CLEAR:
          this.mousedownClearHandler();
          break;
      } 
    },

    mousedownCreateHandler(mouse){
      this.createMode = true;
      let coordinates = this.adjustCoordinates(mouse);
      this.createShape(coordinates);
    },

    mousedownClearHandler(){
      this.shapes = this.shapes.filter(obj => {
        return obj.id !== this.selectedShapeId;
      });
      this.points = this.points.filter(obj => {
        return obj.id !== this.selectedShapeId;
      });
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
      console.log(this.shapes)
      switch(this.shapes[this.shapes.length-1].type){
        case ShapeType.RECTANGLE:
        case ShapeType.CIRCLE:
          this.addPointToCurrentPointsArray(coordinates);
          break; 
        
      }
      this.notFirstMouseMove = true;
    },
    handleUpdateMouseMove(coordinates){
      switch(this.shapes[this.shapes.length-1].type){
        case ShapeType.RECTANGLE:
        case ShapeType.CIRCLE:
            this.points[this.shapes.length-1].setLastPoint(coordinates.x,coordinates.y);
          break; 
      }
    },

    shapeMouseMoveHandler(id){
      this.selectedShapeId = id;
    },

  },
  watch: {
    currentMode(){
      console.log(this.currentMode);
      console.log(this.createMode)
    }
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