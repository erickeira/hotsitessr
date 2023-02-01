import {FaInstagram, FaFacebookSquare} from 'react-icons/fa'
import {defaultColors, loaderImagensLocal} from '../../utils'
import logo from '../../public/img/logo.jpg'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./menuTopo.module.scss"
import { useEffect, useState } from 'react'
import CardContato from '../cardContato'
import Head from 'next/head'


export default function Menu(props) { 
  const router = useRouter()
  const activeRoute = router.pathname
  const {callbackchange, rota} = props
  const [menuAberto, setMenuAberto] = useState(false)
  const [indexBg, setIndexBg] = useState(0)
    
  const handleClick = (evento, rota) => {
    // evento.preventDefault()
    callbackchange(rota)
    router.push({
      pathname: `/${rota}`,
      query: { query: 'teste' }
    }, 
    `/${rota}`, { shallow: true }
    )
  }
  const titulos = {
    loja: 'Loja',
    estoque: 'Estoque',
    pedidos: 'Banco de Pedidos',
    contato: 'Contato'
  }  

  const stylesPadrao = {
    backgroundColor: defaultColors.primary
  }
  let slides = [styles.bg01, styles.bg02, styles.bg03]
  function mudarSlide() {
    if(indexBg == 2) return setIndexBg(0)
    setIndexBg(indexBg + 1)

  }  
  useEffect(() => {
    mudarSlide()
  }, [])    
  useEffect(() => {
    setTimeout(() => {
      mudarSlide()
    }, 8000);
  }, [indexBg])    
    return (
      
          <>
          <Head>
            <title>{titulos[rota] || 'S.I Motors'}</title>
            <meta name="description" content="Concessionária" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={`${styles.container} ${!titulos[rota]|| rota == '' ? slides[indexBg] : ''}`}>
            
            <div className={styles.envolveMenu}>

              <nav className={`backgroundPadrao ${styles.conteudoMenuTelaGrande}`}>

                <div className={styles.logo} onClick={(evento) => handleClick(evento, "")} >                  
                <Image width='190' height='100' alt="nomeSite" priority unoptimized src="/img/logo.jpg" loader={loaderImagensLocal}/>  
                </div>
                <div className={styles.links}>
                  <div className={styles.linksMenu} onClick={(evento) => handleClick(evento, "")}  style={{color: !titulos[rota] || rota == '' ? defaultColors.primary : defaultColors.secundary}}>
                    PAGÍNA INICIAL
                  </div>
                  <div className={styles.linksMenu} onClick={(evento) => handleClick(evento, "loja")} style={{color: rota == 'loja' ? defaultColors.primary : defaultColors.secundary}}>
                    A LOJA
                  </div>
                  <div className={styles.linksMenu} onClick={(evento) => handleClick(evento, "estoque")} style={{color: rota == 'estoque' ? defaultColors.primary : defaultColors.secundary}} >
                    NOSSO ESTOQUE
                  </div>
                  <div className={styles.linksMenu} onClick={(evento) => handleClick(evento, "pedidos")} style={{color: rota == 'pedidos' ? defaultColors.primary : defaultColors.secundary}}>
                    BANCO DE PEDIDOS
                  </div>
                  <div className={styles.linksMenu} onClick={(evento) => handleClick(evento, "contato")} style={{color: rota == 'contato' ? defaultColors.primary : defaultColors.secundary}}>
                    CONTATO
                  </div>
                  <a href=''>
                    <FaInstagram className={styles.iconeInstagram}/>
                  </a>
                  <a href=''>
                    <FaFacebookSquare className={styles.iconeFacebook}/>
                  </a>
                </div>
              </nav>

              <div className={styles.conteudoMenuTelaPequena}>
                <a className={styles.logo} href={`/`}>
                  <Image width='150' height='75' alt="nomeSite" src={logo}/>
                </a>
                <div/>
                <nav className={styles.MenuMobile}>
                  <label onClick={() => setMenuAberto(!menuAberto)} className={`${styles.botaoAbrirMenuMobile} bt_menuMobile `} style={{textAlign: "end", paddingRight: "15"}}>&#9776;</label>
                    <ul className={menuAberto ? styles.containerItensMenuMobileAberto : styles.containerItensMenuMobileFechado}>
                      <li>
                        <a className={styles.linksMenu} onClick={(evento) => handleClick(evento, "/")}  style={{color: activeRoute == '/' ? defaultColors.primary : defaultColors.secundary}}>
                          PAGÍNA INICIAL
                        </a>
                      </li>
                      <li>
                        <a className={styles.linksMenu} onClick={(evento) => handleClick(evento, "/loja")} style={{color: activeRoute == '/loja' ? defaultColors.primary : defaultColors.secundary}}>
                            A LOJA
                        </a>
                      </li>
                      <li>
                        <a className={styles.linksMenu} onClick={(evento) => handleClick(evento, "/estoque")} style={{color: activeRoute == '/estoque' ? defaultColors.primary : defaultColors.secundary}} >
                          NOSSO ESTOQUE
                        </a>  
                      </li>
                      <li>
                        <a className={styles.linksMenu} onClick={(evento) => handleClick(evento, "/pedidos")} style={{color: activeRoute == '/pedidos' ? defaultColors.primary : defaultColors.secundary}}>
                          BANCO DE PEDIDOS
                        </a>  
                      </li>
                      <li>
                        <a className={styles.linksMenu} onClick={(evento) => handleClick(evento, "/contato")} style={{color: activeRoute == '/contato' ? defaultColors.primary : defaultColors.secundary}}>
                          CONTATO
                        </a>  
                      </li>

                      <li style={styles.redesSociais}><a><FaInstagram className={styles.iconeInstagram}/></a> <a><FaFacebookSquare className={styles.iconeFacebook}/></a></li>
                      
                    </ul>
                </nav>
                
              </div>              
              
            </div>          
            
            

          </div>

          


          
          </>  
    )
  }