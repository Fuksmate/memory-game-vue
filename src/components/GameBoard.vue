<template>
  <Card
    v-for="(card, index) in cardList"
    :key="index"
    :value="card.value"
    :visible="card.visible"
    :matched="card.matched"
    :position="card.position"
    @select-card="flipCard"
  />
  <h2>{{ matchStatus }}</h2>
  <button @click="restartGame" class="reset-button">Reset Gry</button>
</template>

<script>
import Card from "./Card";
import _ from "lodash";

export default {
  name: "App",
  components: {
    Card,
  },
  data() {
    return {
      cardList: [],
      userSelection: [],
      cardItems: [
        "#66FFFF",
        "#990033",
        "#FFFF00",
        "#0E0E0E",
        "#76FF03",
        "#1029A1",
        "#696969",
        "#CF7E3C",
      ],
    };
  },
  created() {
    this.cardItems.forEach((item) => {
      this.cardList.push({
        value: item,
        visible: false,
        matched: false,
      });

      this.cardList.push({
        value: item,
        visible: false,
        matched: false,
      });
    });
    this.cardList = this.cardList.map((card, index) => {
      return {
        ...card,
        position: index,
      };
    });
     this.restartGame()
  },
  computed: {
    matchStatus() {
      if (this.remainingPairs === 0) {
        return "Gracz Wygrywa";
      } else {
        return `Pozostałe Pary: ${this.remainingPairs}`;
      }
    },
    remainingPairs() {
      const remainingCards = this.cardList.filter(
        (card) => card.matched === false
      ).length;
      return remainingCards / 2;
    },
  },
  methods: {
    shuffleCards() {
      this.cardList = _.shuffle(this.cardList);
    },
    restartGame() {
      this.shuffleCards();
      this.cardList = this.cardList.map((card, index) => {
        return {
          ...card,
          position: index,
          matched: false,
          visible: false,
        };
      });
    },

    flipCard(payload) {
      if (!this.cardList[payload.position].matched) {
        this.cardList[payload.position].visible = true;
        if (this.userSelection[0]) {
          if (this.userSelection[0].position === payload.position) {
            return;
          } else {
            this.userSelection[1] = payload;
          }
        } else {
          this.userSelection[0] = payload;
        }
        if (this.userSelection.length === 2) {
          if (
            this.userSelection[1].faceValue === this.userSelection[0].faceValue
          ) {
            setTimeout(() => {
              this.cardList[this.userSelection[1].position].matched = true;
              this.cardList[this.userSelection[0].position].matched = true;
              this.userSelection.length = 0;
            }, 1000);
          } else {
            setTimeout(() => {
              this.cardList[this.userSelection[1].position].visible = false;
              this.cardList[this.userSelection[0].position].visible = false;
              this.userSelection.length = 0;
            }, 500);
          }
        }
      }
    },
  },
};
</script>
