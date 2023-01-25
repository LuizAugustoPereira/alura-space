import style from './Tags.module.scss'
import fotos from '../Galeria/fotos.json'

const Tags = ({ tags, filtrarFotos, setItens }) => {

    return (
        <div className={style.tags}>
            <p>Filtre por tags:</p>
            <ul className={style.tags__lista}> 
                {tags.map(tag => <li key={tag} onClick={() => filtrarFotos(tag)}>{tag}</li>)}
                <li onClick={() => setItens(fotos)}>Todas</li>
            </ul>
        </div>
    )
}

export default Tags