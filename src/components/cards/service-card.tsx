import { FC } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  className?: string;
  name?: string;
  description?: string;
  children?: React.ReactNode;
}

const ServiceCard: FC<ServiceCardProps> = ({ className,name,description,children }) => {
  return (
    <Card className={cn("bg-transparent border-transparent w-[300px]", className)}>
      <CardHeader className="items-center md:items-start">
        {children}
      </CardHeader>
      <CardContent>
        <h1 className="font-bold ">{name}</h1>
        <p className="text-sm font-medium text-gray-800 ">{description}</p>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
