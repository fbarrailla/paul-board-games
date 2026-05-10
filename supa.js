// Supabase client + helpers for ratings and comments.
// Loaded as a regular script — supabase-js global is provided by the CDN.

const SUPABASE_URL = 'https://swjqirlgymsaubvhadvh.supabase.co';
const SUPABASE_KEY = 'sb_publishable_H2v_iYYcsZsJV7noFiui1A_YPca55sQ';
const supa = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Visitor name persisted locally — used as the row identity on rating upserts.
const NAME_KEY = 'paulsBoardGames.visitor.v1';
function getVisitorName() { return localStorage.getItem(NAME_KEY) || ''; }
function setVisitorName(n) { localStorage.setItem(NAME_KEY, n); }

async function fetchRatings(gameSlug) {
  const { data, error } = await supa
    .from('ratings')
    .select('name, stars, updated_at')
    .eq('game_slug', gameSlug);
  if (error) { console.warn('fetchRatings', error); return []; }
  return data || [];
}

async function upsertRating(gameSlug, name, stars) {
  const row = { game_slug: gameSlug, name: name.trim(), stars, updated_at: new Date().toISOString() };
  const { error } = await supa
    .from('ratings')
    .upsert(row, { onConflict: 'game_slug,name' });
  if (error) throw error;
}

async function fetchComments(gameSlug) {
  const { data, error } = await supa
    .from('comments')
    .select('id, name, body, created_at')
    .eq('game_slug', gameSlug)
    .order('created_at', { ascending: false });
  if (error) { console.warn('fetchComments', error); return []; }
  return data || [];
}

async function addComment(gameSlug, name, body) {
  const row = { game_slug: gameSlug, name: name.trim(), body: body.trim() };
  const { data, error } = await supa
    .from('comments')
    .insert(row)
    .select()
    .single();
  if (error) throw error;
  return data;
}

function avgStars(ratings) {
  if (!ratings.length) return null;
  const sum = ratings.reduce((a, r) => a + r.stars, 0);
  return sum / ratings.length;
}

function formatRelative(iso) {
  const t = new Date(iso).getTime();
  const diff = (Date.now() - t) / 1000;
  if (diff < 60) return 'just now';
  if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
  if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
  if (diff < 604800) return Math.floor(diff / 86400) + 'd ago';
  return new Date(iso).toLocaleDateString();
}
