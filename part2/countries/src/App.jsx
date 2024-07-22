import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [searchTerm, setSearchTerm] = useState(null)
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => setCountries(response.data.filter(x => x.name.common.toLowerCase().includes(searchTerm))))
  }, [searchTerm])

  const handleChange = (event) => setSearchTerm(event.target.value)

  return (
    <div>
      find countries <input type="text" onChange={handleChange}/>
      < Countries countries={countries} />
    </div>
  )
}

export default App