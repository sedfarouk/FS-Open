const PersonForm = ({newName, persons, newNumber, setNewName, setNewNumber, setPersons}) => {
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