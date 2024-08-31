const Filter = ({ filter, filtered }) => {
  return (
    <p>Filter shown with <input type='text' value={filter} onChange={filtered} /></p>
  )
}

export default Filter