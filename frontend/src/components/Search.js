import React, { useState } from "react";
const Search = ({ search }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = e => {
        setSearchValue(e.target.value);
    };

    const resetInputField = () => {
        setSearchValue("");
    };

    const callSearchFunction = e => {
        e.preventDefault();
        search(searchValue);
        resetInputField();
    };

    return (
        <form className="search input-group col-md-8 offset-md-2">
            < input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
                className="form-control"
                placeholder="Search..."
            />
            <button className="btn btn-secondary" onClick={callSearchFunction} type="button">
                <i className="fa fa-search"></i>
            </button>
        </form >
    );
};

export default Search;