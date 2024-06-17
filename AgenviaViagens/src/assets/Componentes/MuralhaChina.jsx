import styles from './MuralhaChina.module.css'
import Componente from './ComponenteProps'
import bandeira from '../imagens/china.png'

function Muralhas_China() {
    return (
        <div className={styles.container}>
            <Componente
                lugar=" Muralhas da China"
                texto="Grande Muralha da China é uma série de fortificações feitas de pedra, tijolo, terra compactada, madeira e outros materiais, geralmente construída ao longo de uma linha leste-oeste através das fronteiras históricas do norte da China para proteger os Estados e impérios chineses contra as invasões dos vários "
                bandeira={bandeira}
            />        
        </div>
    )
}

export default Muralhas_China