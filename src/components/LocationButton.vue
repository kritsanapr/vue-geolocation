<script lang="ts" setup>
import useGeolocaltion from "../composables/useGeolocaltion";
const { location, getLocation } = useGeolocaltion(false);
</script>
<template>
  <pre>
        {{ location }}
    </pre
  >
  <button @click="getLocation">Get Location</button>
</template>
