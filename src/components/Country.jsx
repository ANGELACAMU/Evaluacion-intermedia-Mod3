import "../scss/layout/Country.scss";

function Country({countryData}) {
    // console.log(countryData);
 return (
   <li>
        <h2>{countryData.name.common}</h2>
        <h3>{countryData.name.official}</h3>
        <h3 className="flag" >{countryData.flag}</h3>
        <h4>{countryData.continents}</h4>
    </li>
)
}

export default Country