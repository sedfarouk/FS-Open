import PhonebookService from "../services/PhonebookService"

const Persons = ({filteredPersons, persons, setPersons}) => {
  const handleDelete = (id) => {
    alert(`Delete ${filteredPersons.find(x => x.id===id).name} ?`)

    if (window.confirm)
      PhonebookService
        .remove(id)
        .then(() => setPersons(persons.filter(x => x.id !== id)))
        .catch(alert(`Error deleting contact`))
  }

  return (
    <>
      {filteredPersons.map(x => <p key={x.id}>{x.name} - {x.number} <button onClick={() => handleDelete(x.id)}>delete</button></p>)}
    </>
  )
}

export default Persons