import { Icon } from '@iconify/react';
import image from '/assets/userImage.jpg';
type socialType = {
    icon: string,
    id: number,
    color: string,
    url: string
}
type userType = {
    id: number,
    icon: string,
    color: string,
    title: string,
    desc: string
}

const UserInfo = () => {
    return (
        <div className="animate-fade-in  bg-[#DCF2F1] lg:min-h-[80vh] md:min-h-[160vh] sm:min-h-[150vh] min-h-[130vh]  flex flex-col items-start relative justify-center rounded-lg  min-w-[50vh]">
            <div className="absolute sm:p-5 p-20 mt-2 flex flex-col items-center justify-center -top-24 left-0 right-0">
                <img src={image} className="object-fill drop-shadow-md px-10 py-5 rounded-[100px] " alt="" />
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-black mb-2">Armando Sanchez</h2>
                    <span className="font-medium text-gray-400">FrontEnd Developer</span>
                </div>
                <div className="flex gap-3 items-center mt-7">
                    {
                        socialMedia.map((item, index) => (

                            <button
                                onClick={() => window.open(item.url)}
                                key={index}
                                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md py-4 px-4 bg-[#F2F5F9] font-medium text-neutral-200 transition hover:scale-110">
                                <Icon icon={item.icon} width="24" height="24" className={item.color} />
                                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                    <div className="relative h-full w-8 bg-white/80"></div>
                                </div></button>
                        ))
                    }
                </div>
                <div className='bg-[#F2F5F9] rounded-[30px] p-7 w-full lg:min-h-[50vh] md:min-h-[70vh] mt-8 '>
                    <div className='flex flex-col gap-y-10'>
                        {
                            infoUser.map((item: userType) => (
                                <div key={item.id} className="flex gap-3 items-center border-b-2 border-gray-200 p-2">
                                    <Icon icon={item.icon} width="24" height="24" className='text-orange-600' />
                                    <div className="flex flex-col text-sm">
                                        <span className='text-gray-500 font-bold'>{item.title}</span>
                                        <strong>{item.desc}</strong>
                                    </div>
                                </div>
                            ))
                        }

                        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md py-4 px-4 bg-gradient-to-r from-[#52a4b9] via-[#42b5d1] to-[#03b5e2] font-medium text-neutral-200 transition">
                            <a
                                href="/CV-Armando-flutter.pdf"
                                download="mi_curriculum.pdf"
                                className="flex items-center gap-2"
                            >
                                <Icon icon="material-symbols:download" className="text-[30px] text-white" />
                                <span className="text-sm text-white font-bold">Download Resume</span>
                            </a>
                            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                <div className="relative h-full w-8 bg-white/80"></div>
                            </div>
                        </button>



                    </div>
                </div>
            </div>
        </div>
    )
}

const socialMedia: socialType[] = [

    {
        id: 2,
        icon: 'ri:linkedin-fill',
        color: 'text-blue-300',
        url: 'https://www.linkedin.com/in/frontdev01?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }
    ,
    {
        id: 4,
        icon: 'ri:github-fill',
        color: 'text-black',
        url: 'https://github.com/Makfront0123'
    }
]

const infoUser: userType[] = [
    {
        id: 1,
        icon: 'material-symbols:phone-iphone',
        color: 'text-blue-700',
        title: 'Phone',
        desc: '+5841294990439'
    },
    {
        id: 2,
        icon: 'material-symbols:mail-outline-rounded',
        color: 'text-blue-300',
        title: 'Email',
        desc: 'ing.sistemas2019armando@gmail.com'
    }
    ,
    {
        id: 3,
        icon: 'material-symbols:location-on',
        color: 'text-black',
        title: 'Location',
        desc: 'Táchira, Venezuela'
    },

]

export default UserInfo