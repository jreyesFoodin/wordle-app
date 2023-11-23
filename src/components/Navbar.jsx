import FaIconLeft from './icons/FaIconLeft'
const Navbar = ({ title, handledModal }) => {
  return (
    <div className='navbar'>
      <div className='left'>
        <FaIconLeft handledModal={handledModal} />
      </div>
      <div className='titleNav'>
        <p>{title}</p>
      </div>
      <div className='right' />
    </div>
  )
}

export default Navbar
