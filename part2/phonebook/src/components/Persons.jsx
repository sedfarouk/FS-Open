import PhonebookService from "../services/PhonebookService"

const Persons = ({filteredPersons, persons, setPersons, setErrorMsg}) => {
  const handleDelete = (id) => {
    alert(`Delete ${filteredPersons.find(x => x.id===id).name} ?`)

    if (window.confirm){
      const existingObject = persons.find(x => x.id === id)
      PhonebookService
        .remove(id)
        .then(() => setPersons(persons.filter(x => x.id !== existingObject.id)))
        .catch(error => {
          setErrorMsg(`Information of ${existingObject.name} has already been removed from server`)
          setTimeout(() => setErrorMsg(null), 5000)
        })
      }
  }

  return (
    <>
      {filteredPersons.map(x => <p key={x.id}>{x.name} - {x.number} <button onClick={() => handleDelete(x.id)}>delete</button></p>)}
    </>
  )
}

export default Persons