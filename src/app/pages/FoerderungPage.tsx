import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, Award, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';

export default function FoerderungPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const stats = [
    { label: 'bis 80% Förderquote', value: '80%' },
    { label: '3.200 EUR max BAFA', value: '3.200 €' },
    { label: '11.520 EUR max INQA', value: '11.520 €' },
    { label: 'KMU bis 249 MA', value: '249' },
  ];

  const eligibility = [
    { check: true, text: 'Sitz in Deutschland' },
    { check: true, text: 'KMU (unter 250 Mitarbeiter)' },
    { check: true, text: 'Mindestens 1-2 Jahre am Markt' },
    { check: true, text: 'Gewerblich tätig' },
    { check: false, text: 'Nicht in Schwierigkeiten (EU-Definition)' },
  ];

  const comparisonRows = [
    { label: 'Förderquote', bafa: '50-80%', inqa: '80%' },
    { label: 'Max. Zuschuss', bafa: '3.200 EUR', inqa: '11.520 EUR' },
    { label: 'Beratungstage', bafa: 'flexibel', inqa: '12 Tage' },
    { label: 'Eigenanteil', bafa: 'ab 800 EUR', inqa: '2.880 EUR' },
    { label: 'Voraussetzungen', bafa: 'min. 1 Jahr', inqa: 'min. 2 Jahre' },
    { label: 'Schwerpunkt', bafa: 'Unternehmensberatung', inqa: 'Prozessberatung' },
    { label: 'Antragsstelle', bafa: 'BAFA', inqa: 'DGUV' },
    { label: 'Dauer', bafa: '4-8 Wochen', inqa: '6-12 Monate' },
  ];

  const faqs = [
    {
      question: 'Wer kann BAFA-Förderung beantragen?',
      answer:
        'Kleine und mittlere Unternehmen (KMU) mit Sitz in Deutschland, die seit mindestens einem Jahr am Markt sind. Die Förderquote beträgt 50% im Westen und bis zu 80% für Gründer oder Unternehmen in strukturschwachen Regionen.',
    },
    {
      question: 'Was ist der Unterschied zwischen BAFA und INQA?',
      answer:
        'BAFA ist flexibler und fördert bis zu 3.200 EUR mit 50-80% Quote. INQA ist ein Coaching-Programm mit 12 Tagen und 80% Förderung (11.520 EUR). BAFA eignet sich für kurzfristige Projekte, INQA für längere Prozessberatung.',
    },
    {
      question: 'Wie lange dauert die Bewilligung?',
      answer:
        'BAFA: ca. 4-8 Wochen nach Antragstellung. INQA: ca. 6-8 Wochen nach Beantragung des INQA-Schecks bei der DGUV. In beiden Fällen unterstütze ich Sie bei der Vorbereitung und Antragstellung.',
    },
    {
      question: 'Kann ich beide Programme nutzen?',
      answer:
        'Nein, für dasselbe Beratungsprojekt können Sie nur ein Förderprogramm nutzen. Allerdings können Sie nacheinander verschiedene Programme für unterschiedliche Beratungsthemen in Anspruch nehmen.',
    },
    {
      question: 'Was passiert nach der Beratung?',
      answer:
        'Sie erhalten einen detaillierten Ergebnisbericht mit konkreten Maßnahmen. Diesen reichen Sie bei der Förderstelle ein, um den Zuschuss zu erhalten. Ich unterstütze Sie auch bei der Nachbereitung und Umsetzung.',
    },
    {
      question: 'Welche Kosten kommen auf mich zu?',
      answer:
        'Bei BAFA: Eigenanteil ab 800 EUR (bei maximaler Förderung von 3.200 EUR). Bei INQA: Eigenanteil 2.880 EUR (bei 12 Tagen à 1.200 EUR). Im Erstgespräch berechne ich Ihre individuelle Förderquote.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#080c14]">
      {/* Page Hero */}
      <section className="relative bg-gradient-to-b from-[#0d1220] to-[#080c14] py-24 overflow-hidden border-b border-[rgba(245,197,0,0.15)]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#f5c500] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#22c55e] rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a2235] border border-[rgba(245,197,0,0.3)] rounded-full mb-8">
            <Award className="w-4 h-4 text-[#f5c500]" />
            <span className="text-sm text-[#f5c500] font-medium">Staatlich gefördert</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#f0f4ff] mb-6">
            Staatliche <span className="text-[#f5c500]">Förderung</span> für Ihr Unternehmen
          </h1>
          <p className="text-xl text-[#8896a8] max-w-3xl mx-auto">
            Bis zu 80% Ihrer Beratungskosten zurückerstattet — BAFA & INQA machen professionelle
            Beratung bezahlbar
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#0d1220] border-b border-[rgba(245,197,0,0.15)]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#f5c500] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#8896a8]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* BAFA Card */}
            <div id="bafa" className="bg-[#1a2235] border-2 border-[#f5c500] rounded-2xl p-8 hover:bg-[#1f2a40] transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-[#f0f4ff] mb-2">BAFA Beratungsförderung</h2>
                  <p className="text-[#8896a8]">Unternehmensberatung für KMU</p>
                </div>
                <div className="px-4 py-2 bg-[#f5c500] text-[#080c14] rounded-lg font-bold">
                  50-80%
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-[#8896a8] mb-1">Förderquote</div>
                    <div className="text-xl font-semibold text-[#f0f4ff]">50% (West) / 80% (Ost)</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#8896a8] mb-1">Max. Zuschuss</div>
                    <div className="text-xl font-semibold text-[#f0f4ff]">3.200 EUR</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#8896a8] mb-1">Beratungstage</div>
                    <div className="text-xl font-semibold text-[#f0f4ff]">flexibel</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#8896a8] mb-1">Berechtigung</div>
                    <div className="text-xl font-semibold text-[#f0f4ff]">min. 1 Jahr</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(245,197,0,0.15)]">
                  <div className="text-sm text-[#8896a8] mb-1">Antragsteller</div>
                  <div className="text-[#f0f4ff]">
                    Unternehmen (vorab bei BAFA registrieren)
                  </div>
                </div>
              </div>

              <div className="bg-[#111827] rounded-xl p-6 mb-8">
                <h4 className="font-semibold text-[#f0f4ff] mb-4">Ablauf in 4 Schritten:</h4>
                <ol className="space-y-3">
                  {['BAFA-Registrierung', 'Berater wählen', 'Beratung durchführen', 'Zuschuss erhalten'].map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#f5c500] text-[#080c14] flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-[#8896a8] pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <Link
                to="/kontakt"
                className="block w-full py-4 bg-[#f5c500] text-[#080c14] rounded-lg font-semibold text-center hover:bg-[#ffd633] transition-all"
              >
                BAFA-Berechtigung prüfen
              </Link>
            </div>

            {/* INQA Card */}
            <div id="inqa" className="bg-[#1a2235] border-2 border-[#22c55e] rounded-2xl p-8 hover:bg-[#1f2a40] transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-[#f0f4ff] mb-2">INQA-Coaching</h2>
                  <p className="text-[#8896a8]">Prozessberatung vom BMAS</p>
                </div>
                <div className="px-4 py-2 bg-[#22c55e] text-[#080c14] rounded-lg font-bold">
                  80%
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-[#8896a8] mb-1">Förderquote</div>
                    <div className="text-xl font-semibold text-[#f0f4ff]">80%</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#8896a8] mb-1">Gesamtkosten</div>
                    <div className="text-xl font-semibold text-[#f0f4ff]">14.400 EUR</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#8896a8] mb-1">Eigenanteil</div>
                    <div className="text-xl font-semibold text-[#f0f4ff]">2.880 EUR</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#8896a8] mb-1">Förderung</div>
                    <div className="text-xl font-semibold text-[#f0f4ff]">11.520 EUR</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgba(245,197,0,0.15)]">
                  <div className="text-sm text-[#8896a8] mb-1">Berechtigung</div>
                  <div className="text-[#f0f4ff]">
                    KMU 1-249 MA, min. 2 Jahre am Markt
                  </div>
                </div>
              </div>

              <div className="bg-[#111827] rounded-xl p-6 mb-8">
                <h4 className="font-semibold text-[#f0f4ff] mb-4">Ablauf in 4 Schritten:</h4>
                <ol className="space-y-3">
                  {['Erstgespräch führen', 'INQA-Scheck beantragen', '12 Tage Coaching', 'Ergebnisbericht'].map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#22c55e] text-[#080c14] flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-[#8896a8] pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <Link
                to="/kontakt"
                className="block w-full py-4 bg-[#22c55e] text-[#080c14] rounded-lg font-semibold text-center hover:bg-[#2dd46a] transition-all"
              >
                INQA-Coaching starten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Checker */}
      <section id="rechner" className="bg-[#0d1220] py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#f0f4ff] mb-4">
                Sind Sie <span className="text-[#f5c500]">förderberechtigt</span>?
              </h2>
              <p className="text-lg text-[#8896a8]">
                Prüfen Sie die grundlegenden Voraussetzungen
              </p>
            </div>

            <div className="bg-[#1a2235] rounded-2xl p-8 border border-[rgba(245,197,0,0.15)]">
              <div className="space-y-4 mb-8">
                {eligibility.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-[#111827] rounded-lg"
                  >
                    {item.check ? (
                      <CheckCircle2 className="w-6 h-6 text-[#22c55e] flex-shrink-0" />
                    ) : (
                      <XCircle className="w-6 h-6 text-[#ef4444] flex-shrink-0" />
                    )}
                    <span className="text-[#f0f4ff] pt-0.5">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#111827] border-l-4 border-[#f5c500] rounded-lg p-6 mb-6">
                <p className="text-[#8896a8]">
                  Die endgültige Förderfähigkeit hängt von weiteren Faktoren ab. Im kostenlosen
                  Erstgespräch prüfe ich Ihre individuelle Situation und berechne Ihre exakte
                  Förderquote.
                </p>
              </div>

              <Link
                to="/kontakt"
                className="block w-full py-4 bg-[#f5c500] text-[#080c14] rounded-lg font-semibold text-center hover:bg-[#ffd633] transition-all"
              >
                Jetzt Förderfähigkeit kostenfrei prüfen lassen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#f0f4ff] mb-4">
              BAFA vs. INQA im <span className="text-[#f5c500]">Vergleich</span>
            </h2>
            <p className="text-lg text-[#8896a8]">Welches Programm passt zu Ihnen?</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-[#1a2235] rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-[#111827]">
                  <th className="px-6 py-4 text-left text-[#f0f4ff] font-semibold"></th>
                  <th className="px-6 py-4 text-center text-[#f5c500] font-semibold text-lg">
                    BAFA
                  </th>
                  <th className="px-6 py-4 text-center text-[#22c55e] font-semibold text-lg">
                    INQA
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-[#1a2235]' : 'bg-[#1f2a40]'}
                  >
                    <td className="px-6 py-4 text-[#f0f4ff] font-medium">{row.label}</td>
                    <td className="px-6 py-4 text-center text-[#8896a8]">{row.bafa}</td>
                    <td className="px-6 py-4 text-center text-[#8896a8]">{row.inqa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-[#0d1220] py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#f0f4ff] mb-4">
              Häufig gestellte <span className="text-[#f5c500]">Fragen</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#1f2a40] transition-colors"
                >
                  <span className="font-semibold text-[#f0f4ff] pr-4">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#f5c500] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#f5c500] flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-5 text-[#8896a8] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#f5c500] via-[#ffd633] to-[#f5c500] py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-[#080c14] mb-4">
            Kostenlose Erstberatung — Förderprogramm finden
          </h2>
          <p className="text-lg text-[#0d1220] mb-8 max-w-2xl mx-auto">
            Ich analysiere Ihre Situation und empfehle das passende Förderprogramm. Unverbindlich
            und kostenfrei.
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
