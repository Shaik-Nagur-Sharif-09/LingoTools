import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  FaHome,
  FaLanguage,
  FaRandom,
  FaQrcode,
  FaLock,
  FaStickyNote,
  FaEnvelope,
  FaSignInAlt,
} from "react-icons/fa";

import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
      isActive
        ? "bg-cyan-500/20 text-cyan-400"
        : "text-white hover:bg-white/10 hover:text-cyan-400"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 shadow-lg">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent"
        >
          LingoTools
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">

          <NavLink to="/" className={navClass}>
            <FaHome />
            Home
          </NavLink>

          <NavLink to="/translator" className={navClass}>
            <FaLanguage />
            Translator
          </NavLink>

          <NavLink to="/generator" className={navClass}>
            <FaRandom />
            Generator
          </NavLink>

          <NavLink to="/qr-generator" className={navClass}>
            <FaQrcode />
            QR
          </NavLink>

          <NavLink to="/password-checker" className={navClass}>
            <FaLock />
            Password
          </NavLink>

          <NavLink to="/notes" className={navClass}>
            <FaStickyNote />
            Notes
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            <FaEnvelope />
            Contact
          </NavLink>

          <Link
            to="/login"
            className="ml-3 flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg text-white transition"
          >
            <FaSignInAlt />
            Login
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-6 py-5 flex flex-col gap-3">

          <NavLink to="/" className={navClass} onClick={() => setOpen(false)}>
            <FaHome />
            Home
          </NavLink>

          <NavLink
            to="/translator"
            className={navClass}
            onClick={() => setOpen(false)}
          >
            <FaLanguage />
            Translator
          </NavLink>

          <NavLink
            to="/generator"
            className={navClass}
            onClick={() => setOpen(false)}
          >
            <FaRandom />
            Generator
          </NavLink>

          <NavLink
            to="/qr-generator"
            className={navClass}
            onClick={() => setOpen(false)}
          >
            <FaQrcode />
            QR Generator
          </NavLink>

          <NavLink
            to="/password-checker"
            className={navClass}
            onClick={() => setOpen(false)}
          >
            <FaLock />
            Password Checker
          </NavLink>

          <NavLink
            to="/notes"
            className={navClass}
            onClick={() => setOpen(false)}
          >
            <FaStickyNote />
            Notes
          </NavLink>

          <NavLink
            to="/contact"
            className={navClass}
            onClick={() => setOpen(false)}
          >
            <FaEnvelope />
            Contact
          </NavLink>

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="mt-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg py-3 text-center text-white font-semibold"
          >
            Login
          </Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;