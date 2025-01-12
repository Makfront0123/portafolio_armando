import { Icon } from "@iconify/react/dist/iconify.js"
import { useState } from "react";
import { Link } from "react-router-dom";

const Work = () => {
  const [showOption, setShowOption] = useState('1')
  const handleOption = (id: string) => {
    setShowOption(id)
  }

  const filteredProjects = cardProject.filter((item) => item.option === optionFolio.find(option => option.id === showOption)?.title);
  return (
    <div className="overflow-hidden md:p-0 sm:p-3 p-5">
      <h4 className="text-3xl font-semibold flex text-black items-center ">
        PORTFOLIO
        <div className="ml-10 sm:min-w-[50vh] py-[1.3px] bg-blue-400">
        </div>
      </h4>
      <div className="flex flex-col md:items-end items-center md:mt-0 mt-5">
        <div className="flex items-center gap-10 mt-5 mr-5">
          {
            optionFolio.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer hover:opacity-50 duration-200 flex items-center gap-3 mb-4"
                onClick={() => handleOption(item.id)}
              >
                <h2 className={`font-semibold lg:md-mr-0 md:mr-4 sm:mr-1 mr-0 md:text-[16px] sm:text-[15px] text-[12px] ${item.id === showOption ? 'text-blue-400 font-extrabold border-b-[2px] border-blue-400' : 'text-gray-300 font-medium mb-1'}`}>
                  {item.title}
                </h2>
              </div>
            ))
          }
        </div>
        <div className="grid lg:grid-cols-2 md:gap-4  gap-8 my-8 md:mr-[18px] lg:mr-10 mr-2">
          {
            filteredProjects.map((item: any) => (
              <Link to={`/details/${item.id}`} key={item.id}>
                <div className="group relative z-0 cursor-pointer  duration-700 text-neutral-50 lg:min-w-[60vh] md:min-w-[70vh] sm:min-w-[60vh] xs:min-w-[20vh] min-w-[10vh] overflow-hidden min-h-[30vh] bg-white rounded-[20px] shadow-lg flex flex-col items-start justify-start">
                  <div className=" relative z-10 w-full ">
                    <img src={item.image} className="object-cover w-full h-[200px] p-3 rounded-[20px] group-hover:scale-110 transition-all duration-700" alt="" />
                    <div className="relative flex items-center w-full justify-between">
                      <div className="flex flex-col p-4">
                        <span className="text-sm text-gray-400">{item.option}</span>
                        <h2 className="text-black">{item.title}</h2>
                      </div>
                      <div className="flex items-center gap-3 p-4">
                        <Icon icon={item.icon} className=" text-2xl" />
                        <span className="text-black">{item.framework}</span>
                      </div>

                    </div>
                  </div>
                  <span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-gray-200  transition-all duration-700 group-hover:-translate-x-0 group-hover:scale-150"></span></span>
                </div>
              </Link>
            ))
          }

        </div>

      </div>
      {
        filteredProjects.length === 0 &&
        <div className="flex flex-col items-center justify-center text-center mt-20">
          <h2 className="text-black text-3xl font-bold">No projects found</h2>
          <p className="text-gray-500 text-sm">
            Sorry, but we couldn't find any projects that match your search criteria.
          </p>
        </div>
      }
    </div>
  )
}


const optionFolio = [
  {
    id: "2",
    title: "Full Stack",
  },
  {
    id: "1",
    title: "Frontend",
  },
  {
    id: "3",
    title: "Backend",
  },
  

];

export const cardProject = [
  {
    id:'565',
    option: 'Full Stack',
    title: 'Ecommerce Project',
    framework: 'Next.js',
    icon: 'vscode-icons:file-type-light-next',
    image: '/assets/ecommerce_01NEXT.png',
    url: 'https://ecommerce-web-012.vercel.app',
    repository: 'https://github.com/Makfront0123/ecommerce_web_012',
  },
  {
    id: '1',
    option: 'Frontend',
    title: 'Icy Tales Landing Page',
    framework: 'Astro',
    icon: 'vscode-icons:file-type-light-astro',
    image: '/assets/landing_astro_02.webp',
    url: 'https://landingastro002.vercel.app/',
    repository: 'https://github.com/Jakex2018/landing_astro_001',
  },
  {
    id: '2',
    option: 'Frontend',
    title: 'Restaurant Landing Page',
    framework: 'Astro',
    icon: 'vscode-icons:file-type-light-astro',
    image: '/assets/landing_astro_01.webp',
    url: 'https://landingastro001.vercel.app/',
    repository: 'https://github.com/Jakex2018/landing_astro_001',
  }, {
    id: '3',
    option: 'Full Stack',
    title: 'Shoes Ecommerce App',
    framework: 'Flutter',
    image: '/assets/ecommerce_flutter01.jpg',
    url: 'https://eco-app-bb2b7.web.app/',
    repository: 'https://github.com/Jakex2018/starbucks_app',
    icon: 'vscode-icons:file-type-flutter'

  },
]
export default Work