import { siteConfig } from "@/config/site";
import { FC } from "react";

interface AboutProps {
  AstroCoding: React.ReactNode;
}

const About: FC<AboutProps> = ({ AstroCoding }) => {
  return (
    <section
      id="about"
      className="w-full py-44 "
    >
      <div className="px-4 md:px-12 lg:px-32 ">
      <div className="my-auto flex flex-col items-center lg:flex-row gap-8 md:gap-12 lg:gap-32">
        {AstroCoding}
        <div className="text-center lg:text-start  flex flex-col gap-4">
          <h1 className="text-xl font-sans font-bold text-blue-500 uppercase">
            About me
          </h1>
          <h1 className="text-2xl md:text-3xl text-semibold font-bold text-gray-800 ">
            Full-stack developer based in {siteConfig.location} 📍
          </h1>
          <p className="font-medium text-slate-600 ">
            Hey, my name is Bidhan, and I'm a Full-stack Developer. My passion is
            to create and develop a clean UI/UX for my users.
            <br /> <br />
            My main stack currently is React/Next.js in combination with
            Tailwind CSS and TypeScript.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;
