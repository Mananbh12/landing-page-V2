"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Fermer le menu mobile après navigation
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Déterminer si on est sur la page d'accueil pour utiliser les ancres
  const isHome = pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF3E0]/80 backdrop-blur-md shadow-md pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold !text-black drop-shadow-lg">
              NJ
            </Link>
          </div>

          {/* Liens (Desktop) */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={isHome && item.link.startsWith("/#") ? item.link.replace("/#", "#") : item.link}
                className="!text-black hover:text-gray-700 text-sm font-medium drop-shadow-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Menu Hamburger (Mobile) */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="!text-black hover:bg-gray-200 drop-shadow-lg"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={isHome && item.link.startsWith("/#") ? item.link.replace("/#", "#") : item.link}
                  className="block !text-black hover:bg-gray-200 hover:text-gray-700 px-3 py-2 rounded-md text-base font-medium drop-shadow-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;