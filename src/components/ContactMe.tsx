import { IoIosContacts } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosMailUnread } from "react-icons/io";
import { IoIosPhonePortrait } from "react-icons/io";
function ContactMe() {
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold leading-relaxed flex gap-4 items-center">
        <span className="bg-basic p-3 rounded-full">
          <IoIosContacts className="bg-basic dark:text-white" />
        </span>
        Contact
      </h1>
      <div className="mt-10 mx-auto lg:ml-16 flex gap-8 flex-col justify-center items-center md:flex-row lg:flex-row lg:justify-evenly">
        <div className="border-2  border-basic p-3 w-[90%]  rounded-2xl">
          <h1 className="text-xl font-bold leading-relaxed flex flex-col gap-4 items-center">
            <span className="bg-basic p-3 rounded-full">
              <IoLocationOutline className="bg-basic text-4xl dark:text-white" />
            </span>
            Location
          </h1>
          <div className="flex flex-col items-center">
            <small>Pampore, Srinagar</small>
            <small>Jammu and Kashmir, 192121</small>
          </div>
        </div>
        <div className="border-2  border-basic p-3 w-[90%] rounded-2xl">
          <h1 className="text-xl font-bold leading-relaxed flex flex-col gap-4 items-center">
            <span className="bg-basic p-3 rounded-full">
              <IoIosMailUnread className="bg-basic text-4xl dark:text-white " />
            </span>
            Email Address
          </h1>
          <div className="flex flex-col items-center">
            <a href="mailto:khansalmaan163@gmail.com">
              khansalmaan163@gmail.com
            </a>
            <a href="mailto:khandaysalmaan00@gmail.com">
              khandaysalmaan00@gmail.com
            </a>
          </div>
        </div>
        <div className="border-2  border-basic p-3 w-[90%] rounded-2xl">
          <h1 className="text-xl font-bold leading-relaxed flex flex-col gap-4 items-center">
            <span className="bg-basic p-3 rounded-full">
              <IoIosPhonePortrait className="bg-basic text-4xl dark:text-white" />
            </span>
            Phone Number
          </h1>
          <div className="flex flex-col items-center">
            <a href="tel:+917006172734">+91 7006-172-734</a>
            <a href="tel:+919797856884">+91 9797-856-884</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
