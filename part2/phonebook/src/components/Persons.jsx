const Persons = ({results}) => {
    return (
        <>
            {results.map(x => <p key={x.name}>{x.name} - {x.number}</p>)}
        </>
    )
}

export default Persons