<template>
  <circle
    v-for="point in points.pointArray"
    :key="point.index"
    :cx="point.x"
    :cy="point.y"
    :r="getDiameter()"
  />
</template>
<script>
export default {
  name: "SvgPoints",
  props: {
    fetchedPoints: Object,
  },
  data() {
    return {
      points: {},
    };
  },

  methods: {
    setPoints(points) {
      this.points = points;
    },

    getDiameter(){
    if(Object.keys(this.points).length === 0){
        return 0;
    } else {
        return this.points.getDiameter();
    }
  }
  },

  created() {
    this.points = this.fetchedPoints;
  },
};
</script>
<style scoped>
circle {
  stroke-width: 0.125rem;
  stroke: rgba(0, 50, 200, 0.5);
  fill: transparent;
}
</style>