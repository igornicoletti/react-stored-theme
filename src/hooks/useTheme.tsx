import { useEffect } from 'react'
import { UseStorage } from './useStorage'

export const UseTheme = () => {
  const [isThemed, setTheme] = UseStorage('tw-theme', false)

  useEffect(() => {
    isThemed
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [isThemed])

  return [isThemed, setTheme]
}