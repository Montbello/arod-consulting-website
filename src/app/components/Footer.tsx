import { Link } from 'react-router-dom';
import { Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const serviceLinks = [
    { label: 'Business Development', href: '/leistungen#business-dev' },
    { label: 'Digitalisierung', href: '/leistungen#digitalisierung' },
    { label: 'AI & Automation', href: '/leistungen#ai-automation' },
    { label: 'IT Consulting', href: '/leistungen#it-consulting' },
  ];

  const fundingLinks = [
    { label: 'BAFA Förderung', href: '/foerderung#bafa' },
    { label: 'INQA Coaching', href: '/foerderung#inqa' },
    { label: 'Förderrechner', href: '/foerderung#rechner' },
    { label: 'FAQ', href: '/foerderung#faq' },
  ];

  const legalLinks = [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'AGB', href: '/datenschutz' },
  ];

  return (
    <footer className="bg-[#0d1220] border-t border-[rgba(245,197,0,0.15)] mt-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Description */}
          <div>
            <Link to="/" className="flex items-center gap-3 group mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f5c500] to-[#cc1634] flex items-center justify-center">
                <span className="text-[#080c14] text-xl font-bold">AR</span>
              </div>
              <div>
                <div className="text-base font-semibold text-[#f0f4ff]">A.Rod Consulting</div>
              </div>
            </Link>
            <p className="text-sm text-[#8896a8] mb-6 leading-relaxed">
              Business Development, IT Consulting & KI-Integration für KMU. BAFA & INQA autorisiert.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/anderson-rodriguez-arod/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1a2235] flex items-center justify-center text-[#8896a8] hover:text-[#f5c500] hover:bg-[#1f2a40] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/arod-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#1a2235] flex items-center justify-center text-[#8896a8] hover:text-[#f5c500] hover:bg-[#1f2a40] transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Leistungen */}
          <div>
            <h4 className="text-base font-semibold text-[#f0f4ff] mb-4">Leistungen</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#8896a8] hover:text-[#f5c500] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Förderung */}
          <div>
            <h4 className="text-base font-semibold text-[#f0f4ff] mb-4">Förderung</h4>
            <ul className="space-y-3">
              {fundingLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#8896a8] hover:text-[#f5c500] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Rechtliches */}
          <div>
            <h4 className="text-base font-semibold text-[#f0f4ff] mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-[#8896a8] hover:text-[#f5c500] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[rgba(245,197,0,0.15)] mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#8896a8]">
              © 2026 A.Rod Consulting, Hamburg. Alle Rechte vorbehalten.
            </p>
            <p className="text-sm text-[#8896a8]">
              Technologie im Dienst des Menschen
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
