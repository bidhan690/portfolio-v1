import { FC } from "react";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

interface skillSetProps {
  className?: string;
}

const SkillSet: FC<skillSetProps> = ({ className }) => {
  return (
    <div className={cn("",className)}>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-site items-center justify-center lg:justify-start">
        <h2>Tech Stack</h2>
        <Separator className="h-0.5 w-20 lg:h-6 lg:w-[2px] bg-gray-400" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <img
            className="cursor-pointer transition-all duration-300 hover:-translate-y-2"
            src="https://skillicons.dev/icons?i=html,css"
            alt="skill-icon"
          />
          <img
            className="cursor-pointer transition-all duration-300 hover:-translate-y-2"
            src="https://skillicons.dev/icons?i=js,ts"
            alt="skill-icon"
          />
          <img
            className="cursor-pointer transition-all duration-300 hover:-translate-y-2"
            src="https://skillicons.dev/icons?i=react,next"
            alt="skill-icon"
          />
          <img
            className="cursor-pointer transition-all duration-300 hover:-translate-y-2"
            src="https://skillicons.dev/icons?i=tailwind,scss"
            alt="skill-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
