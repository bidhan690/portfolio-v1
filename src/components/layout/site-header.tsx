import { FC } from "react";
import MobileNav from "./mobile-nav";
import { navLinks, siteConfig } from "@/config/site";

interface SiteHeaderProps {
}

const SiteHeader: FC<SiteHeaderProps> = ({ }) => {
  return (
    <nav>
      <div className="px-4 pt-6 md:px-12 md:pt-6 lg:px-32 lg:pt-12">
        <div className="flex items-center justify-between">
          <a href="/">
            <h1 className="text-3xl font-jua ">{siteConfig.name}</h1>
          </a>
          <MobileNav />
          <div className="hidden md:flex gap-x-5 text-lg font-semibold ">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-700 transition-all duration-300 hover:-translate-y-1"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SiteHeader;
