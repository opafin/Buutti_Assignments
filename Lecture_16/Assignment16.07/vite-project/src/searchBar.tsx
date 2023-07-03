interface SearchBarProps {
  filter: string
  setFilter: (filter: string) => void
}

function SearchBar({ filter, setFilter }: SearchBarProps) {
  setFilter(filter)
  return <input className="searchBar" value={filter} onChange={(event) => setFilter(event.target.value)}></input>
}

export default SearchBar
