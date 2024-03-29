import { siteConfig } from "@/config/site";
import { Icons } from "@/lib/Icons";
import { FC } from "react";

interface FooterProps {
}

const SiteFooter: FC<FooterProps> = ({ }) => {
    const currentYear = new Date().getFullYear();
  return (
    <div className="bg-site w-full h-32">
      <div className="h-full px-4 md:px-12 lg:px-32 ">
        <div className="h-full flex flex-col md:flex-row justify-around md:gap-0 md:justify-between items-center">
          <h1 className="text-white text-base md:text-xl font-bold">
            Copyright © {currentYear}. All rights are reserved
          </h1>
          <div className="flex gap-4">
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

export default SiteFooter;
