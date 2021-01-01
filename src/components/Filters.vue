<template>
    <div class="filters">
        <span v-for="type in types" :key="type">
            <input type="checkbox" :name="type" :id="type" @change="typeChecked($event, type)">
            <label :for="type">{{type}}</label>
        </span>
    </div>
</template>

<script>
export default {
  computed: {
    types() {
      return this.$store.getters.getTypes;
    },
  },
  methods: {
    typeChecked({ target }, type) {
      if (target.checked) {
        this.$store.dispatch('addType', type);
      } else {
        this.$store.dispatch('removeType', type);
      }
    },
  },
  created() {
    this.$store.dispatch('fetchTypes');
  },
};
</script>

<style lang='scss' scoped>
.filters{
    width: 80%;
    display:grid;
    grid-template-columns: repeat(auto-fill,minmax(150px, 1fr));
    margin-top: 20px;
    margin-left:auto;
    margin-right:auto;
    padding: 20px 0px 20px 40px;
    height:auto;
    color: black;
    justify-items: left;
    background-color: #F6F7F9;
    box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    border-radius: 8px;

    span * {
    padding: 5px;
  }
}
</style>
