import { Icon } from '@iconify/react';

const ThemeToggleButton = ({ darkMode, toggleTheme }: { darkMode: boolean; toggleTheme: () => void }) => (
    <button onClick={toggleTheme} className="cursor-pointer px-3 py-3 rounded-full border-[4px] border-slate-300 bg-[#D4EBF8] dark:bg-[#333333] dark:border-gray-700">
        <Icon icon={darkMode ? 'material-symbols:light-mode-outline' : 'material-symbols:dark-mode-outline'} width="24" height="24" />
    </button>
);

export default ThemeToggleButton;