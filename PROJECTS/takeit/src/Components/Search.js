import { MdSearch } from "react-icons/md";

const Search=({handleSearch})=>{
    return (
        <div className="search">
            <MdSearch className="md-search" size="1.5em"/>
            <input type="text" onChange={(event)=>handleSearch(event.target.value)} placeholder="Search Here.."/>
        </div>
    )
}
export default Search;
