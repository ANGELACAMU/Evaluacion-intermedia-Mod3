import Filters from "./Filters";
import "../scss/App.scss"
import countriesData from "../services/data.json";
import ListCountries from "./ListCountries";
import { useState } from "react";


function App() {

  const [searchValueCountry, setSearchValueCountry] = useState ("");
  const [searchValueContinent, setSearchValueContinent] = useState ("");


  const changeSearchCountry = (value) => {
    // console.log(value);
    setSearchValueCountry(value);
  }

   const changeSearchContinent = (value) => {
    console.log(value);
    setSearchValueContinent(value);
  }


  const filteredCountry = countriesData.filter((countryItem) => {
    // console.log(countryItem);
    return countryItem.name.common.includes(searchValueCountry);

  })
  

   const filteredContinent = countriesData.filter((countryItemCont) => {
    // console.log(countryItem);
    return countryItemCont.name.common.includes(searchValueContinent);

  })
console.log(filteredContinent);

  return (
    
    <>
        <header>
          <h1>Country Info App</h1>
        </header>
        <main>
          <Filters onChangeFilter={changeSearchCountry} onChangeFilterContinent={changeSearchContinent}/>
          <ListCountries countryList={countriesData} />
          
        </main>
    </>
  )

}

export default App
