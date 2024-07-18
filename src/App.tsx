import { SwitchComponent } from './components'

export const App = () => {
  return (
    <div className={'w-full min-h-screen grid overflow-x-hidden text-[#f8f8f2] bg-gradient-to-r from-sky-500 to-cyan-500 dark:from-blue-500 dark:to-indigo-500'}>
      <div className={'w-full h-full flex flex-col items-center justify-center gap-4 px-6 py-8'}>
        <h1 className={'font-medium text-center uppercase tracking-widest'}>Theme LocalStorage</h1>
        <SwitchComponent />
      </div>
    </div>
  )
}