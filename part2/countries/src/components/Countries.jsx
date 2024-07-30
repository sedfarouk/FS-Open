import { useState } from "react"
import Display from "./Display"

const Countries = ({ countries }) => { 
    const [selected, setSelected] = useState(null)

    if (countries.length > 11)
        return <p>Too many matches, specify another filter</p>

    else if (countries.length===1)
        return < Display country={countries[0]} />

    return (
        <>
            {countries.map(x => 
                <div key={x.name.common}>
                    <p>
                        {x.name.common} 
                        <button onClick={() => setSelected(x)}>show</button>
                    </p>
                    {selected===x && < Display country={x} /> }
                </div>
            )}
        </>
    )
}

export default Countries