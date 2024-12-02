import './App.css'
import { Icon } from '@iconify/react';
import UserInfo from './components/UserInfo';
import AppContent from './components/AppContent';

function App() {
  return (
    <main className='font-georgia overflow-hidden  h-full w-full p-10 relative flex flex-col items-center justify-center mx-auto bg-[#7FC7D9]'>
      <header className="animate-fade-top flex md:gap-x-1 gap-x-6 w-full p-4 items-center justify-between md:mr-1 mr-9 max-w-7xl">
        <div className="flex gap-3 items-center font-pacifico">
          <h3 className='text-black text-2xl'>Armando</h3>
          <span className='text-[#D4EBF8] text-2xl'>Sanchez</span>
        </div>
        <div className="flex gap-4">
          <div className='cursor-pointer px-3 py-3 rounded-full border-[4px] border-slate-300 bg-[#D4EBF8]'>
            <Icon icon="material-symbols-light:dark-mode-outline" width="24" height="24" />
          </div>
          <nav className="md:hidden flex items-center cursor-pointer rounded-[10px] px-3 py-1">
            <Icon icon="material-symbols:menu" width="24" height="24" />
          </nav>
        </div>
      </header>

      <div className='flex lg:flex-row flex-col gap-3 mt-40 '>
        <UserInfo />
        <AppContent />
      </div>

      <footer className='mt-10 text-gray-500'>
        Derechos reservado © 2024 Armando Sanchez
      </footer>

    </main>
  )
}

export default App
