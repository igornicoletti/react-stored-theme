import { useEffect } from 'react'
import { Switch } from '@headlessui/react'

import { UseLocalStorage } from '../hooks'

export const SwitchComponent = () => {
  const [isToggled, setToggle] = UseLocalStorage('@theme-toggle', false)

  useEffect(() => isToggled
    ? document.documentElement.classList.add('dark')
    : document.documentElement.classList.remove('dark'), [isToggled])

  return (
    <Switch checked={isToggled} onChange={setToggle} className={'h-8 w-16 group flex rounded-full focus:outline-none border-4 border-black/5 bg-black/10'}>
      <span aria-hidden={true} className={'h-6 w-8 rounded-full transform translate-x-0 group-aria-checked:translate-x-6 transition ease-in-out duration-200 bg-white'} />
    </Switch>
  )
}