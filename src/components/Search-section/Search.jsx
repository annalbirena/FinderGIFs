import './search.scss';
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from '../../context/themeContext';
import { GifContext } from "../../context/gifContext";
import imgHeader from "../../assets/images/ilustra_header.svg";
import iconSearchLight from "../../assets/images/icon-search.svg";
import iconSearchDark from "../../assets/images/icon-search-mod-noc.svg";
import useFetch from "../../hooks/useFetch";

function Search() {
    //Contextos
    const { darkTheme } = useContext(ThemeContext);
    const { setGifs, setLoading } = useContext(GifContext);

    //Estados Locales
    const [search, setSearch] = useState("");
    const [suggestionList, setSuggestionList] = useState([]);
    const [term, setTerm] = useState("");

    //Custome Hook - fetch al endpoint de busqueda y autocompletado
    const { getFetchSearch, getFetchAutocomplete } = useFetch();

    //Funcion para actualizar el valor del input
    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    //Funcion para actualizar el termino a buscar cuando se haga click en el boton buscar
    const handleSearchForm = (e) => {
        e.preventDefault();
        setTerm(search);
        //Inicializar estados
        setSearch("");
        setSuggestionList([]);
    }

    //Funcion para actualizar el termino a buscar cuando se haga click en los terminos de autocompletado
    const handleSearch = (e) => {
        setTerm(e.target.innerText);
        //Inicializar estados
        setSearch("");
        setSuggestionList([]);
    }

    //Actualizar lista de autocompletado, se ejecuta cada vez que el estado SEARCH se actualiza
    useEffect(() => {
        //Ejecutara la peticion si se ingreso alguna letra en el input
        if (search.length > 0) {
            const getData = async () => {
                try {
                    //Ingresar como parametro tag term (termino a buscar) y limit (cantidad de gifts a obtener)
                    const resp = await getFetchAutocomplete(search, 5);
                    const info = await resp.json();
                    //Acciones luego de obtener la informacion
                    setSuggestionList(info.data);
                } catch (e) {
                    console.error("Algo salio mal: ", e);
                }
            }
            getData(); //Ejecutar funcion
        }
    }, [search])

    //Actualizar lista de gifs, se ejecuta cada vez que el estado TERM se actualiza
    useEffect(() => {
        //Ejecutara la peticion si se ingreso algun termino
        if (term.length > 0) {
            const getData = async () => {
                try {
                    setLoading(true);
                    //Ingresar como parametro tag term (termino a buscar) y limit (cantidad de gifts a obtener)
                    const resp = await getFetchSearch(term, 15);
                    const info = await resp.json();
                    //Acciones luego de obtener la informacion
                    setGifs(info.data);
                    setLoading(false);
                } catch (e) {
                    console.error("Algo salio mal: ", e);
                }
            }
            getData(); //Ejecutar funcion
        }
    }, [term])

    return (
        <div className="section-search">
            <h1>¡Inspirate y busca los mejores <span>GIFS</span>!</h1>
            <figure>
                <img className="img-header" src={imgHeader} alt="Imagen de personas saludando" />
            </figure>
            <div className="form">
                <form onSubmit={handleSearchForm} className="input-container">
                    <input type="text" placeholder="Busca gifs" onChange={handleChange} value={search} />
                    <button className="btn-search">
                        <img src={darkTheme ? iconSearchLight : iconSearchDark} alt="searchicon" />
                    </button>
                </form>
                {suggestionList.length > 0 &&
                    (
                        <div className="suggestion-list">
                            <ul>
                                {suggestionList.map(item => {
                                    return (
                                        <li onClick={handleSearch}>
                                            <img className="search-icon" src={darkTheme ? iconSearchDark : iconSearchLight} alt="searchicon" />
                                            {item.name}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default Search;