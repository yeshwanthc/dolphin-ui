import React from "react";
import Link from "next/link";
import { Waves } from "lucide-react";

const Header = () => {
  return (
    <>
      <header className="container px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Waves className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Dolphin UI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#components"
          >
            Components
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#cta"
          >
            Get Started
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
