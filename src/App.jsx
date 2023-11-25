import React from 'react'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
// import NewsCard from './components/NewsCard'
import News from './components/News'
import { NewsContextProvider } from './contexts/NewsContext'

const App = () => {
  return (
    <NewsContextProvider>
      <Navbar/>
      <Categories />
      <News/>
    </NewsContextProvider>
  )
}

export default App