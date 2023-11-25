import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import ReactCountryFlag from "react-country-flag"
import { countryData } from '../constants';
import { useNewsContext } from '../contexts/NewsContext';

const CountrySelector = () => {
  
  const { selectedCountry, setCountry } = useNewsContext();

  const handleCategoryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div className='w-48'>
      <FormControl fullWidth>
        <InputLabel id="" style={{ color: 'black' }}>Country</InputLabel>
        <Select
          labelId="country-select-label"
          id="country-select"
          value={selectedCountry}
          label="Country"
          onChange={handleCategoryChange}
        >
          {
            countryData.map((country) => (
              <MenuItem key={country.id} value={country.value}>
                <div className='font-plusSans flex items-center gap-1'>
                  {country.name}
                  <ReactCountryFlag countryCode={country.value} svg style={{ marginLeft: "4px" }} />
                </div>
              </MenuItem>))
          }
        </Select>
      </FormControl>
    </div>
  )
}

export default CountrySelector