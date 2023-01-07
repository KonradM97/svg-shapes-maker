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
</style>