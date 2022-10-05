<template>
  <button class="menuButton">{{text}}
   <img :src="img"/>
  </button>
</template>
<script>
export default {
  name: "MenuIconButton",
  props: {
    text: String,
    img: String,
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
  border-width: 2px;
  border-color: #212231;
  background-color: #A9ABC6;
  width: 2rem;
  height: 2rem;
  margin: 2%;
}
img{
  left: 0;
  width: 1rem;
  height: 1rem;
}
button:hover{
  background-color: #81B29A;
  cursor: pointer;
}
</style>