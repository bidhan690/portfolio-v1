import { siteConfig } from "@/config/site";
import { Icons } from "@/lib/Icons";
import { FC } from "react";

interface homeProps {
  AstroProfile: React.ReactNode;
}

const Home: FC<homeProps> = ({ AstroProfile }) => {
  return (
    <section
      id="home"
      className="w-full flex "
    >
            <div className="px-4  md:px-12  lg:px-32 ">

      <div className="w-full mx-0 my-auto flex justify-center flex-col-reverse items-center md:items-center lg:flex-row gap-2">
        <div className="max-w-2xl relative flex flex-col gap-3">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-center lg:text-start font-bold leading-tight">
            Full-Stack Web Developer
          </h1>
          <p className="text-sm md:text-lg text-site-white/90 font-medium leading-normal text-center lg:text-start ">
            Hi, I'm{" "}
            {siteConfig.fullName}. A passionate Full-stack Web Developer based
            in {siteConfig.location}. 📍
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-x-3 ">
            <a href={siteConfig.github} target="_blank">
              <Icons.github className="h-8 w-8  hover:stroke-site-blue" />
            </a>
            <a href={siteConfig.linkedin} target="_blank">
              <Icons.linkedin className="h-8 w-8 hover:stroke-site-blue" />
            </a>
          </div>
        </div>
        {AstroProfile}
      </div>
      </div>
    </section>
  );
};

export default Home;
