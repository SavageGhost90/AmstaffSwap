import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'AmstaffSwap',
  description:
    'Join AMF And Stake Tokens An Open Source Project On The BSC Network Visit Our Github Page To Contribute!',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('AmstaffSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('AmstaffSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('AmstaffSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('AmstaffSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('AmstaffSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('AmstaffSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('AmstaffSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('AmstaffSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('AmstaffSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('AmstaffSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('AmstaffSwap')}`,
      }
    default:
      return null
  }
}
