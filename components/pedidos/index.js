import ListagemVeiculos from "../listagemVeiculos";

export default function Pedidos (props) {
    return(        
        <div>
            <ListagemVeiculos anuncios={props.data}/>
        </div>                    
    )
}