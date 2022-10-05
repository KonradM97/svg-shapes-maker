<template>
  <button class="menuButton">{{text}}</button>

</template>
<script>
export default {
  name: "MenuButton",
  props: {
    text: String,
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
                console.log(this.points)
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
button {
  color: #FAF9F0;
  background-color: #6C719D;
  border: solid;
  border-radius: 5px;
  border-color: #212231;
  border-width: 2px;
}
button:hover{
  color: #81B29A;
  cursor: pointer;
}
</style>