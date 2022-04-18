import '../styles/components/Navbar.css'

const Navbar = () => {
  return (
    <nav className='Navbar'>
        <div className="navbar__menu">
            <button className="navbar__menu__hamburger">
                <span></span>
                <span>Menu</span>
            </button>
        </div>
        <div className="navbar__logo">
            YellowBox
        </div>
        <div className="navbar__contact">
            <button className="navbar__contact__btn">
                Contact us
            </button>
        </div>
    </nav>
  )
}

export default Navbar