import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="ahmedxyx@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+2 0100 490 2772" Image={FiPhone} />
      <SingleInfo text="Tanta, Egypt" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
