
import Card from './Card/Card'

const Cards = ({style, itens}) => {

    return (
        <ul className={style.galeria__cards}>
            {itens.map(foto => <Card key={foto.id} style={style} foto={foto} />)}
        </ul>
    )
}

export default Cards