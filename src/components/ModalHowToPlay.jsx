const ModalHowToPlay = ({ solution, isCorrect, turn }) => {
  return (
    <div className='modal'>
      {isCorrect && (
        <div>
          <h1>¡Tú ganas!</h1>
          <p className='solution'>{solution}</p>
          <p>Encontraste la solución en {turn} conjeturas. :)</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>No importa</h1>
          <p className='solution'>{solution}</p>
          <p>Mejor suerte la próxima vez:)</p>
        </div>
      )}
    </div>
  )
}

export default ModalHowToPlay
