import { useSelector } from 'react-redux'
const Keypad = ({ usedKeys }) => {
  const { letters } = useSelector((state) => state.confState)
  return (
    <div className='keypad'>
      {letters && letters.map(l => {
        const color = usedKeys[l.key]
        return (
          <div key={l.key} className={color}>{l.key}</div>
        )
      })}
    </div>
  )
}

export default Keypad
