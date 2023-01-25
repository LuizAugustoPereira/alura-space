import { useState } from 'react'
import Tags from '../Tags/Tags'
import style from './Galeria.module.scss'
import fotos from './fotos.json'
import Cards from './Cards/Cards'

const Galeria = () => {

    const [itens, setItens] = useState(fotos)
    const tags = [...new Set(fotos.map(value => value.tag))]

    const filtrarFotos = tag => {
        const novasFotos = fotos.filter(foto => foto.tag === tag)
        setItens(novasFotos)
    }

    return (
        <section className={style.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens} />
            <Cards itens={itens} style={style} />
        </section>
    )
}

export default Galeria