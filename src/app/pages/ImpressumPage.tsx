export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#080c14]">
      {/* Page Hero */}
      <section className="relative bg-gradient-to-b from-[#0d1220] to-[#080c14] py-24 overflow-hidden border-b border-[rgba(245,197,0,0.15)]">
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#f0f4ff] mb-6">
            Impressum
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-2xl p-8 lg:p-12">
            <div className="prose prose-invert max-w-none space-y-8">
              {/* Angaben gemäß § 5 TMG */}
              <div>
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="text-[#8896a8] space-y-2">
                  <p className="text-[#f0f4ff] font-medium text-lg">Anderson Rodriguez</p>
                  <p className="text-[#f0f4ff] font-medium">A.Rod Consulting</p>
                  <p>Perthesweg 22</p>
                  <p>20535 Hamburg</p>
                  <p>Deutschland</p>
                </div>
              </div>

              {/* Kontakt */}
              <div className="pt-6 border-t border-[rgba(245,197,0,0.15)]">
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">Kontakt</h2>
                <div className="text-[#8896a8] space-y-2">
                  <p>
                    E-Mail:{' '}
                    <a
                      href="mailto:consulting.arod@gmail.com"
                      className="text-[#f5c500] hover:underline"
                    >
                      consulting.arod@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Umsatzsteuer-ID */}
              <div className="pt-6 border-t border-[rgba(245,197,0,0.15)]">
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">
                  Umsatzsteuer-ID
                </h2>
                <div className="text-[#8896a8] space-y-2">
                  <p>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
                  </p>
                  <p className="text-[#f0f4ff]">[wird nachgereicht]</p>
                </div>
              </div>

              {/* Berufsbezeichnung */}
              <div className="pt-6 border-t border-[rgba(245,197,0,0.15)]">
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">
                  Berufsbezeichnung und berufsrechtliche Regelungen
                </h2>
                <div className="text-[#8896a8] space-y-2">
                  <p>Berufsbezeichnung: Unternehmensberater</p>
                  <p>Verliehen in: Deutschland</p>
                  <p>BAFA-autorisierter Berater</p>
                  <p>INQA-Coach (autorisiert durch BMAS)</p>
                </div>
              </div>

              {/* Verantwortlich für den Inhalt */}
              <div className="pt-6 border-t border-[rgba(245,197,0,0.15)]">
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <div className="text-[#8896a8] space-y-2">
                  <p className="text-[#f0f4ff]">Anderson Rodriguez</p>
                  <p>Perthesweg 22</p>
                  <p>20535 Hamburg</p>
                </div>
              </div>

              {/* EU-Streitschlichtung */}
              <div className="pt-6 border-t border-[rgba(245,197,0,0.15)]">
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">
                  EU-Streitschlichtung
                </h2>
                <div className="text-[#8896a8] space-y-2">
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung
                    (OS) bereit:
                  </p>
                  <p>
                    <a
                      href="https://ec.europa.eu/consumers/odr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f5c500] hover:underline"
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                  <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                </div>
              </div>

              {/* Verbraucherstreitbeilegung */}
              <div className="pt-6 border-t border-[rgba(245,197,0,0.15)]">
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">
                  Verbraucherstreitbeilegung / Universalschlichtungsstelle
                </h2>
                <div className="text-[#8896a8] space-y-2">
                  <p>
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
                    einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </div>

              {/* Haftungsausschluss */}
              <div className="pt-6 border-t border-[rgba(245,197,0,0.15)]">
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">
                  Haftung für Inhalte
                </h2>
                <div className="text-[#8896a8] space-y-4 leading-relaxed">
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
                    diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
                    TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                    gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                    forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p>
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
                    nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
                    Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                    Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                    Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>

              {/* Haftung für Links */}
              <div className="pt-6 border-t border-[rgba(245,197,0,0.15)]">
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">Haftung für Links</h2>
                <div className="text-[#8896a8] space-y-4 leading-relaxed">
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte
                    wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
                    keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
                    jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>
              </div>

              {/* Urheberrecht */}
              <div className="pt-6 border-t border-[rgba(245,197,0,0.15)]">
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">Urheberrecht</h2>
                <div className="text-[#8896a8] space-y-4 leading-relaxed">
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                    unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                    Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
                    Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                    bzw. Erstellers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center text-sm text-[#8896a8]">
            <p>Stand: April 2026</p>
          </div>
        </div>
      </section>
    </div>
  );
}
