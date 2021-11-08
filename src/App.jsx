import './App.scss';
import { useContext } from 'react';
import { ThemeContext } from './context/themeContext';
import { GifProvider } from './context/gifContext';
import Header from "./components/Header/Header";
import Search from "./components/Search-section/Search";
import Gifs from "./components/Gifs-section/Gifs";


function App() {
  //Contexto ThemeContext
  const { darkTheme } = useContext(ThemeContext);
  
  return (
    <div className="App" data-theme={darkTheme ? "dark" : ""}>
      <Header />
      <GifProvider>
        <Search />
        <Gifs />
      </GifProvider>
    </div>
  );
}

export default App;
