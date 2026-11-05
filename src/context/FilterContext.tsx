
import { createContext } from "react"
import { useState } from "react";
import type { FilterProviderProps } from "../types";

export type FilterType = "all" | "active" | "completed";

interface FilterContextType {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}
export const FilterContext = createContext<
  FilterContextType | undefined
>(undefined);


function FilterProvider({ children }: FilterProviderProps) {
  const [filter, setFilter] = useState<FilterType>("all");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;