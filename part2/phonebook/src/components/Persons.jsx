const Persons = ({results}) => {
    return (
        <ul>
            {results.map(x => <li key={x.name}>{x.name} - {x.number}</li>)}
        </ul>
    )
}

export default Persons