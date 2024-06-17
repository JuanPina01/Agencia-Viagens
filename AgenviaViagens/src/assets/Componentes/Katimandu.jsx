import styles from './Katimandu.module.css'
import Componente from './ComponenteProps'
import bandeira from '../imagens/katimanduBandeira.jfif'

function Katimandu (){
    return(
        <div className={styles.container}>
                  <Componente
                lugar=" Katimandu"
                texto="A história da cidade de Catmandu é inseparável da do vale de Catmandu e remonta a tempos antigos. Explorações arqueológicas indicam que Catmandu e outras duas cidades-irmãs no vale foram as cidades mais antigas e estão ligadas ao período entre 167 a.C. e 1 d.C. Escavações realizadas em Hadigaon e Lubhu, na parte sul do vale, em Catmandu, desenterraram paredes de tijolos e ferramentas da Idade da Pedra."
                bandeira={bandeira}
            />  
    </div>
    )
}

export default Katimandu