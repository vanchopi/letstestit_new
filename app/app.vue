<template>
  <v-app>
    <Navbar v-if="route.path !== '/'"/>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
