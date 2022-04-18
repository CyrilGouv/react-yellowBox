import { useGlobalContext } from '../context'

import '../styles/components/Navbar.css'


const Navbar = () => {

    const { handleMenu, isMenuOpen, openModal } = useGlobalContext()

    return (
        <nav className='Navbar'>
            <div className={`${isMenuOpen ? 'navbar__menu menu--dark' : 'navbar__menu'}`}>
                <button onClick={ handleMenu } className="navbar__menu__hamburger">
                    <span></span>
                    <span>{ isMenuOpen ? 'Close' : 'Menu' }</span>
                </button>
            </div>
            <div className="navbar__logo">
                YellowBox
            </div>
            <div className="navbar__contact">
                <button onClick={ openModal } className="navbar__contact__btn">
                    Contact us
                </button>
            </div>
        </nav>
    )
}

export default Navbar