<template>
    <circle :cx="circle.cx" :cy="circle.cy" :r="circle.diameter" :fill="circle.fill"/>
</template>
<script>

export default {
    name: 'CanvasRectangle',
    props: {
        circle: Object,
    },
    data(){
        return {
        }
    },
    methods: {

    },
    watch: {
    },
    created(){
        console.log(this.circle)
    }
}
</script>