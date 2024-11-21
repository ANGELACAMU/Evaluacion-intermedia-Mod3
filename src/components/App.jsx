import "../scss/App.scss"
import countriesData from "../services/data.json";
import ListCountries from "./ListCountries";
import { useState } from "react";

function App() {

  const [searchValue, setSearchValue] = useState ("");

  const changeSearch = (value) => {
    console.log(value);
    setSearchValue(value);
  }

  console.log(countriesData);

  return (
    
    <>
        <header>
          <h1>Country Info App</h1>
        </header>
        <main>
          <ListCountries countryList={countriesData} />
        </main>
    </>
  )

}

export default App
