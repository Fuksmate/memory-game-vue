<template>
  <div class="card" :class="flippedStyles" @click="selectCard">
    <div v-if="isVisible" :style="{ backgroundColor: value }" class="card-face is-front">
      <div v-if="isMatched" class="isMatched"></div>
    </div>
    <div class="card-face is-back"></div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";

export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    isMatched: {
      type: Boolean,
      default: false,
    },
    position: {
      type: Number,
      required: true,
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const flippedStyles = computed(() => {
      if (props.isVisible) {
        return "is-flipped";
      }
    });
    const selectCard = () => {
      context.emit("click", {
        position: props.position,
        faceValue: props.value,
      });
    };
    return {
      selectCard,
      flippedStyles,
    };
  },
};
</script>

<style>
.card {
  border: 1px solid #fff;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  transition: 0.5s transform ease-in;
  transform-style: preserve-3d;
  -webkit-box-shadow: 0px 0px 26px -7px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 0px 26px -7px rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 5px 3px rgb(148, 148, 148);
}
.card-face.is-front {
  height: 100%;
  width: 100%;
  position: absolute;
}
.card.is-flipped {
  transform: rotateY(180deg);
  
}
.is-back {
  height: 100%;
}
.isMatched {
  position: absolute;
  background-color: white;
  transform: 1s;
  opacity: 0.3;
  width: 100%;
  height: 100%;
}
</style>
