<template>
  <v-container>
    <h1>{{ t('welcome') }}</h1>
    <p>{{ t('description') }}</p>

    <v-btn color="primary" class="mt-4">
      {{ t('testButton') }}
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
const { t } = useLocale()
</script>
