import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/utils/LanguageContext";
import { useState } from "react";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 md:bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Sushil Mishra Insurance Advisor"
              width={120}
              height={35}
              priority
              className="object-contain sm:w-[140px] sm:h-[40px]"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-700">
          <li>
            <Link className="hover:text-gray-900 transition" href="/#home">
              {t.nav_home}
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-900 transition" href="/#about">
              {t.nav_about}
            </Link>
          </li>
          <li>
            <Link className="hover:text-gray-900 transition" href="/#insurance">
              {t.nav_insurance}
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-900 transition"
              href="/#testimonials"
            >
              {t.nav_testimonials}
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-900 transition"
              href="/#why-choose-me"
            >
              {t.nav_contact}
            </Link>
          </li>
        </ul>

        {/* Language Toggle */}
        <div className="hidden md:flex items-center gap-3 text-sm text-gray-600">
          <button
            className={lang === "en" ? "font-semibold text-gray-900" : ""}
            onClick={() => setLang("en")}
          >
            EN
          </button>
          |
          <button
            className={lang === "hi" ? "font-semibold text-gray-900" : ""}
            onClick={() => setLang("hi")}
          >
            हिंदी
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2 text-gray-900 text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle mobile menu"
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[73px] bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-4 gap-2">
          {[
            { href: "/#home", label: t.nav_home },
            { href: "/#about", label: t.nav_about },
            { href: "/#insurance", label: t.nav_insurance },
            { href: "/#testimonials", label: t.nav_testimonials },
            { href: "/#why-choose-me", label: t.nav_contact },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors touch-manipulation"
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Language Toggle */}
          <li className="pt-4 mt-2 border-t border-gray-200">
            <div className="flex items-center justify-center gap-4 px-4 py-2">
              <button
                className={`px-4 py-2 rounded-lg text-base font-medium transition-colors touch-manipulation ${
                  lang === "en"
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => {
                  setLang("en");
                  closeMenu();
                }}
              >
                EN
              </button>
              <span className="text-gray-300">|</span>
              <button
                className={`px-4 py-2 rounded-lg text-base font-medium transition-colors touch-manipulation ${
                  lang === "hi"
                    ? "bg-green-100 text-green-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => {
                  setLang("hi");
                  closeMenu();
                }}
              >
                हिंदी
              </button>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
