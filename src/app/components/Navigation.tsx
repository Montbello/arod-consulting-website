import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Sprachumschalter deaktiviert — keine i18n implementiert
  const location = useLocation();

  const navLinks = [
    { label: 'Start', href: '/' },
    { label: 'Leistungen', href: '/leistungen' },
    { label: 'Förderung', href: '/foerderung' },
    { label: 'Projekte', href: '/projekte' },
    { label: 'Über mich', href: '/ueber-mich' },
    { label: 'Kontakt', href: '/kontakt' },
  ];


  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0d1220]/95 backdrop-blur-sm border-b border-[rgba(245,197,0,0.15)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f5c500] to-[#cc1634] flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-[#080c14] text-xl font-bold">AR</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-semibold text-[#f0f4ff]">A.Rod Consulting</div>
              <div className="text-xs text-[#8896a8]">From 0 to 100 Real Quick</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm transition-colors ${
                  isActive(link.href)
                    ? 'text-[#f5c500] font-medium'
                    : 'text-[#8896a8] hover:text-[#f0f4ff]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Language */}
          <div className="hidden lg:flex items-center gap-4">
            {/* CTA Button */}
            <Link
              to="/kontakt"
              className="px-6 py-2.5 bg-[#f5c500] text-[#080c14] rounded-lg text-sm font-semibold hover:bg-[#ffd633] transition-all hover:shadow-[0_0_20px_rgba(245,197,0,0.3)] hover:scale-105"
            >
              Erstgespräch buchen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#f0f4ff] hover:text-[#f5c500] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#111827] border-t border-[rgba(245,197,0,0.15)]">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-base transition-colors ${
                  isActive(link.href)
                    ? 'text-[#f5c500] font-medium'
                    : 'text-[#8896a8] hover:text-[#f0f4ff]'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              to="/kontakt"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full py-3 bg-[#f5c500] text-[#080c14] rounded-lg text-center font-semibold hover:bg-[#ffd633] transition-colors"
            >
              Erstgespräch buchen
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
