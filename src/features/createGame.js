import _ from "lodash";
import { computed } from "vue";

export default function createGame(deck) {

  const restartGame = () => {
    deck.value = _.shuffle(deck.value);

    deck.value = deck.value.map((card, index) => {
      return {
        ...card,
        matched: false,
        position: index,
        visible: false,
      };
    });
  };

  const status = computed(() => {
    if (matchesFound.value === 8) {
      return "Gracz Wygrywa";
    } else {
      return `Pary połaczone: ${matchesFound.value}`;
    }
  });
  const matchesFound = computed(() => {
    const matchedCards = deck.value.filter(
      (card) => card.matched === true
    ).length;

    return matchedCards / 2;
  });

  return {
    matchesFound,
    restartGame,
    status,
  };
}
