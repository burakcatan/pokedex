<template>
  <div class="pokedex">
    <div class="headline">
      <h1>All <b>Pokemons</b> for you to choose your favorite</h1>
    </div>
    <Search />
    <Gallery />
  </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue';
import Search from '@/components/Search.vue';

export default {
  components: {
    Gallery,
    Search,
  },
};
</script>

<style lang='scss' scoped>
.pokedex {
  padding-top: 140px;
  padding-left: 10%;
  padding-right: 10%;
  text-align: center;
}
h1 {
  font-size: 2em;
  letter-spacing: 3px;
  line-height: 40px;
}
</style>
