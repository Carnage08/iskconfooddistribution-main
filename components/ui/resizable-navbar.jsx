"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import React, { useRef, useState } from "react";

// ---------------------- Main Navbar Wrapper ----------------------
export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 80);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible })
          : child
      )}
    </motion.div>
  );
};

// ---------------------- Desktop NavBody ----------------------
export const NavBody = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backgroundColor: "#ffffff",
        boxShadow: visible
          ? "0 2px 10px rgba(0,0,0,0.08)"
          : "0 1px 6px rgba(0,0,0,0.05)",
        scale: visible ? 0.98 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 35,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between rounded-xl px-8 py-3 lg:flex transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

// ---------------------- Nav Items ----------------------
export const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-neutral-600 lg:flex",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className={cn(
            "relative px-4 py-2 text-neutral-700 transition-all duration-200 hover:text-black rounded-lg",
            item.active ? "font-semibold" : ""
          )}
          key={`link-${idx}`}
          href={item.link}
        >
          {(hovered === idx || item.active) && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 rounded-lg bg-gray-100"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

// ---------------------- Mobile Navbar ----------------------
export const MobileNav = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        scale: visible ? 0.98 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 35,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-3 lg:hidden rounded-xl transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

// ---------------------- Mobile Nav Header ----------------------
export const MobileNavHeader = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-row items-center justify-between px-4", className)}>
      {children}
    </div>
  );
};

// ---------------------- Mobile Nav Menu ----------------------
export const MobileNavMenu = ({ children, className, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col gap-4 rounded-xl bg-white px-4 py-6 border border-neutral-200 shadow-lg",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ---------------------- Mobile Toggle ----------------------
export const MobileNavToggle = ({ isOpen, onClick }) => {
  return isOpen ? (
    <IconX className="text-black" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black" onClick={onClick} />
  );
};

// ---------------------- Logo ----------------------
export const NavbarLogo = () => {
  return (
    <div className="flex items-center">
      <img src="/logo.png" alt="logo" width={52} height={52} />
    </div>
  );
};

// ---------------------- Button ----------------------
export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "bg-black text-white hover:bg-neutral-800 shadow-sm",
    secondary:
      "bg-white border border-neutral-300 text-black hover:bg-neutral-100",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
