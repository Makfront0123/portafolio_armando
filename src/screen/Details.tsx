import { Link, useParams } from "react-router-dom"
import { cardProject } from "./Work"
import { Icon } from "@iconify/react/dist/iconify.js"
const Details = () => {
    const { id } = useParams()

    const project = cardProject.find((item) => item.id === id)
    console.log(project)

    return (
        <div className="flex flex-col ">
            <div className="flex items-center justify-center gap-10">
                <Link to={'/work'} className="flex-1">
                    <Icon icon="material-symbols:arrow-left-alt-rounded" width="34" height="34" className="hover:opacity-50" />
                </Link>
                <span className="text-3xl font-bold flex-grow">{project?.title}</span>
            </div>
            <div className="flex flex-col mx-auto">
                <img src={project?.image} className="object-contain w-full h-[300px] p-3 rounded-[30px] mt-10" alt="" />

                <div className="flex flex-col mt-10 text-center">
                    <span className="text-3xl mb-3 font-bold">Repository Url</span>
                    <a href={project?.repository} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-50 duration-300 text-black text-sm">
                        {project?.repository}
                    </a>
                </div>
                <div className="flex flex-col mt-14 text-center">
                    <span className="text-3xl mb-3 font-bold">Visit Web</span>
                    <a href={project?.url} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-50 duration-300 text-black text-sm">
                        {project?.url}
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Details