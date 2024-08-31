const PersonForm = ({ addName, nameChange, newName, numberChange, newNumber }) => {
  return (
    <form onSubmit={addName}>
        <div>
          Name: <input type='text' required onChange={nameChange} value={newName} />
        </div>
        <div>
          Number: <input type='number'required onChange={numberChange} value={newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm