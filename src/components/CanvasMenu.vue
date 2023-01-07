<template>
    <div id="svgMenu">
        <div class="mainButtons">
            <menu-button @click="switchCreateMode" :text="'Create'"/>
            <menu-button :text="'Edit'"/>
            <menu-button @click="handleClearButton" :text="'Clear'"/>
        </div>
        <div v-if="createMode" class="createButtons">
            <menu-icon-button @click="changeShapeMode(shapeType.RECTANGLE)" :img="'./img/rectangle.svg'"/>
            <menu-icon-button @click="changeShapeMode(shapeType.CIRCLE)" :img="'./img/circle.svg'"/>
            <menu-icon-button :img="'./img/polygon.svg'"/>
        </div>
        <div class="fillMenu">
            <input type="range" class="color-input red" v-model="red" min="0" max="255"/>
            <input type="range" class="color-input green" v-model="green" min="0" max="255"/>
            <input type="range" class="color-input blue" v-model="blue" min="0" max="255"/>
            <input type="range" class="color-input alpha" v-model="alpha" min="0" max="100"/>
        </div>
        <div class="fillExample">
            <div class="fillSquare" :style="'background-color:'+color" />
        </div>
    </div>
</template>
<script>
import menuButton from './svgMenuComponents/MenuButton.vue'
import menuIconButton from './svgMenuComponents/MenuIconButton.vue'
import ShapeType from "../models/ShapeType"

export default {
  components: { 
    menuButton,
    menuIconButton
    },
    data() {
        return {
            createMode: false,
            shapeType: ShapeType,
            red: 100,
            green: 120,
            blue: 180,
            alpha: 100,
        }
    },
    methods: {
        switchCreateMode(){
            this.createMode ^= true;
        },
        changeShapeMode(value){
            this.$emit('changeShape', value);
        },
        handleClearButton(){
            this.$emit('clear');
        }
    },
    computed: {
        color(){
            let color = 'rgba('+this.red+','+this.green+','+this.blue+','+this.alpha/100+')';
            this.$emit('colorChange', color);
            return color;
        }
    }
}
</script>

<style scoped>
.mainButtons{
    padding-top: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.createButtons{
    padding-top: 2%;
}
#svgMenu{
    background-color: #30344B;
    flex-grow: 1;
    margin-left: 0.125rem;
}
.fillMenu{
    display: flex;
    justify-content: center;
}
.color-input{
    width: 1.5rem;
}
.fillExample{
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}
.fillSquare{
    width: 2rem;
    height: 2rem;
}
input[type="range"] {
        appearance: slider-vertical;
        background: transparent;
        cursor: pointer;
}

</style>