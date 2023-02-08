import { onMounted, ref } from "vue";

export default (init = false) => {
  const location = ref<{ latitude: number; longitude: number }>({
    latitude: 0,
    longitude: 0,
  });

  function getLocation() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      location.value.latitude = position.coords.latitude;
      location.value.longitude = position.coords.longitude;
    });
  }

  if (init) {
    onMounted(() => {
      getLocation();
    });
  }

  return { location, getLocation };
};
