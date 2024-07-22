const Countries = ({ countries }) => {
    if (countries.length > 11)
        return <p>Too many matches, specify another filter</p>

    else if (countries.length===1){
        const country = countries[0]
        console.log(country.languages)
        return (
            <>
                <h3>{country.name.common}</h3>

                <p>capital {country.capital}</p>
                <p>area {country.area}</p>
                <h4>languages:</h4>

                <ul>{Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}</ul>
                <img src={country.flags.png} alt="" />
            </>
        )
    }

    return countries.map(x => <p key={x.name.common}>{x.name.common}</p>)
}

export default Countries