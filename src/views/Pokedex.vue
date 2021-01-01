<template>
  <div class="pokedex">
    <h1>Pokedex</h1>
  </div>
  <Gallery />
</template>

<script>
import Gallery from '@/components/Gallery.vue';

export default {
  components: {
    Gallery,
  },
};
</script>

<style lang='scss' scoped>
.pokedex {
  margin-top: 100px;
}

</style>
