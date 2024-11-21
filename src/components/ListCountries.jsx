import Country from './Country';

function ListCountries({countryList}) {
    // console.log(countryList);

        const countryItems = countryList.map((countryItem) => {
        return <Country countryData={countryItem} />
    })


  return (
    <section>
        <ul>
            {countryItems}
        </ul>
    </section>
  )
}

export default ListCountries