import { FilterInputProps } from "../types";
import { useFilter } from "../context/FilterContext";
import "../styles/filter.css";

const FilterInput = ({ handleSearch, handleKeyDown }: FilterInputProps) => {
  const { filter, updateFilter } = useFilter();

  return (
    <div className="filterInput">
      <input
        type="search"
        value={filter}
        onChange={(event) => updateFilter(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for a movie..."
      />
      <button className="filterBtn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default FilterInput;
