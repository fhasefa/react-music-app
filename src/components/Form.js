import { useState } from "react"

export default function Form({getSong}) {

    let [input,setInput] = useState('')

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        getSong(input)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={input} onChange={handleChange}></input>
            <button>Search</button>
        </form>
    )
};