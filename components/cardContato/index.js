import {RiPhoneFill, RiWhatsappLine} from 'react-icons/ri'
import {MdLocationOn} from 'react-icons/md'
import {FaRegCalendarTimes} from 'react-icons/fa'
import styles from './cardContato.module.scss'
import Modal from 'react-modal';
import { useState } from 'react'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
};

export default function CardContato({dadosloja}) {  

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }  

  return(
    <>
      <nav className={styles.dadosLoja}>{  
          dadosloja.map((item, index) => {
            return(          
              <div key={index} className={styles.envolveDadosLoja}>
                <p className={styles.nomeLoja}>{item.loj_nome}</p>
                <p className={styles.enderecoLoja}>{item.loj_endereco}</p>
                <div>
                  <span className={styles.telefonesLoja}>{item.loj_telefone_app.map((telefone, index) => {
                      return(
                        <a className={styles.telefones} key={index} href={`http://api.whatsapp.com/send?1=pt_BR&phone=55${telefone.telefone.replace(/[\(\)\.\s-]+/g,'')}`} target="_blank">
                          {telefone.aplicativo == 1 ? <RiWhatsappLine style={{ color: 'rgb(24, 201, 24)', fontSize: '16', marginBottom: '-3' }}/> 
                          :
                          <RiPhoneFill style={{ marginBottom: '-3', fontSize: '15' }}/>}
                          {telefone.telefone} {index == item.loj_telefone_app.length-1 ? "" : "|" }
                        </a>
                      )}
                    )}
                  </span>                
                </div>
                <div className={styles.envolveMapaHorarios}>
                  {dadosloja[0].loj_horarios_atendimento ? <button onClick={openModal} className={`${styles.botaoHorariosAtendimento}`}><FaRegCalendarTimes style={{marginBottom: '-1'}}/> Horários de atendimento</button> : null }                        
                  <span className={styles.mapaLoja}><MdLocationOn style={{ marginBottom: '-2' }}/>Mapa</span>
                </div>              
              </div>
            )
          })
        }
      </nav>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >               
        <div className={styles.listaHorarios}>
          <div className={styles.tituloHorarios}>HORÁRIOS DE ATENDIMENTO.</div>
          <div>
            { 
              dadosloja[0].loj_horarios_atendimento 
              ? 
                Object.entries(dadosloja[0].loj_horarios_atendimento).map(([nomeDia, horarios], index) => {                  
                    return(
                      <div key={index} className={styles.envolveHorarios}>
                        <div className={styles.horarios}>
                          <span className={styles.nomeDia}>{nomeDia.replace('hor', '').toUpperCase()}</span>
                          <div className={styles.envolveHoras}>                                                     
                            {horarios[0] ?  <span className={styles.horas}>{horarios[0]} - {horarios[1]}</span> : null}
                            {horarios[2] ?  <span className={styles.horas}>{horarios[2]} - {horarios[3]}</span> : null}
                          </div>
                        </div>
                      </div>
                    )
                })
              : null
            }
          </div>
        </div>   
        <span onClick={closeModal} className={styles.botaoFecharHorarios}>OK</span>
      </Modal>
  </>
  )
    
 

 
  
}
