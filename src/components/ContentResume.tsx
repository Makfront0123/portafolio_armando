import { Icon } from "@iconify/react/dist/iconify.js"
interface Skill {
    id: string;
    title: string;
    icon: string;
}

interface ExperienceOrEducation {
    id: string;
    title: string;
    date?: string;
    carge?: string;
}

interface ContentProps {
    icon: boolean;
    title: string;
    arr: Skill[];
    array02: ExperienceOrEducation[];
    option: string;
}

const ContentResume = ({
    icon,
    title,
    arr,
    array02,
    option,
}: ContentProps) => {
    return (
        <div className="grid grid-rows-2 mt-20">
            <div className="flex flex-col items-start">
                <div className="flex items-center gap-3 md:mb-8 mb-10">
                    <h2 className="text-2xl font-bold">{option}</h2>
                </div>
                {array02.length > 0 && (
                    <div>
                        {array02.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col min-w-[55vh] h-[20vh] p-6 bg-gray-100 drop-shadow rounded-[10px]"
                            >
                                {item.date && <span className="text-gray-500">{item.date}</span>}
                                <strong className="mb-3">{item.title}</strong>
                                <p>{item.carge}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="md:-mt-14 mt-0">
                <span className="text-2xl font-bold">{title}</span>
                <div className="flex flex-wrap gap-4 mt-20">
                    {arr.map((item) => (
                        <div key={item.id} className="flex flex-wrap mb-10 items-center gap-3">
                            <div className="px-4 py-2 text-gray-600 bg-gray-300 rounded-md">
                                <span>{item.title}</span>
                            </div>
                            {icon && item.icon && (
                                <Icon icon={item.icon} className="text-8xl" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default ContentResume