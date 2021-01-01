<template>
  <header class="header">
    <router-link to="/">
      <img class="logo" alt="Pokemon logo" src="@/assets/logo.svg" />
    </router-link>

    <div class="nav">
      <router-link to="/"><span>Home</span></router-link>
      <router-link to="/Pokedex"><span>Pokedex</span></router-link>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import url("../styles/main.css");

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--third);
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-items: center;
  height: 80px;
  box-shadow: 0px 6px 6px 0px rgba(33, 33, 33, 0.13);
  color: var(--dark);
}
.nav {
  display: flex;
  position: relative;
  top: 23px;
  justify-items: center;

  a {
    margin-left: 33px;
    margin-right: 33px;
    font-size: 1.5rem;
    line-height: 29px;
  }
}

.logo {
  width: 157px;
  height: 63px;
  margin-top: 10px;
}

.router-link-active span {
  border-bottom: 3px solid;
  padding-bottom: 16px;
}
</style>
