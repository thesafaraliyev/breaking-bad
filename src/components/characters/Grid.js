import React from "react";

import Item from "./Item";
import Spinner from "../ui/Spinner";


const Grid = ({characters, isLoading}) => {
    return isLoading ? <Spinner/> : (
        <section className="cards">
            {characters.map(character => <Item key={character.char_id} character={character}/>)}
        </section>
    )
}


export default Grid;