
import React, { useEffect, useState } from 'react'
import CardAnuncio from "../../components/cardAnuncio";
import { lojaId, urlRequisicao, fetcher } from "../../utils";
import ListagemVeiculos from '../../components/listagemVeiculos';
import {BiSearch} from 'react-icons/bi'
import Select from 'react-select'
import Noticias from '../../components/noticias';
import CardContato from '../../components/cardContato';
import Inicio from '../../components/inicio';
import Contato from '../../components/contato'
import Estoque from '../../components/estoque'
import Loja from '../../components/loja'
import Pedidos from '../../components/pedidos'
import Menu from '../../components/menuTopo';
import { useRouter } from 'next/router';

export default function  Home({data}) { 
  const [pageSelecionada, setPageSelecionada] = useState(data.rota || '')

  const pages = {
    loja: <Loja data={data.destaques}/>,
    estoque: <Estoque data={data.destaques}/>,
    pedidos: <Pedidos data={data.destaques}/>,
    contato: <Contato data={data.destaques}/>
  }

  function mudarPage(e){
    setPageSelecionada(e)
  }

  return (
    <>
      <Menu callbackchange={e => mudarPage(e)} rota={pageSelecionada}/>
      {pages[pageSelecionada] || <Inicio data={data}/>}
    </>
  )
   
}
export async function getServerSideProps({req, res}){
  let rota = req.url.split('?')[0].replace('/', '')
  try {
    let body = JSON.stringify({
      "acoes": 
        [
          {
            "acao": "dadosloja"
          },
          {
            "acao": "destaques",
            "params":{"resultados": 8 }
          },
          {
            "acao": "ultimasnoticias",
            "params":{"resultados": 7}
          },
          {
            "acao": "marcas",
          }         
        ],
      "loja": lojaId
    }) 

    const response = await fetch(urlRequisicao,{
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body
    })
    
    let data = await response.json()
    data['rota'] = rota
    return {    
      props: {data }
    }

  } catch(e) {
    return {
      notFound: true
    }
  } 
  
}

