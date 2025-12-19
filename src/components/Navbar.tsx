import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/utils/LanguageContext";
import { useState } from "react";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Sushil Mishra Insurance Advisor"
              width={140}
              height={40}
              priority
              className="object-contain"
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
          className="md:hidden text-gray-900 text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col p-4 gap-4 text-sm text-gray-700">
            <li>
              <Link href="/#home" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/#achievements" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="/#insurance" onClick={closeMenu}>
                Insurance
              </Link>
            </li>
            <li>
              <Link href="/#testimonials" onClick={closeMenu}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/#contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>

            <div className="flex gap-3 pt-2 text-gray-600">
              <button onClick={() => setLang("en")}>EN</button>
              <button onClick={() => setLang("hi")}>हिंदी</button>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
