import styles from './Aruba.module.css'
import Componente from './ComponenteProps'
import bandeira from '../imagens/bandeiraAruba.jfif'

function Aruba() {
    return (
        <div className={styles.container}>
            <Componente
                lugar=" Aruba"
                texto="Aruba, pequena ilha do Caribe holandês ao largo da costa da Venezuela, tem clima seco, praias ensolaradas e ondas suaves. Ventos constantes produzem uma brisa fresca e inclinam as árvores divi-divi para o sudoeste. A influência europeia aparece na arquitetura, caracterizada pelas empenas holandesas pintadas em tons pastel tropicais. Isso também fica evidente na convivência do idioma local, o papiamento, com o inglês, o holandês e o espanhol."
                bandeira={bandeira}
            />
        </div>
    )
}

export default Aruba