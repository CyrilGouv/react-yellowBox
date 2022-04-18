import { links } from '../data'

import '../styles/components/Menu.css'


const Menu = () => {
  return (
    <ul className='Menu'>
        { links.map(link => {

            const { id, url, text } = link
            return (
                <li key={ id }>
                    <a href={ url } className="menu__link">
                        <span className="menu__link__num">{ id < 10 ? '0' + id : id }</span>
                        <span className="menu__link__text">{ text }</span>
                    </a>
                </li>
            )
        }) }
    </ul>
  )
}

export default Menu