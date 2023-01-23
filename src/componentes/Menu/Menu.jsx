import './Menu.scss'
import home from '../../assets/icones/home-ativo.png'
import maisVistas from '../../assets/icones/mais-vistas-inativo.png'
import maisCurtidas from '../../assets/icones/mais-curtidas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpreenda from '../../assets/icones/surpreenda-me-inativo.png'

const Menu = () => {

    return (

        <nav className='menu'>
            <ul className='menu-lista'>
                <li className='menu-item'>
                    <img src={home} alt="Ícone da Home" />
                    <a href="/" className='link-ativo'>Início</a>
                </li>
                <li className='menu-item'>
                    <img src={maisVistas} alt="Ícone das Mais vistas" />
                    <a href="/">Mais vistas</a>
                </li>
                <li className='menu-item'>
                    <img src={maisCurtidas} alt="Ícone das mais curtidas" />
                    <a href="/">Mais curtidas</a>
                </li>
                <li className='menu-item'>
                    <img src={novas} alt="Ícone das novas imagens" />
                    <a href="/">Novas</a>
                </li>
                <li className='menu-item'>
                    <img src={surpreenda} alt="Ícones Surpreenda-me" />
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu