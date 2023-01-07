<template>
    <CanvasRectangle :rectangle="rectangle" v-if="shape.type === shapeType.RECTANGLE" />
    <CanvasCircle :circle="circle" v-if="shape.type === shapeType.CIRCLE" />
</template>

<script>
import CanvasCircle from "../shapes/CanvasCircle.vue";
import CanvasRectangle from "../shapes/CanvasRectangle.vue";
import Circle from "../../models/canvas/Circle"
import Rectangle from "../../models/canvas/Rectagle"
import ShapeType from "../../models/ShapeType"

export default {
    name: 'CanvasShape',
    props: {
        shape: Object,
    },
    components: {
        CanvasRectangle,
        CanvasCircle,
    },
    data(){
        return {
            shapeType: ShapeType,
            rectangle: {},
            circle: {},
        }
    },
    created(){
        switch(this.shape.type){
            case ShapeType.RECTANGLE:
                this.rectangle = new Rectangle(this.shape.id, this.shape.points,ShapeType.RECTANGLE, this.shape.fill);
                break;
            case ShapeType.CIRCLE:
                this.circle = new Circle(this.shape.id, this.shape.points,ShapeType.CIRCLE, this.shape.fill);
        }
    },
    methods: {
    },
    watch: {

    }
}
</script>