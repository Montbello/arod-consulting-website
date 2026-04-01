import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

export default function ProjektePage() {
  const [filter, setFilter] = useState('Alle');

  const filters = ['Alle', 'Aktiv', 'In Planung', 'Abgeschlossen'];

  const projects = [
    {
      title: 'Hammerpeace Festival',
      status: 'In Planung',
      statusColor: 'bg-[#f59e0b]',
      category: 'Event & Kultur',
      description:
        'Multikulturelle Festivalserie in Hamburg — Musik, Kunst und Völkerverständigung. Konzept für nachhaltige, inklusive Events.',
      tags: ['Festival', 'Hamburg', 'Kultur', 'Musik', 'Nachhaltigkeit'],
      challenge:
        'Aufbau eines nachhaltigen, multikulturellen Festival-Konzepts, das verschiedene Communities zusammenbringt.',
      approach:
        'Entwicklung einer Event-Strategie mit Fokus auf Inklusion, lokale Künstler und nachhaltige Veranstaltungsorganisation.',
      next: 'Kooperationspartner gesucht für Umsetzung 2026.',
      image: '/images/project-hammerpeace.jpg',
    },
    {
      title: 'Sabor a mi Tierra',
      status: 'Aktiv',
      statusColor: 'bg-[#22c55e]',
      category: 'Gastronomie & Franchise',
      description:
        'Authentische lateinamerikanische Küche — vom Food Truck zum skalierbaren Franchise-Konzept. Digitalisierte Betriebsprozesse.',
      tags: ['Food', 'Latin', 'Franchise', 'Gastronomie', 'Skalierung'],
      challenge:
        'Skalierung eines erfolgreichen Food-Konzepts mit Fokus auf authentische lateinamerikanische Küche.',
      approach:
        'Digitalisierung der Betriebsprozesse, Franchise-Konzept Entwicklung, Markenaufbau und Expansion-Strategie.',
      next: 'Rollout weiterer Standorte in Hamburg und Norddeutschland.',
      image: '/images/project-sabor.jpg',
    },
    {
      title: 'Alma Latina e.V.',
      status: 'Gegründet',
      statusColor: 'bg-[#2451b3]',
      category: 'Sport & Kultur',
      description:
        'Lateinamerikanischer Sportverein — Förderung von Sport, Kultur und Integration. Gegr. November 2025.',
      tags: ['Verein', 'Sport', 'Kultur', 'Integration', 'Community'],
      challenge:
        'Aufbau eines Sportvereins zur Förderung von Integration und kulturellem Austausch.',
      approach:
        'Vereinsgründung, Aufbau der organisatorischen Strukturen, Community-Building und Partnergewinnung.',
      next: 'Mitgliedergewinnung und Etablierung regelmäßiger Sportangebote.',
      image: '/images/project-alma-latina.jpg',
    },
  ];

  const filteredProjects =
    filter === 'Alle'
      ? projects
      : projects.filter((p) => p.status === filter);

  return (
    <div className="min-h-screen bg-[#080c14]">
      {/* Page Hero */}
      <section className="relative bg-gradient-to-b from-[#0d1220] to-[#080c14] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#f5c500] rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#f0f4ff] mb-6">
            Projekte & <span className="text-[#f5c500]">Initiativen</span>
          </h1>
          <p className="text-xl text-[#8896a8] max-w-3xl mx-auto">
            Einblicke in unsere Arbeit, soziale Projekte und Initiativen
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-[#0d1220] border-b border-[rgba(245,197,0,0.15)]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filterName) => (
              <button
                key={filterName}
                onClick={() => setFilter(filterName)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  filter === filterName
                    ? 'bg-[#f5c500] text-[#080c14]'
                    : 'bg-[#1a2235] text-[#8896a8] hover:bg-[#1f2a40] hover:text-[#f0f4ff]'
                }`}
              >
                {filterName}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="space-y-12">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-2xl overflow-hidden hover:bg-[#1f2a40] transition-all hover:shadow-[0_0_40px_rgba(245,197,0,0.2)]"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="h-80 lg:h-auto bg-gradient-to-br from-[#1a3a8c] to-[#2451b3] flex items-center justify-center">
                    <div className="text-9xl opacity-20">📷</div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`px-4 py-1.5 ${project.statusColor} text-[#080c14] rounded-lg text-sm font-medium`}
                      >
                        {project.status}
                      </span>
                      <span className="px-4 py-1.5 bg-[#111827] text-[#8896a8] rounded-lg text-sm border border-[rgba(245,197,0,0.15)]">
                        {project.category}
                      </span>
                    </div>

                    <h2 className="text-3xl font-bold text-[#f0f4ff] mb-4">{project.title}</h2>
                    <p className="text-[#8896a8] mb-6 leading-relaxed">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#111827] text-[#8896a8] rounded-lg text-sm border border-[rgba(245,197,0,0.15)]"
                        >
                          <Tag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Details */}
                    <div className="space-y-4">
                      <details className="group">
                        <summary className="cursor-pointer list-none flex items-center justify-between py-3 px-4 bg-[#111827] rounded-lg hover:bg-[#1a2235] transition-colors">
                          <span className="font-medium text-[#f0f4ff]">Herausforderung</span>
                          <span className="text-[#f5c500] group-open:rotate-180 transition-transform">
                            ▼
                          </span>
                        </summary>
                        <div className="mt-3 px-4 py-3 text-[#8896a8] leading-relaxed">
                          {project.challenge}
                        </div>
                      </details>

                      <details className="group">
                        <summary className="cursor-pointer list-none flex items-center justify-between py-3 px-4 bg-[#111827] rounded-lg hover:bg-[#1a2235] transition-colors">
                          <span className="font-medium text-[#f0f4ff]">Ansatz</span>
                          <span className="text-[#f5c500] group-open:rotate-180 transition-transform">
                            ▼
                          </span>
                        </summary>
                        <div className="mt-3 px-4 py-3 text-[#8896a8] leading-relaxed">
                          {project.approach}
                        </div>
                      </details>

                      <details className="group">
                        <summary className="cursor-pointer list-none flex items-center justify-between py-3 px-4 bg-[#111827] rounded-lg hover:bg-[#1a2235] transition-colors">
                          <span className="font-medium text-[#f0f4ff]">Nächste Schritte</span>
                          <span className="text-[#f5c500] group-open:rotate-180 transition-transform">
                            ▼
                          </span>
                        </summary>
                        <div className="mt-3 px-4 py-3 text-[#8896a8] leading-relaxed">
                          {project.next}
                        </div>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="mt-12 bg-[#1a2235] border-2 border-dashed border-[#f5c500] rounded-2xl p-12 text-center hover:bg-[#1f2a40] transition-all">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-[#f0f4ff] mb-4">
                Ihr Projekt könnte hier stehen
              </h3>
              <p className="text-lg text-[#8896a8] mb-8">
                Lassen Sie uns gemeinsam Ihr Projekt realisieren. Bis zu 80% staatlich gefördert.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#f5c500] text-[#080c14] rounded-lg font-semibold hover:bg-[#ffd633] transition-all hover:shadow-[0_0_20px_rgba(245,197,0,0.3)]"
              >
                Projekt besprechen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#f5c500] via-[#ffd633] to-[#f5c500] py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-[#080c14] mb-4">
            Gemeinsam Erfolge schaffen
          </h2>
          <p className="text-lg text-[#0d1220] mb-8 max-w-2xl mx-auto">
            Sie haben eine Idee oder ein Projekt? Lassen Sie uns darüber sprechen.
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
