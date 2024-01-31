import { Icons } from "@/lib/Icons";
import { FC, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { navLinks } from "@/config/site";

interface mobileNavProps {
}

const MobileNav: FC<mobileNavProps> = ({ }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex md:hidden">
      <Sheet open={isOpen} onOpenChange={modalToggle}>
        <SheetTrigger>
          <Icons.menu className="w-8 h-8" />
        </SheetTrigger>
        <SheetContent className="min-w-full">
          <SheetHeader>
            <SheetTitle>
              <a href="/" onClick={modalToggle}>
                Bidhan.dev
              </a>
            </SheetTitle>
          </SheetHeader>
          <div className="h-full flex flex-col justify-center items-center gap-6 text-3xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={modalToggle}
                className="hover:text-blue-700 transition-all duration-300 hover:-translate-y-1"
              >
                {link.name}
              </a>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
