import CountdownTimer from './CountdownTimer'
const ModalAlert = ({ solution, isCorrect, turn }) => {
  return (
    <div className='modal'>
      {isCorrect && (
        <div className='container'>
          <h1>¡Tú ganas!</h1>
          <p className='solution'>{solution}</p>
          <p>Encontraste la solución en {turn} conjeturas. :)</p>
          <CountdownTimer />
        </div>
      )}
      {!isCorrect && (
        <div className='container'>
          <h1>No importa</h1>
          <p className='solution'>{solution}</p>
          <p>Mejor suerte la próxima vez:)</p>
          <CountdownTimer />
        </div>
      )}
    </div>
  )
}

export default ModalAlert
