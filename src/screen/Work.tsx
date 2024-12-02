import { Icon } from "@iconify/react/dist/iconify.js"

const Work = () => {
  return (
    <div className="overflow-hidden">
      <h4 className="text-3xl font-semibold flex text-black items-center ">
        PORTFOLIO
        <div className="ml-10 sm:min-w-[50vh] py-[1.3px] bg-blue-400">
        </div>
      </h4>
      <div className="flex flex-col md:items-end items-center md:mt-0 mt-5">
        <div className="flex items-center gap-10 mt-5 mr-5">
          {
            optionFolio.map((item) => (
              <div key={item.id} className="cursor-pointer hover:opacity-50 duration-200 flex items-center gap-3 mb-4">

                <h2 className={`font-semibold text-gray-500 text-[16px] ${item.id === '1' ? 'text-blue-600' : 'text-black'}`}>
                  {item.title}
                </h2>
              </div>
            ))
          }
        </div>
        <div className="grid lg:grid-cols-2 md:gap-4 gap-8 my-8 md:mr-[18px] lg:mr-10 mr-2">
          {
            cardProject.map((item) => (
              <div key={item.id} className="group relative z-0  duration-700 text-neutral-50 lg:min-w-[60vh] md:min-w-[70vh] sm:min-w-[60vh] xs:min-w-[20vh] min-w-[10vh] overflow-hidden min-h-[30vh] bg-white rounded-[20px] shadow-lg flex flex-col items-start justify-start">
                <div className=" relative z-10 w-full ">
                  <img src={image} className="object-cover w-full h-[200px] p-3 rounded-[20px] group-hover:scale-110 transition-all duration-700" alt="" />
                  <div className="relative flex items-center w-full justify-between">
                    <div className="flex flex-col p-4">
                      <span className="text-sm text-gray-400">App Development</span>
                      <h2 className="text-black">Ecommerce App</h2>
                    </div>
                    <div className="flex items-center gap-3 p-4">
                      <Icon icon="vscode-icons:file-type-reactjs" className=" text-2xl" />
                      <span className="text-black">React</span>
                    </div>
                  </div>
                </div>
                <span className="absolute inset-0 overflow-hidden rounded-md"><span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-gray-200  transition-all duration-700 group-hover:-translate-x-0 group-hover:scale-150"></span></span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

/*
<button class="group relative z-0 h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-8 py-2 text-neutral-50"><span class="relative z-10">Hover Me</span><span class="absolute inset-0 overflow-hidden rounded-md"><span class="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-blue-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span></span></button>
*/

const image = 'https://cdn.dribbble.com/userupload/9213901/file/original-336b35b284bc15ea5580929fda50de31.png?resize=400x0'
const optionFolio = [
  {
    id: "1",
    title: "All",
  },
  {
    id: "3",
    title: "App Development",
  },
  {
    id: "2",
    title: "Web Development",
  },

];

const cardProject = [
  {
    id: '1'
  },
  {
    id: '2'
  },
  {
    id: '3'
  },
  {
    id: '4'
  }
]
export default Work