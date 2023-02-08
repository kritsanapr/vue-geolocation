<script lang="ts" setup>
import useGeolocaltion from "../composables/useGeolocaltion";

const { location } = useGeolocaltion(true);
</script>

<template>
  <br />
  <hr />
  <div class="input-location">
    <input v-model="location.latitude" type="text" />
    <input v-model="location.longitude" type="text" />
  </div>
</template>

<style scoped></style>
