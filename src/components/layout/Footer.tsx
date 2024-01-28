import { siteConfig } from "@/config/site";
import { Icons } from "@/lib/Icons";
import { FC } from "react";

interface FooterProps {
}

const Footer: FC<FooterProps> = ({ }) => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black/90 w-full h-32">
      <div className="h-full px-4 md:px-12 lg:px-32 ">
        <div className="h-full flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">
            Copyright © {currentYear}. All rights are reserved
          </h1>
          <div className="flex gap-3">
            <a href={siteConfig.github} target="_blank">
              <Icons.github className="h-8 w-8 hover:scale-110 text-white stroke-white " />
            </a>
            <a href={siteConfig.linkedin} target="_blank">
              <Icons.linkedin className="h-8 w-8 hover:scale-110 stroke-white " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
