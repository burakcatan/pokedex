<template>
    <div class="a">
        <h1>Gallery</h1>
    </div>
</template>

<script>
export default {
  name: 'Gallery',
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
