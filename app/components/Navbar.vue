<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-toolbar-title>{{ t('appTitle') }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" variant="text" class="text-none">
          <v-icon start>mdi-translate</v-icon>
          {{ currentLanguageName }}
          <v-icon end>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="locale in locales"
          :key="locale.code"
          @click="changeLanguage(locale.code)"
          :active="locale.code === currentLocale"
        >
          <v-list-item-title>
            <v-icon start>mdi-flag-variant</v-icon>
            {{ locale.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list>
      <v-list-item prepend-icon="mdi-home" :title="t('menu.home')" value="home"></v-list-item>
      <v-list-item prepend-icon="mdi-information" :title="t('menu.about')" value="about"></v-list-item>
      <v-list-item prepend-icon="mdi-email" :title="t('menu.contacts')" value="contacts"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { t, currentLocale, setLocale, locales, currentLanguageName } = useLocale()
const drawer = ref(false)

const changeLanguage = (code: string) => {
  setLocale(code)
  console.log('Язык изменён на:', code)
}
</script>

<style scoped>
/* Дополнительные стили при необходимости */
</style>
