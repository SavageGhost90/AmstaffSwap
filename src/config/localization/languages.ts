import { Language } from '@siacashcoin/uikit'

export const EN: Language = { locale: 'en-US', language: 'English', code: 'en' }
export const IT: Language = { locale: 'it-IT', language: 'Italiano', code: 'it' }

export const languages = {

  'en-US': EN,
  'it-IT': IT,
}

export const languageList = Object.values(languages)
