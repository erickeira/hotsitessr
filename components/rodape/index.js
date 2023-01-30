import styles from "./rodape.module.scss"

const Rodape = () => {   

    return(
        <div className={styles.container}>

            <p>© 2022 <a href={`https://www.shopcar.com.br/`} target="_blank">SHOPCAR</a> - Sua Referência em Veículos - Classificados de Carros. Todos os direitos reservados.</p>
            

        </div>
    )
}

export default Rodape;