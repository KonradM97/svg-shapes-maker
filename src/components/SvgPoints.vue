<template>
  <circle
    v-for="point in pointsArray.pointArray"
    :key="point.index"
    :cx="point.x"
    :cy="point.y"
    :r="4"
  />
</template>
<script>
export default {
  name: "SvgPoints",
  props: {
    pointsArray: Object,
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