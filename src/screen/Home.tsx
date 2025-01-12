import { Icon } from "@iconify/react/dist/iconify.js"

const Home = () => {
    return (
        <div className="overflow-hidden md:p-2 p-10">
            <h4 className="text-3xl font-semibold flex text-black items-center space-x-2">
                ABOUT ME
                <div className="ml-10 sm:min-w-[21vh] md:min-w-[45vh] py-[1.3px] bg-blue-400">
                </div>
            </h4>

            <div className="flex flex-col text-pretty leading-[30px] tracking-wide mt-7 font-medium">
                <p className="text-gray-600">
                    Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
                    full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
                    My journey in the world of web development has been nothing short of exhilarating, and
                    I constantly strive to enhance my skills and embrace emerging trends in the industry.
                </p>
                <h6 className="text-3xl font-bold mt-7 text-black">What I do!</h6>
                <div className="grid lg:grid-cols-2 lg:p-0 md:p-10 p-0 gap-3 mt-10 [&>div]:rounded-[30px] [&>div]:min-h-[30vh] [&>div]:shadow-md">
                    {
                        cardAboutMe.map((item) => (
                            <div key={item.id} className="bg-white p-5">
                                <div className="flex items-center gap-3 mb-4">
                                    <Icon icon={item.icon} className="text-red-600 text-2xl" />
                                    <h2 className="font-bold text-2xl text-black">
                                        {item.title}
                                    </h2>
                                </div>
                                <p className="text-sm text-pretty text-gray-700">
                                    {item.description}
                                </p>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}


const cardAboutMe = [
    {
        id: 1,
        icon: 'solar:code-bold',
        title: ' Web Development',
        description: 'I am a skilled FrontEnd Developer with a passion for creating innovative and user-friendly web applications. I am constantly pushing the boundaries of my expertise and strive to deliver top-notch results.'
    },
    {
        id: 2,
        icon: 'material-symbols:android',
        title: 'App Development',
        description: 'I am a skilled FrontEnd Developer with a passion for creating innovative and user-friendly web applications. I am constantly pushing the boundaries of my expertise and strive to deliver top-notch results.'
    },
    {
        id: 3,
        icon: 'material-symbols:work-outline',
        title: 'Templates Building',
        description: 'I am a skilled FrontEnd Developer with a passion for creating innovative and user-friendly web applications. I am constantly pushing the boundaries of my expertise and strive to deliver top-notch results.'
    },


]

export default Home