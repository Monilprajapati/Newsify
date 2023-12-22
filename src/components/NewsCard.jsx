import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { timeElapsedSince } from '../utils/timeConversion';

const NewsCard = ({item}) => {
    const itemTitle = item.title;
    const title = itemTitle?.length > 40 ? itemTitle.slice(0, 40) + ".." : itemTitle;
    const itemDescription = item.description;
    const description = itemDescription?.length > 100 ? itemDescription.slice(0, 90) + "..." : itemDescription;    
    const time = timeElapsedSince(item.publishedAt);
    return (
        <div>
            <div className="bg-white flex flex-col h-[500px] md:w-[350px] lg:w-[320px] xl:w-[380px] font-plusSans border-gray-400 rounded-lg shadow-md">
                <div className="image h-56 w-full">
                    <img src={item.image} alt={title} className="object-cover rounded-t-lg h-full w-full" />
                </div>

                <div className="px-5 py-3 pb-5">
                    <span className='text-base bg-purple-200 px-4 py-1 mb-4 rounded-sm cursor-pointer'
                    onClick={() => {
                        window.open(item.source.url, "_blank")
                    
                    }}
                    >{item.source.name}</span>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight mt-3 text-gray-900">
                        {title}
                    </h5>
                    <p className="text-base text-gray-700">{description}</p>                    <div className="bottom flex justify-between mt-5 items-center">
                        <span className="text-lg text-gray-700 pt-1">{time}</span>
                        <button className="flex items-center gap-2 px-3 py-[6px] text-lg font-medium text-center text-black bg-purple-300 rounded-lg hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 "
                            onClick={() => {
                                window.open(item.source.url, "_blank")
                            }}
                        >
                            Read more
                            <FiArrowRight className="text-lg mt-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard