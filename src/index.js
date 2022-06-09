import weather from './weather';
import view from './view';

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (searchInput.value === "") return;
    const weatherData = await weather.getData(searchInput.value);
    view.setSearchResult(weatherData);
})

