<template>
  <h1>MEMORY GAMME</h1>
  <button @click="toggleFullScreen" class="full-screen-button"></button>
  <GameBoard />
</template>

<script>
import GameBoard from "./components/GameBoard.vue";

export default {
  name: "App",
  components: {
    GameBoard,
  },
  methods: {
    toggleFullScreen() {
      if (document.fullscreenElement) {
        document
          .exitFullscreen()
          .then(() => console.log("Document Exited from Full screen mode"))
          .catch((err) => console.error(err));
      } else {
        document.documentElement.requestFullscreen();
      }
    },
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
