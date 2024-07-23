import { Switch } from '@headlessui/react'
import { UseToggle } from './hooks/useToggle'

export const App = () => {
  const [isEnabled, setEnable] = UseToggle()

  return (
    <div className={'w-full min-h-screen grid overflow-x-hidden bg-gradient-to-r from-sky-500 to-cyan-500 dark:from-blue-500 dark:to-indigo-500 text-[#f8f8f2]'}>
      <div className={'w-full h-full flex flex-col items-center justify-center gap-4 px-6 py-8'}>
        <h1 className={'font-medium text-center uppercase tracking-widest'}>React Custom Hooks</h1>
        <Switch checked={isEnabled} onChange={setEnable} className={'h-6 w-14 group flex rounded-full outline outline-2 outline-black/20 bg-black/10'}>
          <span aria-hidden={true} className={'h-6 w-8 rounded-full transform translate-x-0 group-aria-checked:translate-x-6 transition ease-in-out duration-200 bg-white'} />
        </Switch>
      </div>
    </div>
  )
}