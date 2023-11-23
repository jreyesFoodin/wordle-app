const RowCustomer = ({ letters, value, color }) => {
  return (
    <div className='row'>
      {letters.map((letra, index) => (
        <div key={index} className={`filled ${index === value ? color : ''}`}>
          {letra}
        </div>
      ))}
    </div>
  )
}

export default RowCustomer
