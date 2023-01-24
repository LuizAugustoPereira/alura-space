import style from './Populares.module.scss'
import fotosPopulares from './fotos-populares.json'

const Populares = () => {

    return (
        <aside className={style.populares}>
            <h2>Populares</h2>
            <ul className={style.populares__imagens}>
                {fotosPopulares.map(foto => <li key={foto.id}><img src={foto.path} alt={foto.alt} /></li>)}
            </ul>
            <button>Ver mais fotos</button>
        </aside>
    )
}

export default Populares