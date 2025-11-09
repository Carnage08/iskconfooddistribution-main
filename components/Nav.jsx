"use client";

import React, { useState, useMemo, useCallback } from "react";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";

const Nav = () => {
  // ✅ Memoized Items — avoids recreation on every render
  const navItems = useMemo(
    () => [
      { name: "Upcoming Events", link: "#Upcoming" },
      { name: "Impact", link: "#Impacts" },
      { name: "Gallery", link: "/Gallery" },
      { name: "About Us", link: "/About_Us" },
    ],
    []
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ Use clean & stable toggle function
  const toggleMenu = useCallback(
    () => setIsMobileMenuOpen((prev) => !prev),
    []
  );

  const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/10"
      aria-label="Main Navigation"
    >
      <Navbar>
        {/* ✅ Desktop Navigation */}
        <NavBody>
          <a href="/" aria-label="Go to Home">
            <NavbarLogo />
          </a>

          <nav aria-label="Primary Navigation" className="hidden md:flex gap-8">
            {navItems.map((item, idx) => (
              <a
                key={`desktop-link-${idx}`}
                href={item.link}
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:opacity-80 transition-opacity font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <NavbarButton variant="primary">Donate</NavbarButton>
            <ThemeToggleButton />
          </div>
        </NavBody>

        {/* ✅ Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />

            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={closeMenu}>
            <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={closeMenu}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-xl font-medium"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex w-full flex-col gap-4 mt-6">
              <NavbarButton
                onClick={closeMenu}
                variant="primary"
                className="w-full"
              >
                Donate
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </header>
  );
};

export default Nav;
