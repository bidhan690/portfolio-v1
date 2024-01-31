import { FC } from "react";
import ServiceCard from "../cards/service-card";
import { Icons } from "@/lib/Icons";

interface ServicesProps {
}

const Services: FC<ServicesProps> = ({ }) => {
  return (
    <section id="services" className="py-32">
      <div className="px-4 md:px-12 lg:px-32 ">
        <div className="w-full flex flex-col gap-4">
          <h1 className="text-3xl text-center text-blue-600 font-semibold">
          Services
          </h1>
          <p className="text-xl text-center text-gray-800 font-semibold">
          I offer a wide range of services to help you achieve your goals.
          </p>
          
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <ServiceCard
            name="UI/UX Design"
            description="I specialize in crafting seamless digital experiences by combining aesthetics with functionality. From initial wireframes to interactive prototypes, my focus is on creating intuitive and engaging user interfaces."
          >
            <Icons.ui_ux className="w-20 h-20" />
          </ServiceCard>
          <ServiceCard
            className="shadow-xl mt-8"
            name="Web Development"
            description="With expertise in MERN stack and Django, I develop dynamic applications. I leverage modern frameworks like Next.js and Svelte to ensure responsiveness and efficiency, delivering web solutions that stand at the forefront of innovation."
          >
            <Icons.webdev className="w-20 h-20" />
          </ServiceCard>
          <ServiceCard
            name="App Development"
            description="
           In the realm of hybrid app development, I excel with React Native and Flutter, enabling the creation of cross-platform applications with a unified codebase. From concept to deployment, my goal is to provide cutting-edge and adaptable mobile solutions.            "
          >
            <Icons.appdev className="w-28 h-24 stroke-[#FD5956] fill-[#fd5956] " />
          </ServiceCard>
        </div>
      </div>
    </section>
  );
};

export default Services;
