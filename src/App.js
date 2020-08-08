import React, {useState, useEffect} from 'react';

import axios from 'axios';

import './App.css';

import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import CharactersGrid from "./components/characters/Grid";


function App() {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('');


    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);

            setCharacters(result.data);
            setIsLoading(false)
        }

        fetchItems();
    }, [query])


    return (
        <div className="container">
            <Header/>
            <Search getQuery={(q) => setQuery(q)}/>

            <CharactersGrid isLoading={isLoading} characters={characters}/>
        </div>
    )
}


export default App;
