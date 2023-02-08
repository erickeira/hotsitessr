import ListagemVeiculos from "../../components/listagemVeiculos";
export default function Loja (props) {
    console.log(props.data)
    return(        
        <div>
            <ListagemVeiculos anuncios={'destaques'}/>
        </div>                    
    )
}