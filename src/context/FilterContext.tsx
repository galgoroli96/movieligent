import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type FilterProviderProps = {
  children: ReactNode;
};

type FilterContext = {
  filter: string;
  updateFilter: (value: string) => void;
};
const FilterContext = createContext({} as FilterContext);
export function useFilter() {
  return useContext(FilterContext);
}

export function FilterProvider({ children }: FilterProviderProps) {
  const [filter, setFilter] = useLocalStorage<string>("filter", "");

  function updateFilter(value: string) {
    setFilter(value);
  }

  return (
    <FilterContext.Provider
      value={{
        filter,
        updateFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
