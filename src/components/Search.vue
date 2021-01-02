<template>
  <div class="search">
    <input type="text" placeholder="Search a pokemon..."
    v-model="query"
    @focus="toggleDropdown"
    @blur="toggleDropdown"
    @keyup.enter="handleSearch"/>
    <div class="dropdown-content"
    v-if="showDropdown && query.length > 0 && pokemons.length > 0">
      <span v-for="item in pokemons.slice(0,5)" :key="item"
      @click="dropdownClicked(item)"><a>{{item}}</a></span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pokemonNames() {
      return this.$store.getters.getPokemonNames;
    },
    pokemons() {
      return this.pokemonNames.filter((item) => item.toLowerCase().startsWith(
        this.query.toLowerCase(),
      ));
    },
  },
  data() {
    return {
      showDropdown: false,
      query: '',
    };
  },
  methods: {
    dropdownClicked(item) {
      this.query = '';
      console.log(item);
    },
    toggleDropdown() {
      setTimeout(() => { this.showDropdown = !this.showDropdown; }, 100);
    },
    handleSearch(item) {
      console.log(item);
    },
  },
};
</script>

<style lang='scss' scoped>
.search {
  margin-top: 30px;
  justify-content: center;
  text-align:center;
  align-items:center;
}
input {
  width: 70%;
  height: 50px;
  background-color: var(--white);
  color: var(--dark);
  text-indent: 40px;
  border-radius: 40px;
  border: 1px solid rgba(1, 28, 64, 0.1);
  box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.1);

  &:focus {
    outline: none;
    border: 1px solid rgba(1, 28, 64, 0.8);
  }
}

.dropdown-content {
  position: absolute;
  left: 0;
  right: 0;
  width: 55%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  box-shadow: 4px 16px 16px rgba(1, 28, 64, 0.5);
  border-radius: 20px;
  background-color: var(--white);
  text-align: left;
  span {
    display: flex;
    align-items: center;
    text-align:center;
    border-bottom: 1px solid rgba(1, 28, 64, 0.1);
    border-width: 20%;
    cursor:pointer;
    a {
      margin-left: 25px;
      font-size: 1.3rem;
      height: 100%;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
}
</style>
