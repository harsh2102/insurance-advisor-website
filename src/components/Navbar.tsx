import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/utils/LanguageContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  const navItems = [
    { href: "/#home", label: t.nav_home },
    { href: "/#about", label: t.nav_about },
    { href: "/#insurance", label: t.nav_insurance },
    { href: "/#testimonials", label: t.nav_testimonials },
    { href: "/#why-choose-me", label: t.nav_contact },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-lg shadow-lg border-b border-gray-200/50"
          : "bg-white/95 md:bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Sushil Mishra Insurance Advisor"
              width={120}
              height={35}
              priority
              className="object-contain sm:w-[140px] sm:h-[40px] transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Language Toggle - Desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center"
        >
          <div className="flex items-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-1.5 border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
            <button
              onClick={() => setLang("en")}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 touch-manipulation ${
                lang === "en"
                  ? "bg-white text-blue-600 shadow-lg border-2 border-blue-300 scale-105"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
              }`}
              aria-label="Switch to English"
            >
              <span className="flex items-center gap-2">
                <span className="text-base">🇬🇧</span>
                <span>EN</span>
              </span>
            </button>
            <button
              onClick={() => setLang("hi")}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 touch-manipulation ${
                lang === "hi"
                  ? "bg-white text-green-600 shadow-lg border-2 border-green-300 scale-105"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
              }`}
              aria-label="Switch to Hindi"
            >
              <span className="flex items-center gap-2">
                <span className="text-base">🇮🇳</span>
                <span>हिंदी</span>
              </span>
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden p-2.5 -mr-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl transition-all duration-200 hover:bg-gray-100 active:bg-gray-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle mobile menu"
          aria-expanded={open}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.svg
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </motion.svg>
            ) : (
              <motion.svg
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-x-0 top-[73px] bg-white border-t-2 border-gray-200 shadow-2xl overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block px-4 py-3.5 rounded-xl text-base font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 hover:text-gray-900 active:bg-gray-100 transition-all duration-200 touch-manipulation border-l-4 border-transparent hover:border-blue-500"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}

              {/* Language Toggle - Mobile */}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05, duration: 0.3 }}
                className="pt-4 mt-3 border-t-2 border-gradient-to-r from-blue-200 to-green-200"
              >
                <div className="px-2">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2 flex items-center gap-2">
                    <span>🌐</span>
                    <span>Language / भाषा</span>
                  </p>
                  <div className="flex items-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-1.5 border-2 border-gray-200 shadow-md">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 px-4 py-3 rounded-lg text-base font-bold transition-all duration-300 touch-manipulation ${
                        lang === "en"
                          ? "bg-white text-blue-600 shadow-lg border-2 border-blue-300"
                          : "text-gray-600 hover:text-gray-900 active:bg-white/50"
                      }`}
                      onClick={() => {
                        setLang("en");
                        closeMenu();
                      }}
                      aria-label="Switch to English"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span className="text-xl">🇬🇧</span>
                        <span>English</span>
                      </span>
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 px-4 py-3 rounded-lg text-base font-bold transition-all duration-300 touch-manipulation ${
                        lang === "hi"
                          ? "bg-white text-green-600 shadow-lg border-2 border-green-300"
                          : "text-gray-600 hover:text-gray-900 active:bg-white/50"
                      }`}
                      onClick={() => {
                        setLang("hi");
                        closeMenu();
                      }}
                      aria-label="Switch to Hindi"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span className="text-xl">🇮🇳</span>
                        <span>हिंदी</span>
                      </span>
                    </motion.button>
                  </div>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
