import { useSelector } from 'react-redux'
const Keypad = ({ usedKeys, handleKeyup }) => {
  const { letters } = useSelector((state) => state.confState)
  return (
    <div className='keypad'>
      {letters && letters.map(l => {
        const color = usedKeys[l.key]
        const obj = { key: l.key }
        return (
          <div key={l.key} className={color} onClick={() => handleKeyup(obj)}>{l.key}</div>
        )
      })}
    </div>
  )
}

export default Keypad
