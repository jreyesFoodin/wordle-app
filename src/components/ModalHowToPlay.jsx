import RowCustomer from './RowCustomer'
const ModalHowToPlay = ({ closeModal }) => {
  const cat = ['G', 'A', 'T', 'O', 'S']
  const vocal = ['V', 'O', 'C', 'A', 'L']
  const singing = ['C', 'A', 'N', 'T', 'O']
  return (
    <div className='modal'>
      <div className='container'>
        <h1>Cómo Jugar</h1>
        <p>Adivina la palabra oculta en cinco intentos</p>
        <p>Cada intento debe ser una palabra válida de 5 letras</p>
        <p>Después de cada intento el color de las letras cambia para mostrar qué tan cerca de acertar la palabra.</p>
        <span>Ejemplo</span>
        <p>La letra G está en la palabra y en la posición correcta</p>
        <>
          <RowCustomer letters={cat} value={0} color='green' />
        </>
        <p>La letra C está en la palabra pero en la posición incorrecta</p>
        <>
          <RowCustomer letters={vocal} value={2} color='yellow' />
        </>
        <p>La letra O no está en la palabra</p>
        <>
          <RowCustomer letters={singing} value={4} color='grey' />
        </>
        <p>Puedes haber letras repetidas. Las pistas son independientes para cada palabra</p>
        <p>¡Una palabra nueva cada 5 minutos!</p>
        <button type='button' className='button-active' onClick={closeModal}>¡A Jugar!</button>
      </div>
    </div>
  )
}

export default ModalHowToPlay
