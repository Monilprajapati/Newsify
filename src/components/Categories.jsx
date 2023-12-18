import React from 'react'
import { useState } from 'react'
import { categoryData } from '../constants'
import { useNewsContext } from '../contexts/NewsContext'

const Categories = () => {

    const { selectedCategory, setCategory, searchQuery } = useNewsContext();

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };
    return (
        <>
            {
                searchQuery.length > 0 ? null : (
                    <div className='hidden cursor-pointer md:flex flex-wrap mt-7 gap-4 place-content-center items-center font-plusSans'
                    >
                        {
                            categoryData.map((item, index) => {
                                return (
                                    <li key={index} className={`px-5 outline-none py-2 border-2 border-black rounded-3xl list-none ${selectedCategory === item.value ? "bg-purple-300" : ""} hover:border-purple-400`} value={item.value}
                                        onClick={() => handleCategoryChange(item.value)}
                                    >{item.name}</li>
                                )
                            })
                        }
                    </div>
                )
            }
        </>
    )
}

export default Categories