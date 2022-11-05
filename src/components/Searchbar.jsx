import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from 'react-icons/fi'
const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  }
  return(
  <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-widthin:text-gray-400">
    <label htmlFor="search-field" className="sr-only">Search All Songs</label>
    <div className="flex flex-row justify-start items-center">
      <input 
      type="search" 
      name="search-field" 
      id="search-field" 
      autoComplete="off" 
      placeholder="Search Songs"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
      />
    </div>
  </form>
)
}
export default Search;
