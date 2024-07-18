import { useEffect } from 'react'
import { Switch } from '@headlessui/react'

import { UseLocalStorage } from '../hooks'

export const SwitchComponent = () => {
  const [isToggled, setToggle] = UseLocalStorage('@theme-toggle', true)

  useEffect(() => {
    isToggled
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [isToggled])

  return (
    <Switch checked={isToggled} onChange={setToggle} className={'relative inline-flex h-10 w-20 shrink-0 cursor-pointer rounded-full bg-black/25 border-2 border-transparent focus:outline-none'}>
      <span className={'sr-only'}>Theme LocalStorage</span>
      <span aria-hidden={true} className={`${isToggled ? 'translate-x-10' : 'translate-x-0'} pointer-events-none inline-block h-9 w-9 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`} />
    </Switch>
  )
}