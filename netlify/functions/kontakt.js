const { createClient } = require('@supabase/supabase-js');
const crypto = require('crypto');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const params = new URLSearchParams(event.body);
  const name        = (params.get('name') || '').trim();
  const email       = (params.get('email') || '').trim();
  const company     = (params.get('company') || '').trim();
  const thema       = (params.get('thema') || '').trim();
  const mitarbeiter = (params.get('mitarbeiter') || '').trim();
  const nachricht   = (params.get('nachricht') || '').trim();
  const sprache     = (params.get('sprache') || 'de').trim();
  const dsgvo       = params.get('dsgvo');

  if (!name || !email || dsgvo !== 'ja') {
    return { statusCode: 400, body: 'Pflichtfelder fehlen oder DSGVO nicht akzeptiert.' };
  }

  // IP hashen — keine personenbezogenen Daten speichern
  const ip = event.headers['x-forwarded-for'] || 'unknown';
  const ip_hash = crypto.createHash('sha256').update(ip).digest('hex').slice(0, 16);

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
  );

  const { error } = await supabase.from('kontakt_anfragen').insert([{
    name, email, company, thema, mitarbeiter, nachricht, sprache, ip_hash
  }]);

  if (error) {
    console.error('Supabase error:', error);
    return { statusCode: 500, body: 'Datenbankfehler. Bitte direkt per E-Mail kontaktieren: consulting.arod@gmail.com' };
  }

  const danke = sprache === 'en' ? '/en/danke.html'
              : sprache === 'es' ? '/es/danke.html'
              : '/danke.html';

  return {
    statusCode: 302,
    headers: { Location: danke },
    body: ''
  };
};
