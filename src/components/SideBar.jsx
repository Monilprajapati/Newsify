import React from 'react'
import { MdClose } from "react-icons/md";
import { categoryData } from '../constants';
import CountrySelector from './CountrySelector';
import { useNewsContext } from '../contexts/NewsContext';
const SideBar = ({ setShowMenu }) => {
    const { selectedCategory, setCategory } = useNewsContext();
    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };
    return (
        <div className="w-screen h-screen font-plusSans mdl:hidden absolute top-0 left-0 bg-white scrollbar-hide">
            <div className='flex flex-col'>
                <div className='flex items-center h-20 px-4 justify-between bg-purple-400 text-3xl'>
                    <div className='font-semibold'>
                        Newsify
                    </div>
                    <span
                        onClick={() => setShowMenu(false)}
                        className="mt-1 cursor-pointer"
                    >
                        <MdClose />
                    </span>
                </div>
                <div className="catergories mt-10 flex flex-col">
                    <div className='text-xl pl-3 pb-1 mb-1 border-b border-gray-300'>
                        Categories
                    </div>
                    {
                        categoryData.map((item, index) => {
                            return (
                                <div className={`flex items-center justify-between px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${selectedCategory === item.value ? "bg-purple-200" : ""}`} key={index}
                                    onClick={() => {
                                        handleCategoryChange(item.value)
                                        setShowMenu(false)
                                    }}
                                    value={item.value}
                                >
                                    <div className="text-lg font-medium">{item.name}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='mt-7 flex justify-center gap-4 flex-col'>
                <span className='text-xl pb-1 pl-3 mb-1 border-b border-gray-300'>Country</span>
                <div className='ml-3'>
                    <CountrySelector />
                </div>
            </div>

        </div>
    )
}

export default SideBar