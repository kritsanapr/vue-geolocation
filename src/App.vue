<script setup lang="ts">
import LocationButton from "./components/LocationButton.vue";
import LocationInput from "./components/LocationInput.vue";
import { useMouse } from "@vueuse/core";
import { onMounted, ref } from "vue";

const mouse = useMouse();
const mouseLog = ref("");

onMounted(() => {
  document.body.addEventListener("click", () => {
    mouseLog.value += `x: ${mouse.x.value}, y: ${mouse.y.value} \n`;
  });
});
</script>

<template>
  <LocationButton></LocationButton>
  <LocationInput></LocationInput>

  <hr />
  mouse: {{ mouse }}
  <hr />
  <h5>mouseLog:</h5>
  <textarea name="" id="" cols="30" rows="5" readonly>{{ mouseLog }}</textarea>
</template>

<style scoped>
body {
  margin: 0;
  padding: 1 rem;
  min-height: 100vh;
}
</style>
