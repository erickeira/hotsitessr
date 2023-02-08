import ListagemVeiculos from "../../components/listagemVeiculos";
export default function Loja ({dados}) {
    return(
        <div>
          {dados}
        </div>
      ) 
    return(        
        <div>
            <ListagemVeiculos anuncios={'destaques'}/>
        </div>                    
    )
}

export const config = {
    runtime: 'experimental-edge',
}

export async function getServerSideProps(context) {
    let dados = "server side"
    return {
      props: { dados }, // will be passed to the page component as props
    }
  }
  