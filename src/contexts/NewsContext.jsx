// NewsContext.js
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

const NewsContext = createContext();

export const useNewsContext = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNewsContext must be used within a NewsContextProvider');
  }
  return context;
};

export const NewsContextProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState(() => {
    const savedCountry = localStorage.getItem("selectedCountry");
    return savedCountry !== null ? savedCountry : 'in';
  });

  const [selectedCategory, setSelectedCategory] = useState(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    return savedCategory !== null ? savedCategory : 'general';
  });

  const [searchQuery, setSearchQuery] = useState('');

  const setSearch = useCallback((search) => {
    setSearchQuery(search);
  }, []);

  const setCountry = useCallback((country) => {
    setSelectedCountry(country);
  }, []);

  const setCategory = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  // Use useEffect to update local storage when the country or category changes
  useEffect(() => {
    localStorage.setItem('selectedCountry', selectedCountry);
  }, [selectedCountry]);

  useEffect(() => {
    localStorage.setItem('selectedCategory', selectedCategory);
  }, [selectedCategory]);

  return (
    <NewsContext.Provider value={{ selectedCountry, setCountry, selectedCategory, setCategory, searchQuery, setSearch }}>
      {children}
    </NewsContext.Provider>
  );
};
