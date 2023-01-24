import open from '../open.png'
import favorito from '../favorito.png'

const Card = ({foto, style}) => {
    return (
        <li key={foto.id} className={style.galeria__card}>
            <img
                className={style.galeria__imagem}
                src={foto.imagem}
                alt={foto.titulo}
            />
            <p className={style.galeria__descricao}>{foto.titulo}</p>
            <div>
                <p>{foto.creditos}</p>
                <span>
                    <img src={favorito} alt="ícone coração de curtir" />
                    <img src={open} alt="ícone de abrir modal" />
                </span>
            </div>
        </li>
    )
}

export default Card