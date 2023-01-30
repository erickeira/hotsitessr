
import React, { useEffect, useState } from 'react';
import CardAnuncio from "../cardAnuncio";
import { lojaId, urlRequisicao } from "../../utils";
import styles from './listagemVeiculos.module.scss'

export default function ListagemVeiculos({anuncios}) {  
  return(    
    
    anuncios && anuncios.length ? 
    <div className={styles.listagemAnuncios}>
        {
        anuncios.map((anuncio, index) => {
            return(
            <CardAnuncio key={index} anuncio={anuncio}/>
            )
        })
        }   
    </div> 
    : <div className={styles.listagemSemAnuncio}>Nenhum anuncio encontrado!</div>
  ) 
}



