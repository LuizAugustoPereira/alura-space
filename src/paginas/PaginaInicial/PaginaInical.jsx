import Cabecalho from "componentes/Cabecalho/Cabecalho"
import Galeria from "componentes/Galeria/Galeria"
import Menu from "componentes/Menu/Menu"
import Populares from "componentes/Populares/Populares"
import Rodape from "componentes/Rodape/Rodape"

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
                <div className={style.galeria}>
                    <Galeria />
                    <Populares />
                </div>
            </main>
            <Rodape />
        </>
    )
}

export default PaginaInicial