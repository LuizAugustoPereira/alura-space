import style from './Menu.module.scss'
import icones from './icones.json'
import Icone from './Icones/Icone'

const Menu = () => {

    return (

        <nav className={style.menu}>
            <ul className={style.menu__lista}>
                {icones.map(icone => <Icone key={icone.id} icone={icone} style={style} />)}
            </ul>
        </nav>
    )
}

export default Menu