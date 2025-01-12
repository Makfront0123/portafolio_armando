import { Link } from "react-router-dom";
import { navLinks } from "./Layout";
import { Icon } from '@iconify/react'

const Menu = ({ showMenu, toggleMenu }: { showMenu: boolean; toggleMenu: () => void }) => (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden transition-transform duration-300 transform ${showMenu ? 'translate-x-0' : '-translate-x-full'}`} onClick={toggleMenu}>
        <div className="w-64 p-3 bg-sky-200 dark:bg-gray-800 text-black dark:text-white h-full">
            {navLinks.map((item) => (
                <Link to={item.link} key={item.id} onClick={() => { toggleMenu(); document.getElementById('action')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    <div className="cursor-pointer hover:opacity-50 duration-300 flex gap-3 h-[50px] drop-shadow-md w-full my-4 text-white items-center justify-center bg-gradient-to-r from-[#52a4b9] via-[#42b5d1] to-[#03b5e2]">
                        <Icon icon={item.icon} width="24" height="24" />
                        <span className="text-sm">{item.title}</span>
                    </div>
                </Link>
            ))}
        </div>
    </div>
);


export default Menu