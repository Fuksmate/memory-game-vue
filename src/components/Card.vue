<template>
  <div class="card" :class="flippedStyles" @click="selectCard">
    <div :style="{ backgroundColor: value }" class="card-face is-front">
      <div v-if="matched" class="matched"></div>
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
    matched: {
      type: Boolean,
      default: false,
    },
    position: {
      type: Number,
      required: true,
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const flippedStyles = computed(() => {
      if (props.visible) {
        return "is-flipped";
      }
    });
    const selectCard = () => {
      context.emit("select-card", {
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
  border-radius: inherit;
  transform: rotateY(180deg);
}
.card.is-flipped {
  transform: rotateY(180deg);
}
.is-back {
  background-color: white;
  height: 100%;
}
.matched {
  position: absolute;
  background-color: white;
  transform: 1s;
  opacity: 0.3;
  width: 100%;
  height: 100%;
}
</style>
