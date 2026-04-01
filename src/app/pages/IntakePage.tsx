import { useState } from 'react';
import { CheckCircle2, Send, Loader2 } from 'lucide-react';
import { submitIntake } from '../lib/supabase';

export default function IntakePage() {
  const [formData, setFormData] = useState({
    status: '',
    industry: '',
    qualification: '',
    experience: '',
    companyName: '',
    foundingYear: '',
    revenue: '',
    employees: '',
    goal: '',
    challenge: '',
    urgency: '',
    contactMethod: '',
    preferredDate: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitIntake({
        berufsstatus: formData.status,
        branche: formData.industry,
        qualifikation: formData.qualification,
        berufserfahrung: formData.experience,
        firmenname: formData.companyName,
        gruendungsjahr: formData.foundingYear ? parseInt(formData.foundingYear) : undefined,
        jahresumsatz: formData.revenue,
        mitarbeiter: formData.employees,
        hauptziel: formData.goal,
        herausforderung: formData.challenge,
        dringlichkeit: formData.urgency,
        kontaktart: formData.contactMethod,
        wunschtermin: formData.preferredDate,
      });
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14]">
      {/* Page Hero */}
      <section className="relative bg-gradient-to-b from-[#0d1220] to-[#080c14] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#f5c500] rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#f0f4ff] mb-6">
            Schritt 2 von 2 — Ihr <span className="text-[#f5c500]">Beratungsprofil</span>
          </h1>
          <p className="text-xl text-[#8896a8] max-w-3xl mx-auto">
            Mit diesen Angaben kann ich Ihnen sofort die passenden Förderprogramme empfehlen.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="bg-[#0d1220] border-b border-[rgba(245,197,0,0.15)]">
        <div className="max-w-[640px] mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[#8896a8]">Fortschritt</span>
            <span className="text-sm font-medium text-[#f5c500]">Schritt 2 von 2</span>
          </div>
          <div className="h-2 bg-[#1a2235] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#f5c500] to-[#ffd633] w-full"></div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24">
        <div className="max-w-[640px] mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Section: Über Sie */}
            <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#f0f4ff] mb-6">Über Sie</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#f0f4ff] mb-2">
                    Berufsstatus
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-4 py-3 bg-[#111827] border border-[rgba(245,197,0,0.15)] rounded-lg text-[#f0f4ff] focus:outline-none focus:border-[#f5c500] focus:ring-2 focus:ring-[#f5c500]/20"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="employed">Angestellt</option>
                    <option value="self-employed">Selbständig</option>
                    <option value="founder">Gründer</option>
                    <option value="alg1">ALG1</option>
                    <option value="alg2">ALG2</option>
                    <option value="student">Student</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#f0f4ff] mb-2">
                    Branche
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-3 bg-[#111827] border border-[rgba(245,197,0,0.15)] rounded-lg text-[#f0f4ff] focus:outline-none focus:border-[#f5c500] focus:ring-2 focus:ring-[#f5c500]/20"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="it">IT</option>
                    <option value="trade">Handel</option>
                    <option value="gastro">Gastronomie</option>
                    <option value="craft">Handwerk</option>
                    <option value="services">Dienstleistung</option>
                    <option value="health">Gesundheit</option>
                    <option value="creative">Kreativ</option>
                    <option value="other">Andere</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#f0f4ff] mb-2">
                    Qualifikation
                  </label>
                  <select
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    className="w-full px-4 py-3 bg-[#111827] border border-[rgba(245,197,0,0.15)] rounded-lg text-[#f0f4ff] focus:outline-none focus:border-[#f5c500] focus:ring-2 focus:ring-[#f5c500]/20"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="none">Keine</option>
                    <option value="apprenticeship">Ausbildung</option>
                    <option value="bachelor">Bachelor</option>
                    <option value="master">Master</option>
                    <option value="doctorate">Promotion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#f0f4ff] mb-2">
                    Berufserfahrung
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 bg-[#111827] border border-[rgba(245,197,0,0.15)] rounded-lg text-[#f0f4ff] focus:outline-none focus:border-[#f5c500] focus:ring-2 focus:ring-[#f5c500]/20"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="0-2">0-2 Jahre</option>
                    <option value="3-5">3-5 Jahre</option>
                    <option value="6-10">6-10 Jahre</option>
                    <option value="10+">10+ Jahre</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section: Ihr Unternehmen */}
            {(formData.status === 'self-employed' || formData.status === 'founder') && (
              <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#f0f4ff] mb-6">Ihr Unternehmen</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#f0f4ff] mb-2">
                      Firmenname
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 bg-[#111827] border border-[rgba(245,197,0,0.15)] rounded-lg text-[#f0f4ff] placeholder-[#8896a8] focus:outline-none focus:border-[#f5c500] focus:ring-2 focus:ring-[#f5c500]/20"
                      placeholder="Name Ihres Unternehmens"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#f0f4ff] mb-2">
                      Gründungsjahr
                    </label>
                    <input
                      type="number"
                      min="1900"
                      max="2026"
                      value={formData.foundingYear}
                      onChange={(e) => setFormData({ ...formData, foundingYear: e.target.value })}
                      className="w-full px-4 py-3 bg-[#111827] border border-[rgba(245,197,0,0.15)] rounded-lg text-[#f0f4ff] placeholder-[#8896a8] focus:outline-none focus:border-[#f5c500] focus:ring-2 focus:ring-[#f5c500]/20"
                      placeholder="z.B. 2020"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#f0f4ff] mb-2">
                      Jahresumsatz
                    </label>
                    <select
                      value={formData.revenue}
                      onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                      className="w-full px-4 py-3 bg-[#111827] border border-[rgba(245,197,0,0.15)] rounded-lg text-[#f0f4ff] focus:outline-none focus:border-[#f5c500] focus:ring-2 focus:ring-[#f5c500]/20"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="under-100k">unter 100k</option>
                      <option value="100-500k">100-500k</option>
                      <option value="500k-2m">500k-2M</option>
                      <option value="2m-10m">2-10M</option>
                      <option value="10m+">10M+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#f0f4ff] mb-2">
                      Mitarbeiteranzahl
                    </label>
                    <select
                      value={formData.employees}
                      onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                      className="w-full px-4 py-3 bg-[#111827] border border-[rgba(245,197,0,0.15)] rounded-lg text-[#f0f4ff] focus:outline-none focus:border-[#f5c500] focus:ring-2 focus:ring-[#f5c500]/20"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="1-10">1-10</option>
                      <option value="11-49">11-49</option>
                      <option value="50-249">50-249</option>
                      <option value="250+">250+</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Section: Ihr Ziel */}
            <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#f0f4ff] mb-6">Ihr Ziel</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#f0f4ff] mb-2">
                    Hauptziel
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-4 py-3 bg-[#111827] border border-[rgba(245,197,0,0.15)] rounded-lg text-[#f0f4ff] focus:outline-none focus:border-[#f5c500] focus:ring-2 focus:ring-[#f5c500]/20"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="digitalization">Digitalisierung</option>
                    <option value="founding">Gründung</option>
                    <option value="growth">Wachstum</option>
                    <option value="restructuring">Restrukturierung</option>
                    <option value="funding">Förderung</option>
                    <option value="innovation">Innovation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#f0f4ff] mb-2">
                    Größte Herausforderung
                  </label>
                  <textarea
                    rows={3}
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    className="w-full px-4 py-3 bg-[#111827] border border-[rgba(245,197,0,0.15)] rounded-lg text-[#f0f4ff] placeholder-[#8896a8] focus:outline-none focus:border-[#f5c500] focus:ring-2 focus:ring-[#f5c500]/20 resize-none"
                    placeholder="Beschreiben Sie kurz Ihre größte Herausforderung..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#f0f4ff] mb-2">
                    Dringlichkeit
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full px-4 py-3 bg-[#111827] border border-[rgba(245,197,0,0.15)] rounded-lg text-[#f0f4ff] focus:outline-none focus:border-[#f5c500] focus:ring-2 focus:ring-[#f5c500]/20"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="immediate">Sofort</option>
                    <option value="1-3months">1-3 Monate</option>
                    <option value="3-6months">3-6 Monate</option>
                    <option value="informational">Nur informieren</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section: Kontakt */}
            <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#f0f4ff] mb-6">Kontakt</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#f0f4ff] mb-3">
                    Bevorzugte Kontaktart
                  </label>
                  <div className="space-y-3">
                    {['Telefon', 'Video-Call', 'E-Mail'].map((method) => (
                      <label key={method} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          checked={formData.contactMethod === method}
                          onChange={(e) =>
                            setFormData({ ...formData, contactMethod: e.target.value })
                          }
                          className="w-5 h-5 text-[#f5c500] bg-[#111827] border-[rgba(245,197,0,0.15)] focus:ring-2 focus:ring-[#f5c500]/20"
                        />
                        <span className="text-[#f0f4ff]">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#f0f4ff] mb-2">
                    Wunschtermin
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 bg-[#111827] border border-[rgba(245,197,0,0.15)] rounded-lg text-[#f0f4ff] focus:outline-none focus:border-[#f5c500] focus:ring-2 focus:ring-[#f5c500]/20"
                  />
                </div>
              </div>
            </div>

            {/* DSGVO Consent */}
            <div className="flex items-start gap-3">
              <input
                id="consent"
                type="checkbox"
                required
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="w-5 h-5 mt-0.5 bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded text-[#f5c500] focus:ring-2 focus:ring-[#f5c500]/20"
              />
              <label htmlFor="consent" className="text-sm text-[#8896a8]">
                Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                <a href="/datenschutz" className="text-[#f5c500] hover:underline">
                  Datenschutzerklärung
                </a>{' '}
                zu. <span className="text-[#cc1634]">*</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#f5c500] text-[#080c14] rounded-lg font-semibold text-lg hover:bg-[#ffd633] transition-all hover:shadow-[0_0_25px_rgba(245,197,0,0.4)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Wird gesendet...</>
              ) : (
                <><CheckCircle2 className="w-5 h-5" /> Profil erstellen & Empfehlung erhalten</>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 rounded-lg bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] text-center">
                <CheckCircle2 className="w-5 h-5 inline mr-2" />
                Ihr Beratungsprofil wurde erstellt. Ich melde mich innerhalb von 24 Stunden mit einer individuellen Empfehlung.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 rounded-lg bg-[#ef4444]/10 border border-[#ef4444]/30 text-[#ef4444] text-center">
                Es gab einen Fehler. Bitte versuchen Sie es erneut oder schreiben Sie an consulting.arod@gmail.com
              </div>
            )}

            {/* Note */}
            <div className="bg-[#1a2235] border-l-4 border-[#f5c500] rounded-lg p-6">
              <p className="text-[#8896a8] text-sm">
                <span className="text-[#f0f4ff] font-medium">Vertraulichkeit:</span> Ihre Daten
                werden vertraulich behandelt und ausschließlich für die Beratung verwendet. Sie
                erhalten von mir eine individuelle Einschätzung Ihrer Förderfähigkeit und
                maßgeschneiderte Empfehlungen.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
