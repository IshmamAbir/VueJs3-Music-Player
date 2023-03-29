import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import ja from '@/locales/ja.json'

export default createI18n({
  locale: 'en',
  fallbackLocale: 'ja',
  messages: {
    en,
    ja
  }
})
