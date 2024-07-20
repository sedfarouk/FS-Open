import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const input = newName
    setNewName('')

    if (persons.find(x => x.name===input))
      alert(`${input} already added to phonebook`)

    else{
      const nameObject = {name: newName}
      setPersons(persons.concat(nameObject))
    } 
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(x => <li key={x.name}>{x.name}</li>)}
      </ul>
    </div>
  )
}

export default App