import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '1000'
     }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchItem, setSearchItem] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const input = newName
    setNewName('')

    if (persons.find(x => x.name===input))
      alert(`${input} already added to phonebook`)

    else{
      const nameObject = {
        name: input,
        number: newNumber
      }

      setNewNumber('')
      setPersons(persons.concat(nameObject))
    } 
  }

  const results = persons.filter((x) => {
      x = x.name.toLowerCase()
      return x.includes(searchItem)
    })

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
      </div>

      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {results.map(x => <li key={x.name}>{x.name} - {x.number}</li>)}
      </ul>
    </div>
  )
}

export default App