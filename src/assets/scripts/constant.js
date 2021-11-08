const API_URL = "https://api.giphy.com/v1/gifs";
const API_KEY = "y9ipSTqAhw2gWIahsIfPSdTOTM9WA8eP";
const RESOURCES = {
    search: "/search",
    autocomplete: "/search/tags",
    trending: "/trending"
}

const GET_SEARCH_API = `${API_URL}${RESOURCES.search}?api_key=${API_KEY}`;
const GET_AUTOCOMPLETE_URL = `${API_URL}${RESOURCES.autocomplete}?api_key=${API_KEY}`;
const GET_TRENDING_URL = `${API_URL}${RESOURCES.trending}?api_key=${API_KEY}`;


export {GET_SEARCH_API , GET_AUTOCOMPLETE_URL, GET_TRENDING_URL};
