<template>
  <div class="search">
    <input type="text"
    placeholder="Search a pokemon..."
    v-model="query"
    @keypress.enter="handleSearch()" />
  </div>
</template>

<style lang='scss' scoped>
.search {
  margin-top: 30px;
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
</style>
