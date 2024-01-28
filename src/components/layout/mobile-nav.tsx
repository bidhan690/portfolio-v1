import { Icons } from "@/lib/Icons";
import { FC, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

interface mobileNavProps {
}

const MobileNav: FC<mobileNavProps> = ({ }) => {
  useEffect(() => {
  }, []);
  return (
    <div className="flex md:hidden">
      <Sheet>
        <SheetTrigger>
          <Icons.menu className="w-8 h-8" />
        </SheetTrigger>
        <SheetContent className="min-w-full">
          <SheetHeader>
            <SheetTitle>Bidhan.dev</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4">
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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
