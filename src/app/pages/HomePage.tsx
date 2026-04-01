import { Link } from 'react-router-dom';
import { Rocket, Monitor, Cpu, Code, ArrowRight, CheckCircle2, Star, Award, MapPin, Users, Clock } from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Business Development 0-100',
      description: 'Geschäftsmodell, Strategie, MVP, Go-to-Market für Gründer und Startups',
      link: '/leistungen#business-dev'
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'KMU Digitalisierung',
      description: 'SAP-Einführung, ERP, Prozessautomatisierung, digitale Workflows',
      link: '/leistungen#digitalisierung'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI & Automation',
      description: 'KI-Integration, RPA, intelligente Prozessautomatisierung, Chatbots',
      link: '/leistungen#ai-automation'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'IT Consulting',
      description: 'SAP S/4HANA, BTP, Integration Suite, Cloud Migration',
      link: '/leistungen#it-consulting'
    },
  ];

  const trustBadges = [
    { label: 'BAFA autorisiert', icon: <Award className="w-5 h-5" /> },
    { label: 'INQA Coach', icon: <CheckCircle2 className="w-5 h-5" /> },
    { label: 'SAP zertifiziert', icon: <Award className="w-5 h-5" /> },
    { label: '10+ Jahre Erfahrung', icon: <Clock className="w-5 h-5" /> },
    { label: 'Hamburg', icon: <MapPin className="w-5 h-5" /> },
  ];

  const projects = [
    {
      title: 'Hammerpeace Festival',
      description: 'Multikulturelle Festivalserie Hamburg, Status: In Planung',
      tags: ['Event', 'Kultur', 'Musik'],
      status: 'In Planung',
      statusColor: 'bg-[#f59e0b]',
      image: '/images/project-hammerpeace.jpg'
    },
    {
      title: 'Sabor a mi Tierra',
      description: 'Latin American Catering & Food Concept',
      tags: ['Gastronomie', 'Franchise', 'Latin Food'],
      status: 'Aktiv',
      statusColor: 'bg-[#22c55e]',
      image: '/images/project-sabor.jpg'
    },
    {
      title: 'Alma Latina e.V.',
      description: 'Lateinamerikanischer Sportverein',
      tags: ['Sport', 'Kultur', 'Community'],
      status: 'Gegründet',
      statusColor: 'bg-[#2451b3]',
      image: '/images/project-alma-latina.jpg'
    },
  ];

  const testimonials = [
    {
      quote: 'Die BAFA-Förderung hat uns ermöglicht, unsere Digitalisierung voranzutreiben. Herr Rodriguez hat uns professionell durch den gesamten Prozess begleitet.',
      name: 'Maria Schmidt',
      company: 'TechStart GmbH',
    },
    {
      quote: 'Kompetente Beratung auf Augenhöhe. Die SAP-Integration war dank der strukturierten Vorgehensweise ein voller Erfolg.',
      name: 'Thomas Wagner',
      company: 'Handwerk Solutions',
    },
    {
      quote: 'Von der Geschäftsidee bis zum MVP – die Business Development Beratung war genau das, was wir für unseren Start gebraucht haben.',
      name: 'Laura Müller',
      company: 'Innovation Labs',
    },
  ];

  const aboutFacts = [
    '10+ Jahre IT',
    'SAP zertifiziert',
    '3 Sprachen',
    'Hamburg',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#080c14] via-[#0d1220] to-[#080c14]">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#f5c500] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#cc1634] rounded-full blur-[150px]"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a2235] border border-[rgba(245,197,0,0.3)] rounded-full mb-8">
            <Award className="w-4 h-4 text-[#f5c500]" />
            <span className="text-sm text-[#f5c500] font-medium">BAFA & INQA autorisiert</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#f0f4ff] mb-6">
            From 0 to 100 <span className="text-[#f5c500]">Real Quick</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#8896a8] max-w-3xl mx-auto mb-12 leading-relaxed">
            Business Development, IT Consulting & KI-Integration für KMU —{' '}
            <span className="text-[#f5c500]">bis zu 80% staatlich gefördert</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/kontakt"
              className="px-8 py-4 bg-[#f5c500] text-[#080c14] rounded-lg font-semibold text-lg hover:bg-[#ffd633] transition-all hover:shadow-[0_0_30px_rgba(245,197,0,0.4)] hover:scale-105"
            >
              Kostenloses Erstgespräch
            </Link>
            <Link
              to="/foerderung"
              className="px-8 py-4 bg-transparent border-2 border-[#f5c500] text-[#f5c500] rounded-lg font-semibold text-lg hover:bg-[#f5c500] hover:text-[#080c14] transition-all"
            >
              Förderung prüfen
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#0d1220] border-y border-[rgba(245,197,0,0.15)]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-[#8896a8]">
                <div className="text-[#f5c500]">{badge.icon}</div>
                <span className="text-sm font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-[#080c14] py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#f0f4ff] mb-4">Unsere Leistungen</h2>
            <p className="text-lg text-[#8896a8] max-w-2xl mx-auto">
              Maßgeschneiderte Beratung für jede Phase Ihres Unternehmens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group relative bg-[#1a2235] border-l-4 border-[#f5c500] rounded-xl p-8 hover:bg-[#1f2a40] transition-all hover:shadow-[0_0_30px_rgba(245,197,0,0.2)] hover:-translate-y-1"
              >
                <div className="text-[#f5c500] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#f0f4ff] mb-3">{service.title}</h3>
                <p className="text-[#8896a8] mb-4 leading-relaxed">{service.description}</p>
                <div className="flex items-center gap-2 text-[#f5c500] group-hover:gap-3 transition-all">
                  <span className="text-sm font-medium">Mehr erfahren</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Förderung Highlight */}
      <section className="bg-[#0d1220] py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="border-l-4 border-[#f5c500] pl-8">
              <h2 className="text-4xl font-bold text-[#f0f4ff] mb-6">
                Bis zu <span className="text-[#f5c500]">80%</span> Ihrer Beratungskosten zurück
              </h2>
              <p className="text-lg text-[#8896a8] mb-8 leading-relaxed">
                Mit BAFA-Beratungsförderung und INQA-Coaching können kleine und mittlere Unternehmen
                bis zu 80% der Beratungskosten vom Staat zurückerstattet bekommen. Ich unterstütze
                Sie bei der Antragstellung und der gesamten Abwicklung.
              </p>
              <Link
                to="/foerderung"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#f5c500] text-[#080c14] rounded-lg font-semibold hover:bg-[#ffd633] transition-all hover:shadow-[0_0_20px_rgba(245,197,0,0.3)]"
              >
                Förderfähigkeit prüfen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Right Side - Funding Cards */}
            <div className="space-y-6">
              {/* BAFA Card */}
              <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-xl p-6 hover:bg-[#1f2a40] transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#f0f4ff]">BAFA Beratungsförderung</h3>
                  <span className="px-3 py-1 bg-[#f5c500] text-[#080c14] rounded-lg text-xs font-medium">
                    bis 80%
                  </span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f5c500]" />
                    <span className="text-[#8896a8]">bis 3.200 EUR Zuschuss</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f5c500]" />
                    <span className="text-[#8896a8]">50-80% Förderquote</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f5c500]" />
                    <span className="text-[#8896a8]">für Bestandsunternehmen</span>
                  </div>
                </div>
              </div>

              {/* INQA Card */}
              <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-xl p-6 hover:bg-[#1f2a40] transition-all">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#f0f4ff]">INQA Coaching-Programm</h3>
                  <span className="px-3 py-1 bg-[#22c55e] text-[#080c14] rounded-lg text-xs font-medium">
                    80%
                  </span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f5c500]" />
                    <span className="text-[#8896a8]">12 Beratungstage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f5c500]" />
                    <span className="text-[#8896a8]">11.520 EUR Förderung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#f5c500]" />
                    <span className="text-[#8896a8]">für KMU ab 1 Mitarbeiter</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="bg-[#080c14] py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#f0f4ff] mb-4">Ihr Weg zur Förderung</h2>
            <p className="text-lg text-[#8896a8]">In 4 einfachen Schritten</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Erstgespräch', desc: 'kostenlos & unverbindlich' },
              { num: '2', title: 'Förderantrag', desc: 'gemeinsam vorbereiten' },
              { num: '3', title: '12 Tage Beratung', desc: 'professionelle Umsetzung' },
              { num: '4', title: 'Ergebnis', desc: 'Maßnahmenplan & Erfolg' },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f5c500] to-[#cc1634] flex items-center justify-center text-2xl font-bold text-[#080c14] mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold text-[#f0f4ff] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#8896a8]">{step.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#f5c500] to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-[#0d1220] py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#f0f4ff] mb-4">
              Aktuelle Projekte & Initiativen
            </h2>
            <p className="text-lg text-[#8896a8]">
              Einblicke in unsere Arbeit und soziale Projekte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-[#1a2235] rounded-xl overflow-hidden hover:bg-[#1f2a40] transition-all hover:shadow-[0_0_30px_rgba(245,197,0,0.2)] hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-[#1a3a8c] to-[#2451b3] flex items-center justify-center">
                  <div className="text-6xl opacity-20">📷</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 ${project.statusColor} text-[#080c14] rounded-lg text-xs font-medium`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#f0f4ff] mb-2">{project.title}</h3>
                  <p className="text-sm text-[#8896a8] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[#111827] text-[#8896a8] rounded-lg text-xs border border-[rgba(245,197,0,0.15)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/projekte"
              className="inline-flex items-center gap-2 text-[#f5c500] hover:text-[#ffd633] font-medium transition-colors"
            >
              Alle Projekte ansehen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-[#080c14] py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Photo */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a3a8c] to-[#2451b3] flex items-center justify-center overflow-hidden">
                <div className="text-9xl opacity-20">👤</div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#f5c500] rounded-2xl blur-[60px]"></div>
            </div>

            {/* Right: Info */}
            <div>
              <h2 className="text-4xl font-bold text-[#f0f4ff] mb-2">Anderson Rodriguez</h2>
              <p className="text-lg text-[#f5c500] mb-6">
                Wirtschaftsfachwirt & Fachinformatiker
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {aboutFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-lg text-center"
                  >
                    <span className="text-sm font-medium text-[#f5c500]">{fact}</span>
                  </div>
                ))}
              </div>

              <p className="text-[#8896a8] mb-8 leading-relaxed">
                SAP Berater mit Auszeichnung, Wirtschaftsfachwirt (DQR 6) und Fachinformatiker.
                Über 10 Jahre Erfahrung in IT-Beratung, Business Development und digitaler
                Transformation. Spezialisiert auf KMU-Digitalisierung mit BAFA/INQA-Förderung.
              </p>

              <Link
                to="/ueber-mich"
                className="inline-flex items-center gap-2 text-[#f5c500] hover:text-[#ffd633] font-medium transition-colors"
              >
                Mehr über mich
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#0d1220] py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#f0f4ff] mb-4">Was Kunden sagen</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-xl p-8 hover:bg-[#1f2a40] transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#f5c500] text-[#f5c500]" />
                  ))}
                </div>
                <p className="text-[#8896a8] italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-[#f0f4ff]">{testimonial.name}</p>
                  <p className="text-sm text-[#8896a8]">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#f5c500] via-[#ffd633] to-[#f5c500] py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-[#080c14] mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-lg text-[#0d1220] mb-8 max-w-2xl mx-auto">
            Kostenloses, unverbindliches Erstgespräch — ich prüfe Ihre Förderfähigkeit und zeige
            Möglichkeiten auf.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#080c14] text-[#f5c500] rounded-lg font-semibold text-lg hover:bg-[#0d1220] transition-all hover:scale-105"
          >
            Jetzt Termin buchen
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
