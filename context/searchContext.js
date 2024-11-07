'use client' // necessary for hooks

import { createContext, useState } from "react";

export const SearchContext = createContext();

export default function SearchContextProvider({children}){

    // searchTxt to be passed to page.js -- initially set to general
    const [searchTxt , setSearchTxt] = useState("general");
    // sortText to be passed to page.js -- initially set to publishedAt
    const [sortText , setSortText] = useState("publishedAt");

    // change the searchTxt to be passed as parameter to news api url
    function onSearch(srchTxt){
        setSearchTxt(srchTxt);
    }

    // change sortBy for dropdown
    function onSort(sortTxt){
        setSortText(sortTxt);
    }

    return (
        <SearchContext.Provider value={{searchTxt , setSearchTxt , onSearch , sortText , onSort}}>{children}</SearchContext.Provider>
    )
}