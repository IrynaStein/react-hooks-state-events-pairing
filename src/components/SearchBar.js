function SearchBar() {

    return (
        <div className="search-bar">
            <input 
            type="text" 
            placeholder="search comments by user"
            // onChange={() => {filterByName()}}
            />
        </div>
    )
}

export default SearchBar;