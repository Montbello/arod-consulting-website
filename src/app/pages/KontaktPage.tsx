import { useState } from 'react';
import { Mail, MapPin, Globe, CheckCircle2, Shield, Clock, Send, Loader2 } from 'lucide-react';
import { submitKontakt } from '../lib/supabase';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    message: '',
    consent: false,
  });

  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const topics = [
    'BAFA Förderung',
    'INQA Coaching',
    'Business Development',
    'Digitalisierung',
    'AI & Automation',
    'IT Consulting',
    'Gründerberatung',
    'Sonstiges',
  ];

  const employeeRanges = ['', '1-10', '11-49', '50-249', '250+'];

  const trustBadges = [
    { icon: <CheckCircle2 className="w-5 h-5" />, label: 'Kostenloses Erstgespräch' },
    { icon: <Shield className="w-5 h-5" />, label: 'DSGVO konform' },
    { icon: <Clock className="w-5 h-5" />, label: 'Vertraulich' },
  ];

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitKontakt({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        thema: selectedTopics.join(', '),
        mitarbeiter: formData.employees,
        nachricht: formData.message,
      });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', employees: '', message: '', consent: false });
      setSelectedTopics([]);
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
            Bereit für Ihr <span className="text-[#f5c500]">Projekt</span>?
          </h1>
          <p className="text-xl text-[#8896a8] max-w-3xl mx-auto">
            Nehmen Sie Kontakt auf — ich melde mich innerhalb von 24 Stunden
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#f0f4ff] mb-2">
                    Name <span className="text-[#cc1634]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-lg text-[#f0f4ff] placeholder-[#8896a8] focus:outline-none focus:border-[#f5c500] focus:ring-2 focus:ring-[#f5c500]/20"
                    placeholder="Ihr Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#f0f4ff] mb-2">
                    E-Mail <span className="text-[#cc1634]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-lg text-[#f0f4ff] placeholder-[#8896a8] focus:outline-none focus:border-[#f5c500] focus:ring-2 focus:ring-[#f5c500]/20"
                    placeholder="ihre@email.de"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#f0f4ff] mb-2">
                    Unternehmen
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-lg text-[#f0f4ff] placeholder-[#8896a8] focus:outline-none focus:border-[#f5c500] focus:ring-2 focus:ring-[#f5c500]/20"
                    placeholder="Firmenname (optional)"
                  />
                </div>

                {/* Topic Tags */}
                <div>
                  <label className="block text-sm font-medium text-[#f0f4ff] mb-3">
                    Thema
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => toggleTopic(topic)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedTopics.includes(topic)
                            ? 'bg-[#f5c500] text-[#080c14] shadow-[0_0_15px_rgba(245,197,0,0.3)]'
                            : 'bg-[#1a2235] text-[#8896a8] border border-[rgba(245,197,0,0.15)] hover:bg-[#1f2a40] hover:text-[#f0f4ff]'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Employee Count */}
                <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-[#f0f4ff] mb-2">
                    Mitarbeiterzahl
                  </label>
                  <select
                    id="employees"
                    value={formData.employees}
                    onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-lg text-[#f0f4ff] focus:outline-none focus:border-[#f5c500] focus:ring-2 focus:ring-[#f5c500]/20"
                  >
                    <option value="">Bitte wählen</option>
                    {employeeRanges.slice(1).map((range) => (
                      <option key={range} value={range}>
                        {range} Mitarbeiter
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#f0f4ff] mb-2">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-lg text-[#f0f4ff] placeholder-[#8896a8] focus:outline-none focus:border-[#f5c500] focus:ring-2 focus:ring-[#f5c500]/20 resize-none"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                  />
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
                    <><Send className="w-5 h-5" /> Nachricht senden</>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 rounded-lg bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] text-center">
                    <CheckCircle2 className="w-5 h-5 inline mr-2" />
                    Vielen Dank! Ihre Nachricht wurde gesendet. Ich melde mich innerhalb von 24 Stunden.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 p-4 rounded-lg bg-[#ef4444]/10 border border-[#ef4444]/30 text-[#ef4444] text-center">
                    Es gab einen Fehler. Bitte versuchen Sie es erneut oder schreiben Sie an consulting.arod@gmail.com
                  </div>
                )}
              </form>
            </div>

            {/* Right: Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-[#f0f4ff] mb-6">Kontaktinformationen</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#111827] flex items-center justify-center text-[#f5c500] flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-[#8896a8] mb-1">E-Mail</div>
                      <a
                        href="mailto:consulting.arod@gmail.com"
                        className="text-[#f0f4ff] hover:text-[#f5c500] transition-colors"
                      >
                        consulting.arod@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#111827] flex items-center justify-center text-[#f5c500] flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-[#8896a8] mb-1">Standort</div>
                      <div className="text-[#f0f4ff]">Hamburg, Deutschland</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#111827] flex items-center justify-center text-[#f5c500] flex-shrink-0">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-[#8896a8] mb-1">Sprachen</div>
                      <div className="text-[#f0f4ff]">Deutsch, English, Español</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Promise */}
              <div className="bg-gradient-to-r from-[#f5c500] to-[#ffd633] rounded-2xl p-8">
                <h4 className="text-xl font-bold text-[#080c14] mb-3">
                  Antwort innerhalb von 24 Stunden
                </h4>
                <p className="text-[#0d1220]">
                  Ich melde mich schnellstmöglich bei Ihnen zurück und vereinbare mit Ihnen einen
                  Termin für ein kostenloses Erstgespräch.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="space-y-3">
                {trustBadges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-xl p-4"
                  >
                    <div className="text-[#f5c500]">{badge.icon}</div>
                    <span className="text-[#f0f4ff] font-medium">{badge.label}</span>
                  </div>
                ))}
              </div>

              {/* Calendar Embed Placeholder */}
              <div className="bg-[#1a2235] border border-[rgba(245,197,0,0.15)] rounded-2xl p-8">
                <h4 className="text-xl font-bold text-[#f0f4ff] mb-4">
                  Oder direkt Termin buchen:
                </h4>
                <div className="aspect-video bg-gradient-to-br from-[#1a3a8c] to-[#2451b3] rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4 opacity-30">📅</div>
                    <p className="text-[#8896a8] text-sm">
                      Calendly / Cal.com Widget Embed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-[#f5c500] via-[#ffd633] to-[#f5c500] py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-[#080c14] mb-4">
            Nächster Schritt: Detailliertes Beratungsprofil
          </h2>
          <p className="text-lg text-[#0d1220] mb-8 max-w-2xl mx-auto">
            Nach dem ersten Kontakt können Sie ein detailliertes Profil ausfüllen, damit ich Sie
            optimal beraten kann.
          </p>
          <a
            href="/intake"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#080c14] text-[#f5c500] rounded-lg font-semibold text-lg hover:bg-[#0d1220] transition-all hover:scale-105"
          >
            Zum Beratungsprofil
            <Send className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
