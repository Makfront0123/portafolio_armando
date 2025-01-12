import { Outlet, Link } from "react-router-dom";
import { Icon } from '@iconify/react';
const Layout = () => {
    return (
        <>
            <nav className="lg:flex hidden absolute -top-[16%] justify-evenly gap-7 trans -right-2 rounded-[10px] min-w-[70vh] p-5  py-1">
                {
                    navLinks.map((item) => (
                        <Link to={item.link}>
                            <div key={item.id} className=' cursor-pointer hover:opacity-50 duration-300 flex  gap-3 h-[50px] drop-shadow-md w-[150px] ml-4 rounded-[20px] text-white items-center justify-center bg-gradient-to-r from-[#52a4b9] via-[#42b5d1] to-[#03b5e2]'>
                                <Icon icon={item.icon} width="24" height="24" />
                                <span className='text-sm'>{item.title}</span>
                            </div>
                        </Link>
                    ))
                }
            </nav>



            <Outlet />


        </>
    )
};

export const navLinks = [
    {
        id: 1,
        title: 'Home',
        icon: 'mdi-light:home',
        link: '/'
    },
    {
        id: 2,
        title: 'Resume',
        icon: 'material-symbols:task-outline-rounded',
        link: '/resume'
    },
    {
        id: 3,
        title: 'Work',
        icon: 'material-symbols-light:work',
        link: '/work'
    },
    {
        id: 4,
        title: 'Contact',
        icon: 'material-symbols-light:perm-contact-calendar-rounded',
        link: '/contact'
    }
]




export default Layout;

