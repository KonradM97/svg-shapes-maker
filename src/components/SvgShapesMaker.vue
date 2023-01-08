<template>
  <div id="shapesMaker">
    <SvgCanvas 
    :currentMode="currentMode"
    :currentShape="currentShape"
    :color="color"
     class="windowComponent"/>
    <div class="windowComponent right-window">
      <button
      :class="switchButton"
       @click="switchMenu"
       >{{switchButtonMessage}}</button>
      <CanvasMenu 
      :createMode="rectangleCreateMode" 
      v-show="menuShowed"
      @createMode="createModeHandler"
      @changeShape="changeShape" 
      @clear="clearHandler"
      @colorChange="colorChangeHandler"
      class="windowComponent canvasMenu"/>
    </div>
  </div>
</template>

<script>
import SvgCanvas from './SvgCanvas.vue'
import CanvasMenu from './CanvasMenu.vue'
import ModeTypes from '../models/ModeTypes'
import ShapeType from "../models/ShapeType"

export default {
  name: 'SvgShapesMaker',
  components: {
    SvgCanvas,
    CanvasMenu,
  },
  data(){
    return {
      menuShowed: true,
      switchButton: 'switch-button--open',
      switchButtonMessage: 'Hide menu',
      currentMode: ModeTypes.CREATE,
      currentShape: ShapeType.RECTANGLE,
      color: 'rgba(0,0,0,1)',
    }
  },
  methods:{
    switchMenu(){
      if(this.switchButton == 'switch-button--open'){
        this.switchButton = 'switch-button--close';
        this.switchButtonMessage = "<";
      } else {
        this.switchButton = 'switch-button--open';
        this.switchButtonMessage = 'Hide menu';
      }
      this.menuShowed ^= true;
    },
    changeShape(value){
      console.log(value)
      this.currentShape = value;
    },
    clearHandler(){
      this.currentMode = ModeTypes.CLEAR;
    },
    createModeHandler(){
       this.currentMode = ModeTypes.CREATE;
    },
    colorChangeHandler(value){
      this.color = value;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#shapesMaker{
  display: flex;
  flex-direction: row;
  height: 98vh;
  padding: 0.5rem;
}
.windowComponent{
  border: solid;
  border-width: 2px;
  border-color: #202332;
  border-radius: 2px;
}
.right-window{
  flex-direction: column;
}
.canvasMenu{
  transition: visibility 0s, opacity 0.5s linear;
  height: 90%;
}
.switch-button--open{
  width: 100%;
}
.switch-button--close{
  width: 2rem;
  height: 2rem;
}
</style>
