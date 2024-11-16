import { IoIosContacts } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosMailUnread } from "react-icons/io";
import { IoIosPhonePortrait } from "react-icons/io";
function ContactMe() {
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold leading-relaxed flex gap-4 items-center">
        <span className="bg-basic p-3 rounded-full">
          <IoIosContacts className="bg-basic" />
        </span>
        Contact
      </h1>
      <div className="mt-10 ml-16 flex gap-8 flex-col justify-center items-center md:flex-row lg:flex-row lg:justify-evenly">
        <div className="border-2  border-basic p-3 w-60 rounded-2xl">
          <h1 className="text-xl font-bold leading-relaxed flex flex-col gap-4 items-center">
            <span className="bg-basic p-3 rounded-full">
              <IoLocationOutline className="bg-basic text-4xl" />
            </span>
            Location
          </h1>
          <div className="flex flex-col items-center">
            <small>Pampore, Srinagar</small>
            <small>Jammu and Kashmir, 192121</small>
          </div>
        </div>
        <div className="border-2  border-basic p-3 w-60 rounded-2xl">
          <h1 className="text-xl font-bold leading-relaxed flex flex-col gap-4 items-center">
            <span className="bg-basic p-3 rounded-full">
              <IoIosMailUnread className="bg-basic text-4xl" />
            </span>
            Email Address
          </h1>
          <div className="flex flex-col items-center">
            <small>khansalmaan163@gmail.com</small>
            <small>khandaysalmaan00@gmail.com</small>
          </div>
        </div>
        <div className="border-2  border-basic p-3 w-60 rounded-2xl">
          <h1 className="text-xl font-bold leading-relaxed flex flex-col gap-4 items-center">
            <span className="bg-basic p-3 rounded-full">
              <IoIosPhonePortrait className="bg-basic text-4xl" />
            </span>
            Phone Number
          </h1>
          <div className="flex flex-col items-center">
            <small>+91 7006-172-734</small>
            <small>+91 9797-856-884</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
