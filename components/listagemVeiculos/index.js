
import React, { useEffect, useState } from 'react';
import CardAnuncio from "../cardAnuncio";
import { lojaId, urlRequisicao } from "../../utils";
import styles from './listagemVeiculos.module.scss'

export default function ListagemVeiculos({anuncios}) { 
  const [listaAnuncios, setListaAnuncios] = useState()
  const [isLoading, setIsLoading] = useState(true)
  // console.log(anuncios)
  useEffect(() => {
    if(!listaAnuncios) getAnuncios()
  },[])

  const getAnuncios = async () => {
    let body = JSON.stringify({
      "acoes": 
        [
          {
            "acao": anuncios,
            "params":{"resultados": 20,"marca" : "ASA"}
          },     
        ],
      "loja": lojaId
    }) 

    const response = await fetch(urlRequisicao,{
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body
    })
    
    let data = await response.json()
    setListaAnuncios(data[anuncios])
    setIsLoading(false)
  }

  if(isLoading) return null
  return(    
    listaAnuncios && listaAnuncios.length ? 
    <div className={styles.listagemAnuncios}>
        {
        listaAnuncios.map((anuncio, index) => {
            return(
            <CardAnuncio key={index} anuncio={anuncio}/>
            )
        })
        }   
    </div> 
    : <div className={styles.listagemSemAnuncio}>Nenhum anuncio encontrado!</div>
  ) 
}



