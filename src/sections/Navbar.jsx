
import { useState } from "react";
import { motion } from "motion/react"; // If you're using the Motion package
// If you're using Framer Motion instead, use:
// import { motion } from "framer-motion";
const menuIcon = "public/assets/menu.svg";
const closeIcon = "public/assets/close.svg";
function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>

      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>

      <li className="nav-li">
        <a className="nav-link" href="#work">
          Work
        </a>
      </li>

      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 inset-x-0 z-[9999] w-full bg-black/20 backdrop-blur-md">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Portfolio
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? closeIcon : menuIcon}
              alt="Menu Toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      <motion.div
  initial={{ opacity: 0, height: 0 }}
  animate={{
    opacity: isOpen ? 1 : 0,
    height: isOpen ? "auto" : 0,
  }}
  transition={{ duration: 0.3 }}
  className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg overflow-hidden sm:hidden z-[9999]"
>
  <nav className="py-6">
    <Navigation />
  </nav>
</motion.div>
    </div>
  );
};

export default Navbar;