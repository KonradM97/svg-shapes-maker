<template>
    <rect v-for="rectangle in rectangles" :key="rectangle.id" :x="rectangle.p1.x" :y="rectangle.p1.y" :width="rectangle.width" :height="rectangle.height" fill="yellow"/>
</template>
<script>
import Rectangle from "../../models/canvas/Rectagle"

export default {
    name: 'CanvasRectangles',
    props: {
        rectangleCreateMode: Object,
        currentId: Number,
        addPoint: Object,
    },
    data(){
        return {
            rectangles: [],
            currentRectangle: {},
        }
    },
    methods: {
    },
    watch: {
        currentId: function(){
            if(this.rectangleCreateMode){
                this.currentRectangle = new Rectangle(this.currentId);
                this.rectangles.push(this.currentRectangle);
                //debugger // eslint-disable-line no-debugger
            }
        },
        addPoint: function(){
            //sprawdzenie iloścli puktow
            this.currentRectangle.setPoint = this.addPoint;
        }
    }
}
</script>