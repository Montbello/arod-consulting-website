import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://aiulomgvdjllzexbgvpq.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Kontaktformular absenden
export async function submitKontakt(data: {
  name: string;
  email: string;
  company: string;
  thema: string;
  mitarbeiter: string;
  nachricht: string;
}) {
  const { error } = await supabase.from('kontakt_anfragen').insert({
    name: data.name,
    email: data.email,
    company: data.company,
    thema: data.thema,
    mitarbeiter: data.mitarbeiter,
    nachricht: data.nachricht,
    sprache: 'de',
    dsgvo_consent: true,
    created_at: new Date().toISOString(),
  });

  if (error) throw error;
  return { success: true };
}

// Intake/Beratungsprofil absenden
export async function submitIntake(data: {
  berufsstatus: string;
  branche: string;
  qualifikation: string;
  berufserfahrung: string;
  firmenname?: string;
  gruendungsjahr?: number;
  jahresumsatz?: string;
  mitarbeiter?: string;
  hauptziel: string;
  herausforderung: string;
  dringlichkeit: string;
  kontaktart: string;
  wunschtermin: string;
  email?: string;
}) {
  const { error } = await supabase.from('consulting_clients').insert({
    name: '',
    email: data.email || '',
    company: data.firmenname || '',
    berufsstatus: data.berufsstatus,
    branche: data.branche,
    qualifikation: data.qualifikation,
    berufserfahrung_jahre: data.berufserfahrung,
    gruendungsjahr: data.gruendungsjahr || 0,
    mitarbeiter: data.mitarbeiter || '',
    hauptziel: data.hauptziel,
    dringlichkeit: data.dringlichkeit,
    thema: data.herausforderung,
    workflow_phase: 'aufnahme',
    lead_score: calculateLeadScore(data),
    created_at: new Date().toISOString(),
  });

  if (error) throw error;
  return { success: true };
}

// Lead-Score berechnen
function calculateLeadScore(data: Record<string, unknown>): number {
  let score = 0;

  // Berufsstatus
  if (data.berufsstatus === 'selbstaendig') score += 30;
  else if (data.berufsstatus === 'gruender') score += 25;
  else if (data.berufsstatus === 'angestellt') score += 10;

  // Dringlichkeit
  if (data.dringlichkeit === 'sofort') score += 30;
  else if (data.dringlichkeit === '1-3_monate') score += 20;
  else if (data.dringlichkeit === '3-6_monate') score += 10;

  // Hauptziel
  if (data.hauptziel === 'digitalisierung') score += 20;
  else if (data.hauptziel === 'gruendung') score += 15;
  else if (data.hauptziel === 'foerderung') score += 25;

  // Mitarbeiter (groessere Firmen = hoeher)
  if (data.mitarbeiter === '50-249') score += 15;
  else if (data.mitarbeiter === '11-49') score += 10;

  return Math.min(score, 100);
}
