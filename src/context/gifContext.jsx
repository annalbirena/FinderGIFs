import { useState, createContext } from "react";

export const GifContext = createContext();

export const GifProvider = ({children}) => {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);

    return(
        <GifContext.Provider value={{gifs, setGifs, loading, setLoading}}>
            {children}
        </GifContext.Provider>
    )
}