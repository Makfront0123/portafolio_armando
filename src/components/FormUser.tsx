

const FormUser = () => {
    return (
        <form action="#" className="flex flex-col  gap-y-4 w-full md:-mt-8 mt-10">
            <FormInput title='Name' />
            <FormInput title='Email' />
            <FormInput title='Message' />
            <button className="rounded-[15px] max-w-[15vh] border-2 border-blue-400 px-5 py-2 mt-5 text-black hover:shadow-md transition-all duration-200 hover:shadow-blue-700 hover:bg-blue-400 hover:text-white">
                Submit
            </button>
        </form>
    )
}



export const FormInput = ({ title }: { title: string }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor="">
                <span className="text-gray-600 font-semibold">{title}</span>
            </label>
            <input type="text" className=" border-b-[1.7px] border-gray-400 bg-transparent" />
        </div>
    );
}


export default FormUser