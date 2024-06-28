import { useEffect } from 'react'
import { UseLocalStorage } from './hooks'

export const App = () => {
  const [isToggled, setToggle] = UseLocalStorage<boolean>('@theme-toggle', true)

  useEffect(() => {
    isToggled
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [isToggled])

  return (
    <button onClick={() => setToggle(!isToggled)} className={'w-full min-h-screen font-medium uppercase tracking-[1rem] dark:text-[#f8f8f2] dark:bg-[#282A36]'}>
      {isToggled ? 'Dark Theme' : 'Light Theme'}
    </button>
  )
}