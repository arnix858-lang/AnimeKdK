const animeData = [
  { title: 'Jujutsu Kaisen', genre: 'Сёнен', rating: 8.7, episodes: 47 },
  { title: 'Attack on Titan', genre: 'Экшен', rating: 9.1, episodes: 89 },
  { title: 'Demon Slayer', genre: 'Фэнтези', rating: 8.6, episodes: 63 },
  { title: 'Chainsaw Man', genre: 'Экшен', rating: 8.4, episodes: 12 },
  { title: 'Spy x Family', genre: 'Комедия', rating: 8.5, episodes: 37 },
  { title: 'Frieren', genre: 'Приключения', rating: 9.0, episodes: 28 },
  { title: 'One Piece', genre: 'Приключения', rating: 9.0, episodes: 1100 },
  { title: 'Death Note', genre: 'Триллер', rating: 9.0, episodes: 37 }
];

const animeGrid = document.getElementById('animeGrid');
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');
const trendingList = document.getElementById('trendingList');

function uniqueGenres(data) {
  return [...new Set(data.map(item => item.genre))].sort();
}

function fillGenres() {
  uniqueGenres(animeData).forEach(genre => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    genreFilter.append(option);
  });
}

function renderTrending() {
  const top = [...animeData].sort((a, b) => b.rating - a.rating).slice(0, 4);
  trendingList.innerHTML = top
    .map(item => `<li><strong>${item.title}</strong><br><small>${item.genre} · ⭐ ${item.rating}</small></li>`)
    .join('');
}

function animeCard(anime) {
  return `
    <article class="card">
      <div class="card__poster" aria-hidden="true"></div>
      <div class="card__content">
        <h3>${anime.title}</h3>
        <p>
          <span class="badge">${anime.genre}</span>
          <span class="badge">⭐ ${anime.rating}</span>
        </p>
        <p>Эпизоды: ${anime.episodes}</p>
      </div>
    </article>
  `;
}

function renderCatalog() {
  const search = searchInput.value.trim().toLowerCase();
  const genre = genreFilter.value;

  const filtered = animeData.filter(item => {
    const bySearch = item.title.toLowerCase().includes(search);
    const byGenre = genre === 'all' || item.genre === genre;
    return bySearch && byGenre;
  });

  animeGrid.innerHTML = filtered.map(animeCard).join('');

  if (!filtered.length) {
    animeGrid.innerHTML = '<p>Ничего не найдено. Попробуйте изменить фильтры.</p>';
  }
}

searchInput.addEventListener('input', renderCatalog);
genreFilter.addEventListener('change', renderCatalog);

fillGenres();
renderTrending();
renderCatalog();
