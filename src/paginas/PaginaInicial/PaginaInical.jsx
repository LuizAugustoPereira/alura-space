import Cabecalho from "../../componentes/Cabecalho/Cabecalho"
import Menu from "../../componentes/Menu/Menu"
import banner from './banner.png'
import style from './PaginaInicial.module.scss'

const PaginaInicial = () => {
    
    return (
        <>
            <Cabecalho />
            <main>
                <section className={style.principal}>
                    <Menu />
                    <div className={style.principal__imagem}>
                        <h1>A galeria mais completa do espaço</h1>
                        <img src={banner} alt="A imagem da terra vista do espaço" />
                    </div>
                </section>
            </main>
        </>
    )
}

export default PaginaInicial