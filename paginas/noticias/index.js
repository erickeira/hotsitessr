
import styles from './noticias.module.scss'
import Image from "next/image"
import { formatadorValor, loaderImagens } from '../../utils/index';
import { RiAddCircleFill } from 'react-icons/ri'

const Noticias = ({noticias}) => {
    return(
        <div className={styles.container}>
            <div className={styles.envolveNoticias}>
                <h2 className={styles.titulo}>Últimas notícias</h2>
                <div className={styles.agrupaNoticias}>
                    <div className={styles.noticiaComImg}>
                        <a>
                            <span className={styles.leiaMais}><RiAddCircleFill style={{fontSize: "15"}}/> Leia mais.</span>
                            <div className={styles.envolveImagem}>
                              <Image
                                className={styles.teste}
                                loader={loaderImagens}
                                src= {`${noticias[0].art_foto1}`}
                                fill      
                                sizes="(max-width: 100px) 100vw"
                                alt={noticias[0].art_titulo}                        
                            />
                            </div>
                            <p>{`${noticias[0].art_titulo}`}</p>
                        </a>                       
                    </div>

                    <div className={styles.listaNoticias}>
                        {
                        noticias.map((noticia, index) => {
                            if(index == 0) return null
                            return(
                            <a key={index}>{noticia.art_titulo}</a>
                            )
                        })
                        }
                    </div>                                  
                </div>
                <a className={styles.btMaisNoticias}><RiAddCircleFill style={{fontSize: "15"}}/> Mais notícias.</a> 
            </div>            
        </div>
    )
}





export default Noticias;



