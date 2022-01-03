<template>
  <h1>MEMORY GAMME</h1>
  <button @click="creativeDeck" class="full-screen-button"></button>
  Full SCREEM
  <section class="game-board">
    <GameBoard/>
  </section>

</template>

<script>
import GameBoard from "./components/GameBoard";

export default {
  name: "App",
  components: {
    GameBoard,
  },
  
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Varela+Round");

body {
  font-family: "Varela Round", sans-serif;
  background-color: #1b1e20;
  color: #fff;
}
h1,
h2 {
  text-align: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  position: relative;
}
.game-board {
  display: grid;
  grid-template-columns: repeat(4, 120px);
  grid-template-rows: repeat(4, 120px);
  grid-column-gap: 5vw;
  grid-row-gap: 4vh;
  justify-content: center;
}
.reset-button {
  box-shadow: inset 0px 1px 3px 0px #91b8b3;
  background: linear-gradient(to bottom, #e8e8e8 5%, #6c7c7c 100%);
  background-color: #e8e8e8;
  border-radius: 5px;
  border: 1px solid #566963;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 22px;
  font-weight: bold;
  padding: 11px 23px;
  width: 300px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #2b665e;
}
.full-screen-button {
  margin: 20px;
  color: #1ccece;
  background-color: #1b1e20;
  font-size: 3rem;
  vertical-align: middle;
  box-sizing: border-box;
  display: inline-block;
  border: 0.1em solid black;
  width: 1em;
  height: 1em;
  position: relative;
}
.full-screen-button:before,
.full-screen-button:after {
  content: "";
  background: #1b1e20;
  position: absolute;
}
.full-screen-button:before {
  width: 0.333em;
  height: 1em;
  left: 0.233em;
  top: -0.1em;
}
.full-screen-button:after {
  width: 1em;
  height: 0.333em;
  top: 0.233em;
  left: -0.1em;
}
</style>
