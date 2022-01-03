<template>
  <section class="game-board">
    <Card
      v-for="card in cardList"
      :key="card.position"
      :value="card.value"
      :isVisible="card.isVisible"
      :isMatched="card.isMatched"
      :position="card.position"
      @click="flipCard"
    />
  </section>
  <h2>{{ status }}</h2>
  <button @click="restartGame" class="reset-button">Reset Gry</button>
</template>

<script>
import Card from "./Card";
import { ref, watch } from "vue";
import deck from "@/data/deck.json";
import createDeck from "@/features/createDeck.js";
import createGame from "@/features/createGame.js";

export default {
  name: "GameBoard",
  components: {
    Card,
  },
  setup() {
    const { cardList } = createDeck(deck);
    const { restartGame, startGame, matchesFound, status } =
      createGame(cardList);
    const userSelection = ref([]);


    cardList.value = cardList.value.map((card, index) => {
      return {
        ...card,
        position: index,
      };
    });

    const flipCard = (payload) => {
      cardList.value[payload.position].isVisible = true;
      if (userSelection.value[0]) {
        if (userSelection.value[0].position === payload.position) {
          return;
        } else {
          userSelection.value[1] = payload;
        }
      } else {
        userSelection.value[0] = payload;
      }
    };

    watch(
      userSelection,
      (selectionValue) => {
        if (selectionValue.length === 2) {
          const cardFirst = selectionValue[0];
          const cardSecond = selectionValue[1];
          const isisMatched = cardFirst.faceValue === cardSecond.faceValue;
          if (isisMatched) {
            setTimeout(() => {
              cardList.value[cardFirst.position].isMatched = true;
              cardList.value[cardSecond.position].isMatched = true;
            }, 500);
          } else {
            setTimeout(() => {
              cardList.value[cardFirst.position].isVisible = false;
              cardList.value[cardSecond.position].isVisible = false;
            }, 500);
          }

          userSelection.value.length = 0;
        }
      },
      { deep: true }
    );

    restartGame();

    return {
      cardList,
      flipCard,
      userSelection,
      startGame,
      restartGame,
      matchesFound,
      status,
    };
  },
};
</script>

<style>
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
