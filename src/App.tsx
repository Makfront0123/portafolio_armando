import './App.css';
import { Icon } from '@iconify/react';
import UserInfo from './components/UserInfo';
import AppContent from './components/AppContent';
import { useEffect, useState } from 'react';
import ThemeToggleButton from './components/ThemeToggleButton';
import Menu from './components/Menu';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newTheme;
    });
  };

  return (
    <main className="relative font-georgia overflow-hidden h-full w-full p-10 flex flex-col items-center justify-center mx-auto bg-gradient-to-tr from-sky-300 via-blue-400 to-blue-400 dark:from-sky-900 dark:via-blue-800 dark:to-teal-700">
      <header className="animate-fade-top flex md:gap-x-1 gap-x-6 z-10 w-full items-center justify-between md:mr-1 mr-9 max-w-7xl">
        <div className="flex gap-3 items-center font-pacifico">
          <h3 className="text-black text-2xl">Armando</h3>
          <span className="text-[#D4EBF8] text-2xl">Sanchez</span>
        </div>
        <div className="flex gap-4">
          <ThemeToggleButton darkMode={darkMode} toggleTheme={toggleTheme} />
          <nav onClick={toggleMenu} className="lg:hidden flex items-center cursor-pointer rounded-[10px] px-3 py-1" aria-label="Abrir menú">
            <Icon icon="material-symbols:menu" width="24" height="24" />
          </nav>
        </div>
      </header>

      <Menu showMenu={showMenu} toggleMenu={toggleMenu} />

      

      <div className="flex lg:flex-row flex-col gap-3 mt-40 z-10">
        <UserInfo />
        <AppContent />
      </div>

      <footer className="mt-10 text-gray-300 dark:text-white">
        Derechos reservados © 2024 Armando Sanchez
      </footer>

      <button onClick={() => document.getElementById('end')?.scrollIntoView({ behavior: 'smooth' })} className="md:hidden hover:scale-105 transition-all duration-200 fixed bottom-8 right-7 px-4 z-10 py-4 bg-sky-600 rounded-full">
        <Icon icon="material-symbols:arrow-upward-alt" width="28" height="28" className="text-white" />
      </button>

      <img src="src/assets/bg-ad.png" className="animate-fade-img absolute inset-y-0 right-0 opacity-30 object-fill max-w-3xl" alt="" />
      <img src="src/assets/bg-ad.png" className="animate-fade-img absolute bottom-0 left-0 opacity-50 object-fill max-w-3xl" alt="" />
    </main>
  );
}

export default App;
