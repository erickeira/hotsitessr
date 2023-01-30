import ListagemVeiculos from "../listagemVeiculos";

export default function Loja (props) {
    return(        
        <div>
            <ListagemVeiculos anuncios={props.data}/>
        </div>                    
    )
}