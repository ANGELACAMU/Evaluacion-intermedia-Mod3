

function Country({countryData}) {

 return (
   <li>
        <h2>{countryData.name.common}</h2>
        <h3>{countryData.name.official}</h3>
        <h3>{countryData.flag}</h3>
    </li>
)
}

export default Country