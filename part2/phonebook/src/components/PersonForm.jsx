import PhonebookService from "../services/PhonebookService"

const PersonForm = ({newName, persons, newNumber, setNewName, setNewNumber, setPersons, setSuccessMsg}) => {
  const addName = (event) => {
    event.preventDefault()

    const name = newName
    setNewName('')

    const existingObject = persons.find(x => x.name===name)

    if (existingObject){
      alert(`${name} is already added to phonebook, replace the old number with a new one?`)

      if (window.confirm){
        const updatedObject = {
          ...existingObject,
          number: newNumber
        }
        PhonebookService
          .update(updatedObject.id, updatedObject)
          .then(() => setPersons(persons.map(x => x.id!==updatedObject.id ? x : updatedObject)))
      }
    }

    else {
      PhonebookService
      .create({
        name: name,
        number: newNumber
      })
      .then((newContact) => {
        setNewNumber('')
        setPersons(persons.concat(newContact))
        setSuccessMsg(`Added ${name}`)

        setTimeout(() => {
          setSuccessMsg(null)
        }, 5000)
      })
    }
  }
    
  return (
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
  )
}

export default PersonForm