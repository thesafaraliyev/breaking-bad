import React, {useState} from "react";


const Search = ({getQuery}) => {
    const [text, setText] = useState('');


    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }


    return (
        <section className='search'>
            <form>
                <input
                    onChange={(e) => onChange(e.target.value)}
                    value={text}
                    autoFocus
                    type="text"
                    className='form-control'
                    placeholder='Search character'/>
            </form>
        </section>
    )
}


export default Search;