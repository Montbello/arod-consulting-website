import { Link } from 'react-router-dom';
import { Rocket, Monitor, Cpu, Code, CheckCircle2, ArrowRight, Search, Compass, Target } from 'lucide-react';

export default function LeistungenPage() {
  const services = [
    {
      id: 'business-dev',
      icon: <Rocket className="w-12 h-12" />,
      title: 'Business Development 0-100',
      subtitle: 'Von der Idee zum funktionierenden Geschäftsmodell',
      description:
        'Sie haben eine Geschäftsidee oder möchten Ihr bestehendes Unternehmen skalieren? Ich begleite Sie von der ersten Idee bis zum marktreifen Produkt.',
      features: [
        'Geschäftsmodell-Entwicklung',
        'Marktanalyse & Wettbewerb',
        'Go-to-Market-Strategie',
        'MVP-Planung',
        'Pitch Deck & Investoren-Ansprache',
        'Fördermittel-Beratung',
      ],
      tags: ['Startups', 'Gründer', 'Skalierung'],
      ctaText: 'Gründerberatung anfragen',
      ctaLink: '/kontakt',
    },
    {
      id: 'digitalisierung',
      icon: <Monitor className="w-12 h-12" />,
      title: 'KMU Digitalisierung',
      subtitle: 'Prozesse digitalisieren, Effizienz steigern',
      description:
        'Digitalisierung ist kein Selbstzweck, sondern dient Ihrem Geschäftserfolg. Ich analysiere Ihre Prozesse und entwickle einen praxisnahen Digitalisierungsfahrplan.',
      features: [
        'SAP S/4HANA Einführung',
        'ERP-Systemauswahl',
        'Prozessanalyse & -optimierung',
        'Change Management',
        'Mitarbeiterschulung',
        'BAFA-gefördert',
      ],
      tags: ['KMU', 'Mittelstand', 'BAFA'],
      ctaText: 'Digitalisierungscheck starten',
      ctaLink: '/kontakt',
    },
    {
      id: 'ai-automation',
      icon: <Cpu className="w-12 h-12" />,
      title: 'AI & Automation',
      subtitle: 'Künstliche Intelligenz praktisch einsetzen',
      description:
        'KI ist keine Zukunftsmusik mehr. Ich zeige Ihnen, wie Sie KI und Automatisierung konkret in Ihrem Unternehmen einsetzen können – ohne IT-Studium.',
      features: [
        'KI-Strategie & Readiness Assessment',
        'Prozessautomatisierung (RPA)',
        'Chatbot & Kundenservice-Automation',
        'Datenanalyse & Business Intelligence',
        'Tool-Integration (Claude, GPT, Custom AI)',
      ],
      tags: ['KI', 'Automation', 'Innovation'],
      ctaText: 'AI-Potenzial prüfen',
      ctaLink: '/kontakt',
    },
    {
      id: 'it-consulting',
      icon: <Code className="w-12 h-12" />,
      title: 'IT Consulting',
      subtitle: 'Enterprise-Systeme professionell implementieren',
      description:
        'SAP-Implementierung, Cloud-Migration oder Systemintegration – ich bringe über 10 Jahre SAP- und IT-Erfahrung in Ihr Projekt ein.',
      features: [
        'SAP S/4HANA, BTP, Integration Suite',
        'Cloud Migration (Azure, AWS)',
        'IT-Architektur & Systemintegration',
        'IT-Projektmanagement',
        'Security & Compliance',
      ],
      tags: ['SAP', 'Enterprise', 'Cloud'],
      ctaText: 'IT-Projekt besprechen',
      ctaLink: '/kontakt',
    },
  ];

  const methodology = [
    {
      phase: '1',
      title: 'Analyse & Verständnis',
      icon: <Search className="w-8 h-8" />,
      description:
        'Tiefes Verständnis Ihrer Situation, Prozesse und Ziele. IST-Analyse, Stakeholder-Interviews, Digital Readiness Assessment.',
    },
    {
      phase: '2',
      title: 'Strategie & Maßnahmen',
      icon: <Compass className="w-8 h-8" />,
      description:
        'Maßgeschneiderte Lösungen entwickeln. SOLL-Prozesse, Roadmap, Ressourcenplanung, Förderantrag vorbereiten.',
    },
    {
      phase: '3',
      title: 'Umsetzung & Befähigung',
      icon: <Target className="w-8 h-8" />,
      description:
        'Gemeinsam implementieren. Workshops, Schulungen, Change Management, Ergebnissicherung.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#080c14]">
      {/* Page Hero */}
      <section className="relative bg-gradient-to-b from-[#0d1220] to-[#080c14] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#f5c500] rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#f0f4ff] mb-6">
            Unsere <span className="text-[#f5c500]">Leistungen</span>
          </h1>
          <p className="text-xl text-[#8896a8] max-w-3xl mx-auto">
            Maßgeschneiderte Beratung für jede Phase Ihres Unternehmens
          </p>
        </div>
      </section>

      {/* Service Detail Sections */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-24 ${index !== services.length - 1 ? 'border-b border-[rgba(245,197,0,0.15)]' : ''}`}
          >
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content Side */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="text-[#f5c500] mb-6">{service.icon}</div>
                <h2 className="text-4xl font-bold text-[#f0f4ff] mb-4">{service.title}</h2>
                <h3 className="text-xl text-[#8896a8] mb-6">{service.subtitle}</h3>
                <p className="text-[#8896a8] mb-8 leading-relaxed">{service.description}</p>

                {/* Features Checklist */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#f5c500] flex-shrink-0 mt-0.5" />
                      <span className="text-[#f0f4ff]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-2 bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-lg text-sm text-[#f5c500]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={service.ctaLink}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#f5c500] text-[#080c14] rounded-lg font-semibold hover:bg-[#ffd633] transition-all hover:shadow-[0_0_20px_rgba(245,197,0,0.3)]"
                >
                  {service.ctaText}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Illustration Side */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a3a8c] to-[#2451b3] flex items-center justify-center">
                  <div className="text-9xl opacity-20">{service.icon}</div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Methodology Section */}
      <section className="bg-[#0d1220] py-24 mt-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#f0f4ff] mb-4">
              Mein Beratungsansatz — <span className="text-[#f5c500]">3 Phasen</span>
            </h2>
            <p className="text-lg text-[#8896a8]">
              Strukturiert, transparent, ergebnisorientiert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodology.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-xl p-8 hover:bg-[#1f2a40] transition-all">
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-[#f5c500] to-[#cc1634] flex items-center justify-center text-xl font-bold text-[#080c14]">
                    {phase.phase}
                  </div>
                  <div className="text-[#f5c500] mb-4 mt-4">{phase.icon}</div>
                  <h3 className="text-xl font-semibold text-[#f0f4ff] mb-4">{phase.title}</h3>
                  <p className="text-[#8896a8] leading-relaxed">{phase.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                    <ArrowRight className="w-8 h-8 text-[#f5c500]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Hint Section */}
      <section className="bg-[#080c14] py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#f0f4ff] mb-4">
              Investition & <span className="text-[#f5c500]">Förderung</span>
            </h2>
            <p className="text-lg text-[#8896a8]">
              Professionelle Beratung muss nicht teuer sein
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-xl p-8 text-center">
              <div className="text-[#f5c500] font-bold text-2xl mb-2">BAFA</div>
              <div className="text-4xl font-bold text-[#f0f4ff] mb-2">ab 800 EUR</div>
              <div className="text-sm text-[#8896a8]">Eigenanteil bei max. Förderung</div>
            </div>

            <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-xl p-8 text-center border-[#f5c500]">
              <div className="text-[#f5c500] font-bold text-2xl mb-2">INQA</div>
              <div className="text-4xl font-bold text-[#f0f4ff] mb-2">2.880 EUR</div>
              <div className="text-sm text-[#8896a8]">Eigenanteil bei 12 Tagen</div>
            </div>

            <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-xl p-8 text-center">
              <div className="text-[#f5c500] font-bold text-2xl mb-2">Privat</div>
              <div className="text-4xl font-bold text-[#f0f4ff] mb-2">1.200 EUR</div>
              <div className="text-sm text-[#8896a8]">Tagessatz</div>
            </div>
          </div>

          <div className="bg-[#1a2235] border-l-4 border-[#f5c500] rounded-xl p-6 mb-8">
            <p className="text-[#8896a8]">
              <span className="text-[#f0f4ff] font-medium">Hinweis:</span> Die Förderquote hängt von
              Unternehmensgröße, Standort und gewähltem Programm ab. In einem kostenlosen
              Erstgespräch prüfe ich Ihre individuelle Förderfähigkeit.
            </p>
          </div>

          <div className="text-center">
            <Link
              to="/foerderung"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#f5c500] text-[#080c14] rounded-lg font-semibold hover:bg-[#ffd633] transition-all hover:shadow-[0_0_20px_rgba(245,197,0,0.3)]"
            >
              Individuelle Förderquote berechnen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#f5c500] via-[#ffd633] to-[#f5c500] py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-[#080c14] mb-4">
            Welche Leistung passt zu Ihnen?
          </h2>
          <p className="text-lg text-[#0d1220] mb-8 max-w-2xl mx-auto">
            Im kostenlosen Erstgespräch finden wir gemeinsam heraus, wie ich Sie am besten
            unterstützen kann.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#080c14] text-[#f5c500] rounded-lg font-semibold text-lg hover:bg-[#0d1220] transition-all hover:scale-105"
          >
            Jetzt Erstgespräch buchen
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
