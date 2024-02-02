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
            <SheetTitle className="text-site">
              <a href="/" onClick={modalToggle}>
                Bidhan.dev
              </a>
            </SheetTitle>
          </SheetHeader>
            <ul className="h-full flex flex-col gap-6">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                className="text-site-secondary font-semibold uppercase"
                >
                  <a
                    href={link.href}
                    onClick={modalToggle}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
