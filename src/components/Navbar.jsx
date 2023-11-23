import FaIconLeft from './icons/FaIconLeft'
const Navbar = ({ title }) => {
  return (
    <div className='navbar'>
      <div className='left'>
        <FaIconLeft />
      </div>
      <div className='titleNav'>
        <p>{title}</p>
      </div>
      <div className='right' />
    </div>
  )
}

export default Navbar
