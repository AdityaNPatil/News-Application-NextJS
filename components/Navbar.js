// Client component -- to allow hook usage
'use client'

// import Link component for routing in nextJS
import Link from "next/link"
// import Image component for logo
import Image from "next/image"

import logoIcon from "@/public/logo.jpeg"

// import useContext hook use state of searchTxt to change search text
import { useContext, useState } from "react"
import { SearchContext } from "@/context/searchContext"

const Navbar = () => {

    // onSearch to allow changing searchTxt in context , onSort allows changing sortText in context
    const { onSearch, onSort } = useContext(SearchContext)

    function handleSubmit(e) {
        e.preventDefault();
        // change searchTxt(passed as param to api url) only on onSearch Function call -- this is when page.js rerenders and useEffect in it is called
        onSearch(searchInput);
    }

    // state to handle input change (locally -- helps in changing input box value whenever user types)
    const [searchInput, setSearchInput] = useState("")

    // function to handle clicking on category
    function handleCategoryClick(e) {
        // console.log(e.target.id);
        // change searchTxt using onSearch to id of target
        onSearch(e.target.id);
    }

    function handleSortClick(e) {
        // console.log(e.target.value);
        // change sortTxt for api url in page,js using context
        onSort(e.target.value);
    }

    return (
        <nav className="flex flex-row justify-between p-3 bg-blue-600 text-white ">
            {/* Logo */}
            <Link href={"/"}>
                <Image
                    src={logoIcon}
                    width="100"
                    height="50"
                    alt="Logo"
                    className="rounded"
                />
            </Link>
            {/* Categories - clicking on any cateogry loads specific results */}
            <div className="flex gap-6 items-center text-xl">
                <p id="business" className="hover:cursor-pointer hover:text-blue-800 transition-colors active:text-cyan-200" onClick={handleCategoryClick}>Business</p>
                <p id="technology" className="hover:cursor-pointer hover:text-blue-800 transition-colors active:text-cyan-200" onClick={handleCategoryClick}>Technology</p>
                <p id="sports" className="hover:cursor-pointer hover:text-blue-800 transition-colors active:text-cyan-200" onClick={handleCategoryClick}>Sports</p>
            </div>
            {/* Search Bar */}
            <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                <select name="sort_by_select" id="sort" onChange={handleSortClick} className="text-black">
                    <option value="">Sort By</option>
                    <option value="publishedAt">Published At</option>
                    <option value="relevancy">Relevancy</option>
                    <option value="popularity">Popularity</option>
                </select>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="p-2 rounded text-gray-800"
                />
                <button type="submit" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">Search</button>
            </form>
        </nav>
    )
}

export default Navbar
