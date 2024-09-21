import React from 'react'

interface SearchBarProps {
  searchQuery: string
  setSearchQuery: (searchQuery: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {

  return (
    <div className="searchBar">
      <input
        className='searchInput'
        type="text"
        placeholder="מה עושה לך שמח?"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="linkIconImage SearchIcon"></div>
    </div>
  )
}

export default SearchBar;
