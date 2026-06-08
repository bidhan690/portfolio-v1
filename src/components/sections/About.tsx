import { siteConfig } from "@/config/site";
import { FC } from "react";

interface AboutProps {
  children: React.ReactNode;
}

const About: FC<AboutProps> = ({ children }) => {
  return (
    <section id="about" className="w-full pt-32 pb-20 bg-white scroll-mt-24">
      <div className="px-4 md:px-12 lg:px-20 xl:px-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
            <div className="shrink-0">{children}</div>

            <div className="text-center lg:text-start flex flex-col gap-4">
              <h2 className="text-xl font-sans font-bold text-blue-500 uppercase">
                About me
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-site">
                Full-stack developer based in {siteConfig.location} 📍
              </h3>
              <p className="font-medium text-site-secondary">
                Hey, my name is Bidhan, and I'm a Full-stack Developer. My passion is building scalable, production-ready applications.
                <br /><br />
                My main stack is NestJS, React/Next.js with Tailwind CSS and TypeScript.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
