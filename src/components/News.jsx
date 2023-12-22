import React from 'react'
import { useState, useEffect } from 'react';
import { CiLocationOn } from "react-icons/ci";
import NewsCard from './NewsCard'
import { useNewsContext } from '../contexts/NewsContext';
import axios from 'axios';
import { LineWave } from 'react-loader-spinner';
// import { Pagination } from '@mui/material';
import { IoIosArrowForward } from "react-icons/io";


const News = () => {

  const { selectedCountry, selectedCategory, searchQuery } = useNewsContext();

  const [news, setNews] = useState([]);
  const [searchNews, setSearchNews] = useState([]); // for search news
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1)

  // work with useeffect to controll api
  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;

    // it is for our main data
    const getTopHeadlines = async () => {
      setLoading(true);
      // News Api is not available for free in production mode
      // const params = {
      //   country: selectedCountry,
      //   category: selectedCategory,
      //   page,
      //   apiKey
      // };
      // const response = await axios.get(
      //   'https://newsapi.org/v2/top-headlines',
      //   { params }
      // )

      // Adding Gnews Api for free in production mode
      const response = await axios.get(
        'https://gnews.io/api/v4/top-headlines?category=' + selectedCategory + '&lang=en&country=' + selectedCountry + '&max=9&apikey=' + apiKey,
      )
      setNews(response.data.articles);
      console.log(response.data.articles)
      setLoading(false);
    };

    // define another one for searching news
    const searchForArticles = async () => {
      if (searchQuery) {
        setLoading(true);
        // News Api is not available for free in production mode
        // const params = {
        //   q: searchQuery,
        //   pageSize: 20,
        //   apiKey
        // };
        // const response = await axios.get(
        //   'https://newsapi.org/v2/everything',
        //   { params }
        // );

        // Adding Gnews Api for free in production mode
        const response = await axios.get(
          'https://gnews.io/api/v4/search?q=' + searchQuery + '&lang=en&country=' + selectedCountry + '&max=9&apikey=' + apiKey,
        );
        setSearchNews(response.data.articles)
        setLoading(false);
      }
    };

    // call these functions
    getTopHeadlines();
    searchForArticles()

    // lets save category and country selected by user to local storage
    localStorage.setItem('selectedCategory', selectedCategory);
    localStorage.setItem('selectedCountry', selectedCountry);

  }, [selectedCategory, selectedCountry, page, searchQuery])

  const category = selectedCategory.toUpperCase();
  if (selectedCountry === 'us') {
    var country = 'United States'
  } else if (selectedCountry === 'in') {
    var country = 'India'
  } else if (selectedCountry === 'gb') {
    var country = 'United Kingdom'
  } else if (selectedCountry === 'au') {
    var country = 'Australia'
  } else if (selectedCountry === 'ca') {
    var country = 'Canada'
  }

  const newsData = news.filter((item) => item.title !== null && item.image !== null && item.url !== null).map((item) => {
    item.urlToImage = item.urlToImage === null ? "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg" : item.urlToImage;
    item.description = item.description === null ? "No description" : item.description;
    item.content = item.content === null ? "No content" : item.content;
    item.author = item.author === null ? "No author" : item.author;
    item.publishedAt = item.publishedAt === null ? "No published date" : item.publishedAt;
    item.source.name = item.source.name === null ? "No source" : item.source.name;
    return item;
  })

  // const handlePagination = (e, p) => {
  //   console.log(e, p)
  //   setPage(p)
  // }

  return (
    <div>
      <div className='font-medium pt-2 pb-10 md:pt-4 w-full mt-16 font-plusSans text-2xl gap-4'>
        {
          searchQuery.length > 0 ?
            (
              <div className='flex items-center ml-4 lg:ml-4 xl:ml-5 gap-2 lg:gap-'>
                <span className='text-blue-500 flex items-center md:text-3xl'><span>Search results for</span><IoIosArrowForward className='text-2xl mt-2 ml-1' /></span>
                <span>{searchQuery}</span>
              </div>
            )
            :
            (
              <div className='flex items-center ml-3 lg:ml-4 xl:ml-5 gap-4 lg:gap-6'>
                <span className='text-blue-500 md:text-3xl'>{`${category} NEWS`}</span>
                <span className='flex gap-1 items-center'>
                  <CiLocationOn className='text-xl' />
                  <span>{country}</span>
                </span>
              </div>
            )
        }
        {/* news section */}
        {
          searchQuery.length > 0 ? (
            <div>
              {
                searchNews.length > 0 ? (
                  <div className="newsList w-full px-5 mt-5 flex flex-col md:flex-row flex-wrap gap-6 md:mt-7 lg:gap-x-3 lg:gap-y-5 xl:justify-center xl:gap-x-6 xl:gap-y-7 xl:pt-2">
                    {
                      loading ? (
                        <div className='flex items-center justify-center w-full h-full' >
                          <LineWave
                            height="200"
                            width="200"
                            color="purple"
                            ariaLabel="line-wave"
                            visible={true}
                            firstLineColor="#9400D3"
                            middleLineColor="#8A2BE2"
                            lastLineColor="#9932CC"
                          />
                        </div>
                      ) : (
                        searchNews.map((item, index) => {
                          {
                            return (
                              <NewsCard key={index} item={item} />
                            )
                          }
                        })
                      )
                    }
                  </div>
                ) : (
                  <div className='flex items-center justify-center mt-36 w-full h-full' >
                    <h1 className='text-3xl font-bold text-gray-500'>No results found</h1>
                  </div>
                )
              }
            </div>
          )
            : (
              <div className="newsList w-full px-5 mt-5 flex flex-col md:flex-row flex-wrap gap-6 md:mt-7 lg:gap-x-3 lg:gap-y-5 xl:justify-center xl:gap-x-6 xl:gap-y-7 xl:pt-2">
                {
                  loading ? (
                    <div className='flex items-center justify-center w-full h-full' >
                      <LineWave
                        height="200"
                        width="200"
                        color="purple"
                        ariaLabel="line-wave"
                        visible={true}
                        firstLineColor="#9400D3"
                        middleLineColor="#8A2BE2"
                        lastLineColor="#9932CC"
                      />
                    </div>
                  ) : (
                    newsData.map((item, index) => {
                      {
                        return (
                          <NewsCard key={index} item={item} />
                        )
                      }
                    })
                  )
                }
              </div>
            )
        }

        {/* pagination section */}
        {/* Pagination is only available in paid version of Gnews */}
        {/* <div className='w-full flex items-center justify-center mt-8 px-4'>
          {
            loading ? (
              null
            ) : (
              <Pagination count={6} variant="outlined" color="secondary" size='large' onChange={handlePagination} />

            )
          }
        </div> */}
      </div >
    </div >
  )
}

export default News