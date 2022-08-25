import { createContext, useState } from "react";
import { ISearchContext, ISearchProvider } from ".";


export const SearchContext = createContext({} as ISearchContext)

export function SearchProvider({children}: ISearchProvider){
    const [filter, setFilter] = useState('');

    return(
        <SearchContext.Provider value={{  
            filter,
            setFilter
        }}> 
        {children}
        </SearchContext.Provider>
    )
}