const Row = ({ guess, currentGuess }) => {
  if (guess) {
    return (
      <div className='row past'>
        {guess.map((l, i) => (
          <div key={i} className={l.color}>{l.key}</div>
        ))}
      </div>
    )
  }
  if (currentGuess) {
    return (
      <div className='row current'>
        {currentGuess.split('').map((letter, i) => (
          <div key={i} className='filled'>{letter}</div>
        ))}
        {[...Array(5 - currentGuess.length)].map((_, i) => (
          <div key={i} />
        ))}
      </div>
    )
  }

  return (
    <div className='row'>
      {[...Array(5)].map((_, i) => (
        <div key={i} />
      ))}
    </div>
  )
}

export default Row
