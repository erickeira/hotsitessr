import ListagemVeiculos from "../listagemVeiculos";

export default function Estoque (props) {
    return(        
        <div>
            <ListagemVeiculos anuncios={props.data}/>
        </div>                    
    )
}