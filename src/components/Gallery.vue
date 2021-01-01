<template>
  <div class="gallery-wrapper">
    <ul class="gallery">
      <li v-for="pokemon in pokemons" :key="pokemon"><Card :pokemon="pokemon"/></li>
    </ul>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'Gallery',
  components: {
    Card,
  },
  computed: {
    pokemons() {
      return this.$store.state.pokemons;
    },
  },
  created() {
    this.$store.dispatch('fetchPokemons');
  },
};
</script>

<style lang='scss' scoped>
.gallery-wrapper{
  justify-content: center;
}

ul {
    margin-top: 20px;
    display:grid;
    grid-template-columns: repeat(auto-fill,minmax(350px, 1fr));
    width: 80%;
    margin-left:auto;
    margin-right:auto;
    justify-content: center;

}
li {
  list-style: none;
  margin-left: auto;
  margin-right: auto;
}
// li{
//     list-style: none;
//     float:left;
//     margin:20px;
// }
</style>
