import { useEffect } from 'react'
import { UseStorage } from './useStorage'

export const UseToggle = () => {
  const [isToggled, setToggle] = UseStorage('tw-theme', false)

  useEffect(() => {
    isToggled
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [isToggled])

  return [isToggled, setToggle]
}