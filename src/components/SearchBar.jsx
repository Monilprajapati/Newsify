import React from 'react'
import { useNewsContext } from '../contexts/NewsContext'
import { MdClose } from 'react-icons/md';

const SearchBar = ({ setSearchShow }) => {

  const { searchQuery, setSearch } = useNewsContext();

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className='absolute top-20 w-full left-0 px-4 py-2'>
      <div className='flex relative w-full h-12 rounded-3xl bg-white border border-purple-400'>
        <input type="text" className='w-full rounded-3xl text-xl bg-transparent outline-none pl-4' value={searchQuery} onChange={(e) => handleSearch(e)} />
        <MdClose className='relative right-3 ml-2 top-1 mt-1 text-3xl text-gray-400' onClick={() => {
          setSearchShow(false)
          setSearch("")
        }}/>
      </div>
    </div>
  )
}

export default SearchBar