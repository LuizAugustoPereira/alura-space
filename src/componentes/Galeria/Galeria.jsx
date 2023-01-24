import Tags from '../Tags/Tags'
import style from './Galeria.module.scss'
import fotos from './fotos.json'
import Cards from './Cards/Cards'

const Galeria = () => {
    return (
        <section className={style.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags />
            <Cards fotos={fotos} style={style} />
        </section>
    )
}

export default Galeria