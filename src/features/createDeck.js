import { ref } from 'vue'

const cardList = ref([])

const initDeck = deckData => {
  deckData.forEach(color => {
    cardList.value.push({
      value: color,
      variant: 1,
      isVisible: false,
      position: null,
      isMatched: false
    })

    cardList.value.push({
      value: color,
      variant: 2,
      isVisible: true,
      position: null,
      isMatched: false
    })
  })
}

const updateCardPosition = () => {
  cardList.value = cardList.value.map((card, index) => {
    return {
      ...card,
      position: index
    }
  })
}

export default function createDeck(deckData) {
  initDeck(deckData)
  updateCardPosition()

  return {
    cardList
  }
}