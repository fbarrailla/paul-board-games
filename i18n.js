// Tiny i18n module: pick FR or EN, persist in localStorage, fill data-i18n elements.
const LANG_KEY = 'paulsBoardGames.lang.v1';

const STRINGS = {
  fr: {
    // Page titles
    'title.index': "Les Jeux de Paul — la collection",
    'title.tag': "Étiqueter les photos — Les Jeux de Paul",

    // Brand & nav
    'brand': "Les Jeux de Paul",
    'nav.all_games': "Tous les jeux",
    'nav.scores': "Notes",
    'nav.tag_photos': "📷 Étiqueter",
    'nav.playing': "On joue !",
    'nav.tagging': "Étiquetage",

    // Hero — index
    'hero.kicker': "★ Bienvenue chez ★",
    'hero.title.before': "Les jeux de",
    'hero.title.pop': "Paul",
    'hero.sub': "Toute une étagère de jeux de société — notés sur vingt. Clique sur un jeu pour voir sa photo !",
    'hero.see_all': "Voir tous les jeux →",
    'hero.surprise': "🎲 Surprise !",

    // Stats
    'stat.games': "jeux sur l'étagère",
    'stat.photos': "photos étiquetées",
    'stat.left': "à étiqueter",
    'stat.avg': "note moyenne",

    // Shelf / trophies
    'shelf.favs': "Les chouchous de Paul",
    'shelf.perfect': "★ 20 / 20 ★",
    'tag.perfect': "★ PARFAIT",
    'tag.2player': "2 JOUEURS",

    // Filters
    'filter.search': "Trouver un jeu…",
    'filter.score': "Note",
    'filter.players': "Joueurs",
    'filter.tier.excellent': "Génial (18+)",
    'filter.tier.great': "Très bien (16-17)",
    'filter.tier.good': "Bien (14-15)",
    'filter.tier.okay': "Correct",
    'filter.players.3plus': "3 ou plus",
    'filter.players.2': "2 joueurs",
    'filter.players.hasphoto': "Avec photo",

    // Ribbon
    'ribbon.games_count': "jeux",
    'ribbon.sort': "Tri",
    'sort.best': "Meilleurs d'abord",
    'sort.worst': "Pires d'abord",
    'sort.alpha': "A → Z",
    'sort.shuffle': "Mélanger",

    // Grid / empty
    'empty.title': "Aucun jeu ne correspond !",
    'empty.hint': "Essaie d'enlever un filtre",

    // Chart
    'chart.title': "Les notes",
    'chart.title.line2': "plutôt généreuses.",
    'chart.body': "La plupart des jeux se logent entre {a} et {b}. Seulement trois ont décroché le {c} parfait !",

    // Footer
    'foot.made_by': "Par",

    // Game detail
    'detail.kicker': "Jeu {n} sur {total}",
    'detail.not_found': "Jeu introuvable",
    'detail.not_found_sub': "Ce jeu n'est pas sur l'étagère.",
    'detail.back': "← Retour à la liste",
    'detail.all_games': "← Tous les jeux",
    'detail.manage_photos': "📷 Gérer les photos",
    'detail.add_photo': "📷 Ajouter une photo",
    'detail.no_photo.title': "Pas encore de photo !",
    'detail.no_photo.body': "Étiquette une photo pour {name} dans l'atelier.",
    'detail.no_photo.cta': "Aller étiqueter →",
    'detail.related': "Tu pourrais aussi aimer…",
    'detail.description.empty': "Pas encore de description. À vous de la raconter en commentaire !",

    // Rating panel
    'rating.empty': "Aucune note pour l'instant — sois le premier !",
    'rating.count_one': "{n} note",
    'rating.count_many': "{n} notes",
    'rating.your_turn': "à toi",
    'rating.your_name': "Ton prénom",
    'rating.pick_name_first': "Choisis ton prénom d'abord ↑",
    'rating.tap_to_rate': "Clique sur une étoile",
    'rating.your_rating': "{n}/5 ★ — clique pour changer",
    'rating.name_first_status': "Ajoute ton prénom au-dessus ↑",
    'rating.saving': "Enregistrement…",
    'rating.saved': "★ Enregistré !",
    'rating.save_failed': "Échec : {msg}",
    'rating.db_missing': "Base de données pas encore prête.",

    // Comments panel
    'comments.heading': "Ce qu'on en dit",
    'comments.placeholder': "Dis ce que tu penses de {name}…",
    'comments.post': "✦ Publier",
    'comments.empty': "Pas encore de commentaire — sois le premier !",
    'comments.loading': "Chargement…",
    'comments.failed_load': "Impossible de charger les commentaires.",
    'comments.need_name': "Choisis ton prénom au-dessus",
    'comments.need_text': "Écris quelque chose à publier",
    'comments.posting': "Publication…",
    'comments.posted': "✓ Publié !",
    'comments.post_failed': "Échec : {msg}",

    // Tag tool
    'tag.hero.kicker': "★ Atelier photo ★",
    'tag.hero.title.before': "Étiqueter",
    'tag.hero.title.pop': "les photos",
    'tag.hero.sub': "Clique sur une photo, choisis le jeu qu'elle montre. Tes étiquettes sont enregistrées automatiquement.",
    'tag.filter.all': "Toutes",
    'tag.filter.untagged': "Non étiquetées",
    'tag.filter.tagged': "Étiquetées",
    'tag.export': "⬇ Exporter",
    'tag.import': "⬆ Importer",
    'tag.reset': "↺ Restaurer les défauts",
    'tag.empty.title': "Rien à voir ici !",
    'tag.empty.hint': "Change de filtre",
    'tag.click_prompt': "Clique sur une photo pour étiqueter",
    'tag.no_selection': "Aucune photo sélectionnée",
    'tag.no_game': "Aucun jeu attribué",
    'tag.remove': "Retirer",
    'tag.search_game': "Chercher un jeu…",
    'tag.untagged_label': "Non étiquetée",
    'tag.reset_confirm': "Effacer tes modifications et revenir aux étiquettes automatiques ?",
    'tag.import_failed': "Import impossible : {msg}",
  },

  en: {
    'title.index': "Paul's Board Games — the collection",
    'title.tag': "Tag photos — Paul's Board Games",

    'brand': "Paul's Board Games",
    'nav.all_games': "All games",
    'nav.scores': "Scores",
    'nav.tag_photos': "📷 Tag photos",
    'nav.playing': "Playing!",
    'nav.tagging': "Tagging",

    'hero.kicker': "★ Hello! Welcome to ★",
    'hero.title.before': "Paul's",
    'hero.title.pop': "Board Games",
    'hero.sub': "A whole shelf full of board games — rated out of twenty. Click a game to see its photo!",
    'hero.see_all': "See all games →",
    'hero.surprise': "🎲 Surprise me",

    'stat.games': "games on the shelf",
    'stat.photos': "photos tagged",
    'stat.left': "left to tag",
    'stat.avg': "average score",

    'shelf.favs': "Paul's favourites",
    'shelf.perfect': "★ 20 / 20 ★",
    'tag.perfect': "★ PERFECT",
    'tag.2player': "2-PLAYER",

    'filter.search': "Find a game…",
    'filter.score': "Score",
    'filter.players': "Players",
    'filter.tier.excellent': "Awesome (18+)",
    'filter.tier.great': "Great (16-17)",
    'filter.tier.good': "Good (14-15)",
    'filter.tier.okay': "Okay",
    'filter.players.3plus': "3 or more",
    'filter.players.2': "2 player",
    'filter.players.hasphoto': "Has photo",

    'ribbon.games_count': "games",
    'ribbon.sort': "Sort",
    'sort.best': "Best first",
    'sort.worst': "Worst first",
    'sort.alpha': "A → Z",
    'sort.shuffle': "Shuffle",

    'empty.title': "Hmm, no games match!",
    'empty.hint': "Try removing a filter",

    'chart.title': "The score",
    'chart.title.line2': "chart.",
    'chart.body': "Most games land in the {a}–{b} sweet spot. Only three got the perfect {c}!",

    'foot.made_by': "Made by",

    'detail.kicker': "Game {n} of {total}",
    'detail.not_found': "Game not found",
    'detail.not_found_sub': "That game isn't in the shelf.",
    'detail.back': "← Back to all games",
    'detail.all_games': "← All games",
    'detail.manage_photos': "📷 Manage photos",
    'detail.add_photo': "📷 Add photo",
    'detail.no_photo.title': "No photo yet!",
    'detail.no_photo.body': "Tag a photo for {name} in the photo studio.",
    'detail.no_photo.cta': "Go tag a photo →",
    'detail.related': "You might also like…",
    'detail.description.empty': "No description yet. Be the first to write about it in the comments!",

    'rating.empty': "No ratings yet — be the first!",
    'rating.count_one': "{n} rating",
    'rating.count_many': "{n} ratings",
    'rating.your_turn': "your turn",
    'rating.your_name': "Your name",
    'rating.pick_name_first': "Pick a name first ↑",
    'rating.tap_to_rate': "Tap a star to rate",
    'rating.your_rating': "{n}/5 ★ — tap to change",
    'rating.name_first_status': "Add your name above first ↑",
    'rating.saving': "Saving…",
    'rating.saved': "★ Saved!",
    'rating.save_failed': "Save failed: {msg}",
    'rating.db_missing': "Database not set up yet.",

    'comments.heading': "What people say",
    'comments.placeholder': "Tell everyone what you think about {name}…",
    'comments.post': "✦ Post comment",
    'comments.empty': "No comments yet — be the first!",
    'comments.loading': "Loading…",
    'comments.failed_load': "Could not load comments.",
    'comments.need_name': "Pick a name above first",
    'comments.need_text': "Write something to post",
    'comments.posting': "Posting…",
    'comments.posted': "✓ Posted!",
    'comments.post_failed': "Failed: {msg}",

    'tag.hero.kicker': "★ Photo studio ★",
    'tag.hero.title.before': "Tag",
    'tag.hero.title.pop': "photos",
    'tag.hero.sub': "Click a photo, pick the game it shows. Your tags are saved automatically.",
    'tag.filter.all': "All",
    'tag.filter.untagged': "Untagged",
    'tag.filter.tagged': "Tagged",
    'tag.export': "⬇ Export tags",
    'tag.import': "⬆ Import tags",
    'tag.reset': "↺ Restore auto-tags",
    'tag.empty.title': "Nothing here!",
    'tag.empty.hint': "Try changing the filter",
    'tag.click_prompt': "Click a photo to start tagging",
    'tag.no_selection': "No photo selected",
    'tag.no_game': "No game assigned",
    'tag.remove': "Remove",
    'tag.search_game': "Search a game…",
    'tag.untagged_label': "Untagged",
    'tag.reset_confirm': "Discard your changes and restore the auto-tagged defaults?",
    'tag.import_failed': "Could not import: {msg}",
  }
};

function detectLang() {
  const stored = localStorage.getItem(LANG_KEY);
  if (stored && STRINGS[stored]) return stored;
  const nav = (navigator.language || 'en').toLowerCase();
  return nav.startsWith('fr') ? 'fr' : 'en';
}

let currentLang = detectLang();

function getLang() { return currentLang; }
function setLang(lang) {
  if (!STRINGS[lang]) return;
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
}

function t(key, vars) {
  let s = (STRINGS[currentLang] && STRINGS[currentLang][key]) || (STRINGS.en[key]) || key;
  if (vars) for (const [k, v] of Object.entries(vars)) s = s.replace(new RegExp('\\{' + k + '\\}', 'g'), v);
  return s;
}

function applyI18n(root) {
  root = root || document;
  root.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  root.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  root.querySelectorAll('[data-i18n-aria-label]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAriaLabel)); });
  root.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); });
}

document.documentElement.lang = currentLang;
