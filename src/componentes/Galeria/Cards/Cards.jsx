
import Card from './Card/Card'

const Cards = ({style, fotos}) => {

    return (
        <ul className={style.galeria__cards}>
            {fotos.map(foto => <Card key={foto.id} style={style} foto={foto} />)}
        </ul>
    )
}

export default Cards