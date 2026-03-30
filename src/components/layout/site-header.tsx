import { FC } from "react";
import MobileNav from "./mobile-nav";
import { navLinks, siteConfig } from "@/config/site";

interface SiteHeaderProps {}

const SiteHeader: FC<SiteHeaderProps> = ({}) => {
  return (
    <nav className="py-[25px] pl-[50px] pr-[40px] z-10 shadow-md items-center bg-white flex text-3xl h-auto justify-between left-0 fixed top-0 w-full">
      <a href="/">
        <h1 className="text-2xl font-jua ">{siteConfig.name}</h1>
      </a>
      <MobileNav />
      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className="transition-all duration-300 hover:-translate-y-1"
          >
            <a
              href={link.href}
              className="text-lg hover:text-blue-700 transition-all duration-300 text-gray-800 font-semibold no-underline"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SiteHeader;
