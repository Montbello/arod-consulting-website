import { Link } from 'react-router-dom';
import { Award, Code, TrendingUp, Users, Heart, Lightbulb, ArrowRight } from 'lucide-react';

export default function UeberMichPage() {
  const milestones = [
    { year: '2014', title: 'Start IT-Karriere', desc: 'Einstieg in die IT-Branche' },
    { year: '2018', title: 'SAP-Zertifizierung', desc: 'mit Auszeichnung' },
    { year: '2022', title: 'Gründung A.Rod Consulting', desc: 'Beratung für KMU' },
    { year: '2025', title: 'INQA-Coach Autorisierung', desc: 'staatlich anerkannt' },
    { year: '2026', title: 'AI & Automation Expansion', desc: 'KI-Integration für Unternehmen' },
  ];

  const skills = [
    'SAP S/4HANA',
    'Python',
    'AI/ML',
    'Project Management',
    'BAFA/INQA',
    'Change Management',
    'Business Development',
    'Digitalisierung',
    'ERP-Systeme',
    'Prozessoptimierung',
    'Cloud Migration',
    'Agile Methoden',
  ];

  const languages = [
    { lang: 'Deutsch', level: 'Muttersprache' },
    { lang: 'Spanisch', level: 'Muttersprache' },
    { lang: 'Englisch', level: 'fließend' },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Menschlichkeit',
      description:
        'Technologie im Dienst des Menschen. Ich glaube an Lösungen, die Menschen befähigen und Unternehmen voranbringen.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description:
        'Neueste Technologien praktisch einsetzen. Von KI bis Cloud — ich bringe Innovation in die Praxis.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Integrität',
      description:
        'Ehrliche Beratung ohne Schnickschnack. Ich empfehle nur, was wirklich sinnvoll ist — und sage klar, was nicht passt.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#080c14]">
      {/* Page Hero */}
      <section className="relative bg-gradient-to-b from-[#0d1220] to-[#080c14] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#f5c500] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#cc1634] rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#f0f4ff] mb-6">
            Anderson <span className="text-[#f5c500]">Rodriguez</span>
          </h1>
          <p className="text-xl text-[#8896a8] max-w-3xl mx-auto">
            Wirtschaftsfachwirt & Fachinformatiker — SAP Consultant, AI Expert, INQA-Coach
          </p>
        </div>
      </section>

      {/* Main Profile Section */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Photo */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a3a8c] to-[#2451b3] flex items-center justify-center overflow-hidden">
                <div className="text-[200px] opacity-20">👤</div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#f5c500] rounded-2xl blur-[80px]"></div>
            </div>

            {/* Right: Bio */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a2235] border border-[rgba(245,197,0,0.3)] rounded-full mb-6">
                <Award className="w-4 h-4 text-[#f5c500]" />
                <span className="text-sm text-[#f5c500] font-medium">
                  BAFA & INQA autorisiert
                </span>
              </div>

              <h2 className="text-3xl font-bold text-[#f0f4ff] mb-4">
                Technologie im Dienst des Menschen
              </h2>

              <div className="space-y-4 text-[#8896a8] leading-relaxed mb-8">
                <p>
                  Als <span className="text-[#f0f4ff] font-medium">Wirtschaftsfachwirt (DQR 6)</span> und{' '}
                  <span className="text-[#f0f4ff] font-medium">Fachinformatiker Anwendungsentwicklung (IHK)</span> bringe
                  ich über 10 Jahre Erfahrung in IT-Beratung, Business Development und digitaler
                  Transformation mit.
                </p>

                <p>
                  Meine Karriere begann 2014 in der IT-Branche. 2018 erhielt ich meine{' '}
                  <span className="text-[#f5c500] font-medium">SAP-Zertifizierung mit Auszeichnung</span>.
                  Seit 2022 berate ich als selbständiger Consultant kleine und mittlere Unternehmen
                  bei Digitalisierung, Business Development und KI-Integration.
                </p>

                <p>
                  Mein Fokus liegt auf <span className="text-[#f0f4ff] font-medium">praktischen, umsetzbaren Lösungen</span>.
                  Keine Beratersprache, keine theoretischen Konzepte — ich arbeite mit Ihnen
                  gemeinsam an Ergebnissen, die messbar sind.
                </p>

                <p>
                  Als <span className="text-[#f5c500] font-medium">BAFA-autorisierter Berater</span> und{' '}
                  <span className="text-[#f5c500] font-medium">INQA-Coach</span> helfe ich Ihnen, bis zu 80% der
                  Beratungskosten über staatliche Förderprogramme zurückzuerhalten.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#f5c500] mb-1">10+</div>
                  <div className="text-sm text-[#8896a8]">Jahre IT-Erfahrung</div>
                </div>
                <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#f5c500] mb-1">3</div>
                  <div className="text-sm text-[#8896a8]">Sprachen</div>
                </div>
                <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#f5c500] mb-1">SAP</div>
                  <div className="text-sm text-[#8896a8]">mit Auszeichnung</div>
                </div>
                <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-[#f5c500] mb-1">HH</div>
                  <div className="text-sm text-[#8896a8]">Hamburg</div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-xl p-6">
                <h4 className="font-semibold text-[#f0f4ff] mb-4">Sprachen</h4>
                <div className="space-y-3">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-[#f0f4ff]">{lang.lang}</span>
                      <span className="text-sm text-[#f5c500]">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#0d1220] py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#f0f4ff] mb-4">
              Mein <span className="text-[#f5c500]">Werdegang</span>
            </h2>
            <p className="text-lg text-[#8896a8]">Von IT-Entwickler zum Unternehmensberater</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#f5c500] via-[#cc1634] to-[#2451b3] hidden lg:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-xl p-6 hover:bg-[#1f2a40] transition-all inline-block">
                      <div className="text-3xl font-bold text-[#f5c500] mb-2">
                        {milestone.year}
                      </div>
                      <div className="text-xl font-semibold text-[#f0f4ff] mb-1">
                        {milestone.title}
                      </div>
                      <div className="text-[#8896a8]">{milestone.desc}</div>
                    </div>
                  </div>

                  <div className="hidden lg:block w-4 h-4 rounded-full bg-[#f5c500] border-4 border-[#0d1220] z-10"></div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#f0f4ff] mb-4">
              Expertise & <span className="text-[#f5c500]">Skills</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-lg text-[#f0f4ff] hover:bg-[#1f2a40] hover:border-[#f5c500] transition-all"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0d1220] py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#f0f4ff] mb-4">
              Meine <span className="text-[#f5c500]">Werte</span>
            </h2>
            <p className="text-lg text-[#8896a8]">Was meine Arbeit ausmacht</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-2xl p-8 hover:bg-[#1f2a40] transition-all text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#f5c500] to-[#cc1634] text-[#080c14] mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#f0f4ff] mb-4">{value.title}</h3>
                <p className="text-[#8896a8] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#f5c500] via-[#ffd633] to-[#f5c500] py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-[#080c14] mb-4">
            Lassen Sie uns zusammenarbeiten
          </h2>
          <p className="text-lg text-[#0d1220] mb-8 max-w-2xl mx-auto">
            Gemeinsam entwickeln wir die richtige Strategie für Ihr Unternehmen — praktisch,
            umsetzbar, gefördert.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#080c14] text-[#f5c500] rounded-lg font-semibold text-lg hover:bg-[#0d1220] transition-all hover:scale-105"
          >
            Jetzt Kontakt aufnehmen
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
