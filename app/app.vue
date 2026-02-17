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
<style lang="scss">
body .v-application{
  background: #3B4752;
  background: radial-gradient(circle,rgba(59, 71, 82, 1) 0%, rgba(39, 195, 184, 1) 46%);
  color: #A9B4C0;
}
</style>