export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#080c14]">
      {/* Page Hero */}
      <section className="relative bg-gradient-to-b from-[#0d1220] to-[#080c14] py-24 overflow-hidden border-b border-[rgba(245,197,0,0.15)]">
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
          <h1 className="text-5xl md:text-6xl font-bold text-[#f0f4ff] mb-6">
            Datenschutz­erklärung
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-2xl p-8 lg:p-12">
            <div className="prose prose-invert max-w-none space-y-8">
              {/* Einleitung */}
              <div>
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-xl font-semibold text-[#f0f4ff] mb-3">Allgemeine Hinweise</h3>
                <div className="text-[#8896a8] space-y-4 leading-relaxed">
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                    personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                    Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
                    werden können.
                  </p>
                </div>
              </div>

              {/* Verantwortlicher */}
              <div className="pt-6 border-t border-[rgba(245,197,0,0.15)]">
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">2. Verantwortlicher</h2>
                <div className="text-[#8896a8] space-y-2">
                  <p className="text-[#f0f4ff] font-medium">Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                  <p className="text-[#f0f4ff]">Anderson Rodriguez</p>
                  <p>A.Rod Consulting</p>
                  <p>Perthesweg 22</p>
                  <p>20535 Hamburg</p>
                  <p className="pt-2">
                    E-Mail:{' '}
                    <a href="mailto:consulting.arod@gmail.com" className="text-[#f5c500] hover:underline">
                      consulting.arod@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Datenerfassung */}
              <div className="pt-6 border-t border-[rgba(245,197,0,0.15)]">
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">3. Datenerfassung auf dieser Website</h2>
                <h3 className="text-xl font-semibold text-[#f0f4ff] mb-3">Wie erfassen wir Ihre Daten?</h3>
                <div className="text-[#8896a8] space-y-4 leading-relaxed">
                  <p>
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
                    Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular
                    eingeben.
                  </p>
                  <p>
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der
                    Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten
                    (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-[#f0f4ff] mb-3 mt-6">Wofür nutzen wir Ihre Daten?</h3>
                <div className="text-[#8896a8] space-y-4 leading-relaxed">
                  <p>
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der
                    Website zu gewährleisten. Andere Daten können zur Analyse Ihres
                    Nutzerverhaltens verwendet werden.
                  </p>
                  <p>
                    Die über das Kontaktformular erhobenen Daten dienen ausschließlich der
                    Beratungsanfrage und werden vertraulich behandelt.
                  </p>
                </div>
              </div>

              {/* Cookies */}
              <div className="pt-6 border-t border-[rgba(245,197,0,0.15)]">
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">4. Cookies</h2>
                <div className="text-[#8896a8] space-y-4 leading-relaxed">
                  <p>
                    Diese Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien,
                    die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser
                    Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                  </p>
                  <p>
                    Einige Cookies sind "Session-Cookies." Solche Cookies werden nach Ende Ihrer
                    Browser-Sitzung von selbst gelöscht. Andere Cookies bleiben auf Ihrem Endgerät
                    gespeichert, bis Sie diese selbst löschen.
                  </p>
                  <p>
                    Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies
                    informiert werden und einzeln über deren Annahme entscheiden oder die Annahme
                    von Cookies für bestimmte Fälle oder generell ausschließen.
                  </p>
                </div>
              </div>

              {/* Analytics */}
              <div className="pt-6 border-t border-[rgba(245,197,0,0.15)]">
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">5. Analyse-Tools und Tools von Drittanbietern</h2>
                <div className="text-[#8896a8] space-y-4 leading-relaxed">
                  <p>
                    Derzeit setzen wir keine Analyse-Tools oder Tracking-Dienste von
                    Drittanbietern ein. Sollte sich dies ändern, werden wir diese
                    Datenschutzerklärung entsprechend aktualisieren und Sie informieren.
                  </p>
                  <p>
                    Es werden keine Cookies zu Analysezwecken gesetzt. Es findet kein
                    Tracking Ihres Surf-Verhaltens statt.
                  </p>
                </div>
              </div>

              {/* Kontaktformular */}
              <div className="pt-6 border-t border-[rgba(245,197,0,0.15)]">
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">6. Kontaktformular</h2>
                <div className="text-[#8896a8] space-y-4 leading-relaxed">
                  <p>
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                    aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
                    zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
                    gespeichert.
                  </p>
                  <p>
                    Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p>
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
                    DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder
                    zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
                    Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
                    effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
                    DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese
                    abgefragt wurde.
                  </p>
                </div>
              </div>

              {/* Rechte der Betroffenen */}
              <div className="pt-6 border-t border-[rgba(245,197,0,0.15)]">
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">7. Rechte der betroffenen Personen</h2>
                <div className="text-[#8896a8] space-y-4 leading-relaxed">
                  <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
                    <li>Berichtigung unrichtiger personenbezogener Daten</li>
                    <li>Löschung Ihrer bei uns gespeicherten Daten</li>
                    <li>Einschränkung der Datenverarbeitung</li>
                    <li>Datenübertragbarkeit</li>
                    <li>Widerspruch gegen die Verarbeitung Ihrer Daten</li>
                    <li>Beschwerde bei einer Aufsichtsbehörde</li>
                  </ul>
                  <p className="pt-4">
                    Wenn Sie von einem dieser Rechte Gebrauch machen möchten, wenden Sie sich bitte
                    an:{' '}
                    <a href="mailto:consulting.arod@gmail.com" className="text-[#f5c500] hover:underline">
                      consulting.arod@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Beschwerderecht */}
              <div className="pt-6 border-t border-[rgba(245,197,0,0.15)]">
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">8. Beschwerderecht bei der zuständigen Aufsichtsbehörde</h2>
                <div className="text-[#8896a8] space-y-4 leading-relaxed">
                  <p>
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht
                    bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
                    Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
                  </p>
                  <p>
                    Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher
                    oder gerichtlicher Rechtsbehelfe.
                  </p>
                </div>
              </div>

              {/* Datenspeicherung */}
              <div className="pt-6 border-t border-[rgba(245,197,0,0.15)]">
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">9. Speicherdauer</h2>
                <div className="text-[#8896a8] space-y-4 leading-relaxed">
                  <p>
                    Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer
                    genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck
                    für die Datenverarbeitung entfällt.
                  </p>
                  <p>
                    Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
                    zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine
                    anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen
                    Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen).
                  </p>
                </div>
              </div>

              {/* SSL/TLS */}
              <div className="pt-6 border-t border-[rgba(245,197,0,0.15)]">
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-4">10. SSL- bzw. TLS-Verschlüsselung</h2>
                <div className="text-[#8896a8] space-y-4 leading-relaxed">
                  <p>
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                    vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
                    Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://"
                    auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
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
