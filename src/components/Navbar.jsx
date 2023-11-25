import React from 'react'
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import SideBar from './SideBar';
import CountrySelector from './CountrySelector';
import SearchBar from './SearchBar';
import SearchInput from './SearchInput';
import { IoMdSearch } from "react-icons/io";



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [search, setSearchShow] = useState(false);

  return (
    <>
      <div className="w-full h-20 z-50 backdrop-blur-2xl transition-colors bg-purple-500/80 mx-auto flex justify-between items-center font-plusSans px-4 md:px-6 lg:px-10 lg:py-12">
        <div className='text-3xl md:text-4xl font-lato font-semibold'>
          Newsify
        </div>
        <SearchInput />
        <span
          className="md:hidden"
        >
          <div className='flex gap-2'>
            <IoMdSearch className="text-3xl mr-1" onClick={() => setSearchShow(!search)} />
            <FiMenu className="text-3xl mr-1" onClick={() => setShowMenu(!showMenu)} />
          </div>
        </span>
        {
          search && (
            <SearchBar setSearchShow={setSearchShow} />
          )
        }
        {showMenu && (
          <SideBar setShowMenu={setShowMenu} />
        )}
        <div className='hidden md:block'>
          <CountrySelector />
        </div>
      </div>
    </>
  )
}

export default Navbar