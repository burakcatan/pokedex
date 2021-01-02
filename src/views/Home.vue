<template>
  <div class="home">
    <div class="left">
      <h1 class="cover"><b>Find</b> all your favourite <b>Pokemons</b></h1>
      <h2>
        You can know the type of Pokemon, its strengths, disadvantages and
        abilities
      </h2>
      <router-link to="/Pokedex"><button>See pokemons</button></router-link>
    </div>
    <div class="banner">
      <img src="../assets/hero.svg" alt="" />
    </div>
  </div>
</template>

<style scoped>
.home {
  background-image: linear-gradient(180deg, #f5db13 0%, #f2b807 100%);
  padding-top: 140px;
  display: grid;
  grid-template-columns: 11fr 10fr;
  height: 100vh;
}
.left {
  padding-left: 155px;
  padding-top: 20px;
}
h1 {
  line-height: 74px;
  letter-spacing: 4px;
}
h2 {
  font-size: 2rem;
  line-height: 37px;
  margin-top: 32px;
}
button {
  background-color: #73d677;
  font-size: 1.5rem;
  font-weight: 700;
  width: 230px;
  height: 64px;
  color: var(--dark);
  margin-top: 32px;
  border-radius: 11px;
  box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
  cursor: pointer;
}
.banner {
  justify-self: right;
  margin-top: -70px;
}
</style>
