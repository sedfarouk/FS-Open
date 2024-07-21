import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchItem, setSearchItem] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons([...response.data]))
  }, [])

  const results = persons.filter((x) => {
      x = x.name.toLowerCase()
      return x.includes(searchItem)
    })

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        searchItem={searchItem}
        setSearchItem={setSearchItem}
      />

      <h3>Add a new</h3>
      < PersonForm
        newName={newName}
        newNumber={newNumber}
        persons={persons}
        setNewName={setNewName}
        setPersons={setPersons}
        setNewNumber={setNewNumber}
      />
      
      <h3>Numbers</h3>
      < Persons results={results} />
      
    </div>
  )
}

export default App