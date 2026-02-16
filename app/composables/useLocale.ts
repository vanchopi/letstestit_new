import { ref, computed } from 'vue'
import { useLocale as useVuetifyLocale } from 'vuetify'

const translations = {
  ru: {
    welcome: 'Добро пожаловать!',
    description: 'Используйте меню в правом верхнем углу для смены языка.',
    testButton: 'Тестовая кнопка',
    appTitle: 'Моё приложение',
    menu: {
      home: 'Главная',
      about: 'О нас',
      contacts: 'Контакты'
    }
  },
  en: {
    welcome: 'Welcome!',
    description: 'Use the menu in the upper right corner to change the language.',
    testButton: 'Test Button',
    appTitle: 'My Application',
    menu: {
      home: 'Home',
      about: 'About',
      contacts: 'Contacts'
    }
  }
}

const availableLocales = [
  { code: 'ru', name: 'Русский' },
  { code: 'en', name: 'English' }
]

export const useLocale = () => {
  const vuetifyLocale = useVuetifyLocale()

  const currentLocale = computed(() => vuetifyLocale.current.value)

  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[currentLocale.value as keyof typeof translations]

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key
      }
    }

    return value || key
  }

  const setLocale = (locale: string) => {
    vuetifyLocale.current.value = locale
  }

  const locales = availableLocales

  const currentLanguageName = computed(() => {
    const locale = availableLocales.find(l => l.code === currentLocale.value)
    return locale ? locale.name : 'Русский'
  })

  return {
    t,
    currentLocale,
    setLocale,
    locales,
    currentLanguageName
  }
}
