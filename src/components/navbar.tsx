"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#617a39]">
      <nav className="mx-auto flex items-center h-20 max-w-6xl justify-between px-6">
        {/* Logo / Name */}
        <Link
          href="#"
          className="text-2xl font-semibold tracking-wide text-white"
        >
          Ragini<span className="text-white/80">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-white/90 transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}

          <Button
            asChild
            className="bg-white px-6 py-2 text-base text-[#556B2F] hover:bg-white/90"
          >
            <Link href="/Resume.pdf" target="_blank">
              Resume
            </Link>
          </Button>

        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white md:hidden hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-[#617a39] text-white"
          >
            <div className="flex flex-col gap-8 pt-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xl font-medium"
                >
                  {item.name}
                </Link>
              ))}

              <Button
                asChild
                className="mt-6 bg-white text-[#556B2F] hover:bg-white/90"
              >
                <Link href="/Resume.pdf" target="_blank">
                  Resume
                </Link>
              </Button>

            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
