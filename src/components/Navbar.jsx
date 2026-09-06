import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, User, X } from "lucide-react";
import NavDropdown from "./NavDropdown.jsx";
import Button from "./Button.jsx";
import { navSections } from "./navConfig.js";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState(null);
  const { isAuthenticated, member } = useAuth();

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1920px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-extrabold text-brand-600">
          <img src="/favicon.svg" alt="" width={32} height={32} aria-hidden="true" />
          <span>
            FNP<span className="hidden sm:inline"> · Forward Nigeria Party</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navSections.map((section) =>
            section.items ? (
              <NavDropdown key={section.label} label={section.label} items={section.items} />
            ) : (
              <NavLink
                key={section.to}
                to={section.to}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm font-semibold ${
                    isActive ? "bg-brand-50 text-brand-700" : "text-ink-800 hover:bg-brand-50 hover:text-brand-600"
                  }`
                }
              >
                {section.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button to={isAuthenticated ? "/dashboard" : "/login"} variant="ghost" size="md">
            <User size={16} aria-hidden="true" />
            {isAuthenticated ? member?.firstName ?? "Dashboard" : "Login"}
          </Button>
          <Button to="/donate" variant="outline" size="md">
            Donate
          </Button>
          <Button to="/join" variant="primary" size="md">
            Join FNP
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-ink-800 hover:bg-ink-100 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-ink-100 bg-white px-4 py-3 lg:hidden">
          <nav aria-label="Mobile primary" className="flex flex-col gap-1">
            {navSections.map((section) =>
              section.items ? (
                <div key={section.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-2 py-3 text-left font-semibold text-ink-900"
                    aria-expanded={openMobileSection === section.label}
                    onClick={() =>
                      setOpenMobileSection((v) => (v === section.label ? null : section.label))
                    }
                  >
                    {section.label}
                    <ChevronDown
                      size={18}
                      className={openMobileSection === section.label ? "rotate-180" : ""}
                      aria-hidden="true"
                    />
                  </button>
                  {openMobileSection === section.label && (
                    <div className="ml-2 flex flex-col gap-1 border-l border-ink-100 pl-3">
                      {section.items.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setMobileOpen(false)}
                          className="rounded-lg px-2 py-2 text-sm text-ink-700 hover:bg-ink-50"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={section.to}
                  to={section.to}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-2 py-3 font-semibold text-ink-900 hover:bg-ink-50"
                >
                  {section.label}
                </Link>
              )
            )}
          </nav>
          <div className="mt-3 flex flex-col gap-2 border-t border-ink-100 pt-3">
            <Button to={isAuthenticated ? "/dashboard" : "/login"} variant="outline" onClick={() => setMobileOpen(false)}>
              {isAuthenticated ? "My Dashboard" : "Login"}
            </Button>
            <Button to="/join" variant="primary" onClick={() => setMobileOpen(false)}>
              Join FNP
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
