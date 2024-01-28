import { FC } from "react";
import MobileNav from "./mobile-nav";
import { siteConfig } from "@/config/site";

interface MainNavProps {
}

const MainNav: FC<MainNavProps> = ({ }) => {
  return (
    <nav>
      <div className="px-4 pt-2 md:px-12 md:pt-6 lg:px-32 lg:pt-12">
        <div className="flex items-center justify-between">
          <a href="/">
            <h1 className="text-3xl font-jua ">{siteConfig.name}</h1>
          </a>
          <MobileNav />
          <div className="hidden md:flex gap-x-5 text-lg font-semibold ">
            <a
              href="/#home"
              className=" hover:text-blue-700 transition-all duration-300 hover:-translate-y-1"
            >
              Home
            </a>
            <a
              href="/#about"
              className="hover:text-blue-700 transition-all duration-300 hover:-translate-y-1"
            >
              About
            </a>
            <a
              href="/#projects"
              className="hover:text-blue-700 transition-all duration-300 hover:-translate-y-1"
            >
              Projects
            </a>
            <a
              href="/#contact"
              className="hover:text-blue-700 transition-all duration-300 hover:-translate-y-1"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
