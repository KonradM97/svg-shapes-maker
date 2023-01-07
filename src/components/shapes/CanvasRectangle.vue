<template>
    <rect :x="rectangle.p1.x" :y="rectangle.p1.y" :width="rectangle.width" :height="rectangle.height" fill="yellow"/>
</template>
<script>

export default {
    name: 'CanvasRectangle',
    props: {
        rectangle: Object,
    },
    data(){
        return {
        }
    },
    methods: {

    },
    watch: {
    }
}
</script>