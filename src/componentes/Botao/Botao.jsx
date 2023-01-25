import style from './Botao.module.scss'

const Botao = ({ children }) => {
    return  (
        <button className={style.botao}>{children}</button>
    )
}

export default Botao