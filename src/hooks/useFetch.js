import {GET_SEARCH_API , GET_AUTOCOMPLETE_URL, GET_TRENDING_URL} from "../assets/scripts/constant";

function useFetch(){
    const getFetchSearch = (tagTerm,limit) => {
        return fetch(`${GET_SEARCH_API}&q=${tagTerm}&limit=${limit}`);
    }

    const getFetchAutocomplete = (tagTerm,limit) => {
        return fetch(`${GET_AUTOCOMPLETE_URL}&q=${tagTerm}&limit=${limit}`);
    }

    const getFetchTrending = (limit) => {
        return fetch(`${GET_TRENDING_URL}&limit=${limit}`);
    }

    return {getFetchSearch, getFetchAutocomplete, getFetchTrending}
}

export default useFetch;
