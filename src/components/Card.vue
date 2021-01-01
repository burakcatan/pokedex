<template>
    <div class="card">
        <div class="props">
            <h3 class="title">{{pokemon.Name}}</h3>
            <div class="attr">
                <p class="attack circle">{{pokemon.BaseAttack}}</p>
                <p class="label">Attack</p>
            </div>
            <div class="attr">
                <p class="defense circle">{{pokemon.BaseDefense}}</p>
                <p class= "label">Defense</p>
            </div>
            <div class="types">
                <p :class="pokemon['Type I']">{{pokemon['Type I'][0]}}</p>
                <p :class="pokemon['Type II']"
                v-if="pokemon['Type II']">
                {{pokemon['Type II'][0]}} </p>
            </div>
        </div>
        <div class="img">
            <img :src="'/img/avatars/'+pokemon.Name+'.png'" alt="" rel="prefetch">
        </div>
    </div>

</template>

<script>
export default {
  props: {
    pokemon: Object,
  },
};
</script>

<style lang='scss' scoped>
img {
    width:150px;
    height:150px;
}
.props {
    margin-left:30px;
    margin-top:10px;
}
.card {
    display:grid;
    grid-template-columns: 1fr 1fr;
    width: 350px;
    height: 150px;
    background-color: #F6F7F9;
    text-align:left;
    box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    border-radius: 8px;
    margin: 10px;
}
.title {
    font-size: 1.3rem;
    font-weight: 700;
}
.attr {
    display:inline-block;
    margin: 5px 10px 0px 0px;
}
.circle{
    border: 3px solid black;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    line-height: 35px;
    margin: 5px;
}
.label {
    letter-spacing: 1px;
}
.label, .types p {
    font-size:0.9rem;
    display:inline-block;
}
.types p {
margin-right: 5px;
width: 65px;
height: 20px;
color: var(--dark);
border-radius: 10px;
box-shadow: inset 0px -3px 0px rgba(0, 0, 0, 0.18);
}
.attr, .types p {
    text-align:center;
    justify-content: center;
    letter-spacing: 1px;
}
.types {
    margin-top:10px;
}
</style>
