import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PhonebookService from './services/PhonebookService'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchItem, setSearchItem] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([]) 

  useEffect(() => {
      PhonebookService
        .getAll()
        .then(initialContacts => setPersons(initialContacts))
        .catch(error => alert("An error occured while saving to server..."))
    }, [])

  useEffect(() => {
    const results = persons.filter((x) => {
      x = x.name.toLowerCase()
      return x.includes(searchItem)
    })
    setFilteredPersons(results)
  }, [searchItem, persons])

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
      < Persons filteredPersons={filteredPersons} persons={persons} setPersons={setPersons} />
      
    </div>
  )
}

export default App