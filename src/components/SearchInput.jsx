import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { useNewsContext } from '../contexts/NewsContext';

const SearchInput = () => {

    const { searchQuery, setSearch } = useNewsContext();

    const handleSearch = (e) => {
        setSearch(e.target.value)
    } 
  return (
    <div className='hidden md:flex relative w-full h-10 mx-9 lg:mx-14 xl:mx-56 rounded-3xl bg-white'>
       <input type="text" className='w-full rounded-3xl bg-transparent outline-none pl-3' value={searchQuery} onChange={(e) => handleSearch(e)}/>
        <IoMdSearch className='relative right-2 lg:right-3 ml-2 top-1 mt-1 text-2xl text-gray-400' />
    </div>
  )
}

export default SearchInput