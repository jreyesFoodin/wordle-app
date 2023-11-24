import CountdownTimer from './CountdownTimer'
const ModalAlert = ({ solution, isCorrect, turn, wins }) => {
  return (
    <div className='modal'>
      <div className='container'>
        <h1>{isCorrect ? '¡Tú ganas!' : 'No importa<'}</h1>
        {isCorrect
          ? (
            <>
              <p className='solution'>{solution}</p>
              <p>Encontraste la solución en {turn} conjeturas. :)</p>
            </>
            )
          : (
            <>
              <p className='solution'>{solution}</p>
              <p>Mejor suerte la próxima vez:)</p>
            </>
            )}
        <div className='containerWins'>
          <div className='plays'>
            <p>Jugadas</p>
            <span>{turn}</span>
          </div>
          <div className='victories'>
            <p>Victorias</p>
            <span>{wins}</span>
          </div>
        </div>
        <CountdownTimer />
      </div>
    </div>
  )
}

export default ModalAlert
