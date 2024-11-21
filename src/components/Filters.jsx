
function Filters({onChangeFilter, onChangeFilterContinent}) {

    const handleChangeCountry = (ev) =>{
        // console.log(ev.target.value);
        onChangeFilter(ev.target.value);
    }

    const handleChangeContinent = (ev) =>{
        // console.log(ev.target.value);
        onChangeFilterContinent(ev.target.value);
    }

  return (
    <form>
        <label htmlFor="search-country">By Country:</label>
        <input id="search-country" type="text" onChange={handleChangeCountry}/>

        <label htmlFor="search-continent">By Continent:</label>
        <input id="search-continent"  type="text" onChange={handleChangeContinent}/>
    </form>
  )
}

export default Filters