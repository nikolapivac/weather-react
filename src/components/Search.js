import React, {useState} from "react";

const Search = (props) => {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(inputValue);
    };

    return (
        <div className="header">
            <form className="input_container" onSubmit={handleSubmit}>
                <input id="location" type="text" placeholder="Enter location..." onChange={handleChange} value={inputValue}/>
                <button className="search_btn" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search;