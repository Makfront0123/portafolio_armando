import { Icon } from "@iconify/react/dist/iconify.js"
import FormUser from "../components/FormUser"

const Contact = () => {
  return (
    <div className="sm:p-0 p-5">
      <h4 className="text-3xl font-semibold flex text-black items-center ">
        CONTACT
        <div className="ml-10 sm:min-w-[50vh] py-[1.3px] bg-blue-400">
        </div>
      </h4>
      <div className="grid grid-rows-2">
        <div className="grid md:grid-cols-2 gap-x-10 md:gap-y-1 gap-y-5 my-20  ">
          <div className="px-10 py-12 rounded-[15px] max-h-[30vh]  bg-blue-300 shadow-md">
            <div className="flex items-start gap-x-4 md:justify-start justify-center">
              <Icon icon="material-symbols:perm-phone-msg-rounded" width="24" height="24" />
              <div className="flex flex-col items-start">
                <span className="text-lg">Phone</span>
                <p className="text-gray-600 font-medium">+58 412 9499039</p>
              </div>
            </div>
          </div>
          <div className="md:px-10 py-12 rounded-[15px] max-h-[30vh]  bg-gray-300 shadow-md">
            <div className="flex items-start gap-x-10 md:justify-start justify-center mx-auto">
              <Icon icon="material-symbols:mark-email-unread" width="24" height="24" />
              <div className="flex flex-col items-start md:-ml-8 -ml-0 ">
                <span className="text-lg">Email</span>
                <p className="text-gray-600 font-medium ">ing.sistemas2019@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-300 -mt-14 w-full px-10 py-4 min-h-[60vh] rounded-[15px] shadow-md">
          <p className="min-h-[20vh] w-2/3 leading-[30px] font-medium ">I am always open to discussing <strong >new projects</strong>,
            <strong >
              opportunities in tech world,
              partnerships and more so mentorship.</strong> </p>
          <FormUser />
        </div>
      </div>

    </div>
  )
}

export default Contact

