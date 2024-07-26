import { tv } from 'tailwind-variants'
import { Switch } from '@headlessui/react'
import { UseTheme } from './hooks/useTheme'

const AppVariants = tv({
  slots: {
    layout: 'w-full min-h-screen grid overflow-x-hidden bg-gradient-to-r from-cyan-500 to-sky-500 dark:from-indigo-500 dark:to-purple-500 text-[#f8f8f2]',
    container: 'w-full h-full flex flex-col items-center justify-center gap-4 px-6 py-8',
    title: 'font-medium text-center uppercase tracking-widest',
    toggle: 'h-6 w-14 group flex rounded-full outline outline-2 outline-black/20 bg-black/10',
    shift: 'h-6 w-8 rounded-full transform translate-x-0 group-aria-checked:translate-x-6 transition ease-in-out duration-200 bg-white',
  }
})

const { layout, container, title, toggle, shift } = AppVariants()

export const App = () => {
  const [isEnabled, setEnable] = UseTheme()

  return (
    <div className={layout()}>
      <div className={container()}>
        <h1 className={title()}>Stored Theme Hooks</h1>
        <Switch className={toggle()} checked={isEnabled} onChange={setEnable}>
          <span className={shift()} aria-hidden={true} />
        </Switch>
      </div>
    </div>
  )
}