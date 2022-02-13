import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo-square-colour.svg";
import { XIcon } from "@heroicons/react/solid";
import { Minus } from "iconoir-react";
import { AnimatePresence, motion } from "framer-motion";

interface MenuProps {
  className?: string;
  onClose: () => void;
  isOpen: boolean;
}

class MenuLink {
  label: string;
  href: string;
  isMinor: boolean;

  constructor(label: string, href: string, isMinor = false) {
    this.label = label;
    this.href = href;
    this.isMinor = isMinor;
  }
}

const Menu = ({ className = "", onClose, isOpen }: MenuProps) => {
  const links = [
    new MenuLink("Café", "/cafe"),
    new MenuLink("Speisekarte", "/cafe#speisekarte", true),
    new MenuLink("Shop", "/shop"),
    new MenuLink("Beratung & Kurse", "/beratungen-kurse"),
    new MenuLink("Kontakt", "/kontakt"),
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`fixed top-0 left-0 w-full h-full bg-white z-20 overflow-y-auto ${className}`}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", duration: 0.6 }}
        >
          <button
            className="fixed flex items-center justify-center w-12 h-12 top-12 right-8"
            onClick={onClose}
          >
            <XIcon className="w-10 h-10 text-orange hover:text-dark-orange" />
          </button>
          <div className="flex justify-center mt-12">
            <Link href="/">
              <a className="w-1/4" onClick={onClose}>
                <Image
                  src={logo}
                  width={46}
                  height={47}
                  layout="responsive"
                  alt="ANNA & OTTO - Das Familiencafé"
                />
              </a>
            </Link>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            {links.map((link, index) => (
              <div className={link.isMinor ? "-mt-4" : ""} key={index}>
                <Link href={link.href}>
                  <a
                    className={`flex items-center justify-center h-12 text-grau font-text ${
                      link.isMinor ? "text-lg" : "text-3xl"
                    }`}
                    onClick={onClose}
                  >
                    {link.label}
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-6 mt-8 mb-20 text-grau font-text">
            <div>
              <Link href="/impressum">
                <a onClick={onClose}>Impressum</a>
              </Link>{" "}
              |{" "}
              <Link href="/datenschutz">
                <a onClick={onClose}>Datenschutz</a>
              </Link>
            </div>
            <Minus />
            <div>täglich von 8:00 - 17:30 Uhr geöffnet</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
