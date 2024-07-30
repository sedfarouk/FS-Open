const Display = ({ country }) => {
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

export default Display
