import "./gifs.scss";
import useFetch from "../../hooks/useFetch";
import { useEffect, useContext } from "react";
import { GifContext } from "../../context/gifContext";
import Loader from "../Loader/Loader";
import NotFoundAlert from "../NotFoundAlert/NotFoundAlert";

function Gifs() {
    //Contexto GifContext
    const { gifs, setGifs, loading, setLoading } = useContext(GifContext);
    //Custome Hook - fetch al endpoint de gifs en tendencia
    const { getFetchTrending } = useFetch();

    //Obtiene lista de gifs en tendencia
    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                //Ingresar como parametro el numero de gifs a obtener (limit)
                const resp = await getFetchTrending(15);
                const info = await resp.json();
                //Acciones luego de obtener la informacion
                setGifs(info.data);
                setLoading(false);
            } catch (e) {
                console.error("Algo salio mal: ",e);
            }
        }
        getData();
    }, [])

    return (
        <div className="gifs-section" >
            {loading ? (
                <Loader />
            ) : (
                //gifs.length si es igual a 0 se considera falso de lo contrario es verdadero
                gifs.length ? (
                    <div>
                        <h2>Resultados de la Busqueda</h2>
                        <div className="grid-gifs">
                            {gifs.map(gif => {
                                return (
                                    <figure key={gif.id}>
                                        <a href={gif.bitly_gif_url} target="_blank" rel="noreferrer">
                                            <img src={gif.images.fixed_height.url} alt={gif.title} />
                                        </a>
                                    </figure>
                                );
                            })}
                        </div>
                    </div>
                    
                ) : (
                    <NotFoundAlert />
                )
            )
            }
        </div>
    )
}

export default Gifs;