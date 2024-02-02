import { siteConfig } from "@/config/site";
import { Icons } from "@/lib/Icons";
import { FC } from "react";
import SkillSet from "../skill-set";

interface homeProps {
  children: React.ReactNode;
}

const Home: FC<homeProps> = ({ children }) => {
  return (
    <section id="home" className="w-full h-screen lg:h-[44rem] mt-20 md:mt-6">
      <div className="w-full h-full px-4 md:px-12 lg:px-40">
        <div className="h-full flex flex-col justify-center gap-8 md:gap-4">
          <div className="flex  flex-col-reverse items-center lg:flex-row gap-2">
            <div className="max-w-2xl relative flex flex-col gap-3">
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-center lg:text-start font-bold leading-tight">
                Full-Stack Web Developer
              </h1>
              <p className="text-sm md:text-lg text-site-white/90 font-medium leading-normal text-center lg:text-start ">
                Hi, I'm{" "}
                {siteConfig.fullName}. A passionate Full-stack Web Developer
                based in {siteConfig.location}. 📍
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
            {children}
          </div>
          <SkillSet />
        </div>
      </div>
    </section>
  );
};

export default Home;
