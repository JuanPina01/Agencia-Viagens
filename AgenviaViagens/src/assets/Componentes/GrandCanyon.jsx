import styles from './GrandCanyon.module.css'
import Componente from './ComponenteProps'
import bandeira from '../imagens/colorado.png'

function GrandCanyon() {
    return (
        <div className={styles.container}>
            <Componente
                lugar=" Grand Canyon"
                texto="O Grand Canyon é um espetáculo por si só. Observar essa obra talhada pela natureza já é a maior recompensa para quem se dispõe a enfrentar longas horas de avião e estrada para chegar lá. O desfiladeiro é resultado de um processo natural que acontece há milhões de anos. Ele só é possível porque, em suas entranhas, passa o Rio Colorado, o responsável pelas erosões que modelaram e esculpiram as rochas.
                A oportunidade de se conectar com essa enorme escultura de rochas é um presente para os amantes da natureza e de esportes de aventura. E para quem gosta de se aprofundar nas origens, o parque é uma verdadeira aula de geologia, antropologia e arqueologia (a lista pode ser bem maior)."
                bandeira={bandeira}
            />
        </div>
    )
}

export default GrandCanyon