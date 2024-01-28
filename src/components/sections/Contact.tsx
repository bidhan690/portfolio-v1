import { siteConfig } from "@/config/site";
import { Icons } from "@/lib/Icons";
import { FC } from "react";

interface ContactsProps {
}

const Contact: FC<ContactsProps> = ({ }) => {
  return (
    <section id="contact" className="w-full py-32 ">
      <div className="px-4 md:px-12 lg:px-32 ">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-sans font-extrabold text-blue-500 uppercase">
            Contact
          </h1>
          <h1 className="text-2xl md:text-3xl text-semibold font-bold text-gray-800 ">
            Don't be shy! Hit me up! 👇
          </h1>
          <div className="flex flex-col md:flex-row gap-8 lg:gap-14 pt-8 lg:pt-16 justify-center lg:justify-start">
            <div className="flex gap-4 items-center">
              <Icons.map className="w-8 h-8 stroke-blue-600 " />
              <div className="flex flex-col gap-1">
                <h1 className="text-gray-800 font-extrabold">Location</h1>
                <p className="text-gray-600">{siteConfig.location}</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Icons.mail className="w-8 h-8 stroke-blue-600 " />
              <div className="flex flex-col gap-1">
                <h1 className="text-gray-800 font-extrabold">Mail</h1>
                <p className=" text-gray-600">{siteConfig.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
