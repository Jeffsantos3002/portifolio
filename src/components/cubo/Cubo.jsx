import { useState } from 'react'

import './cubo.css'
import Modal from '../Modal'

export default function Cubo({faces}){
  
  const [visivel, setVisivel] =  useState(false)
  const [data, setData] = useState(null)
  
  const  abrirModal = (data) => {
    setVisivel(!visivel)
    setData(data)
  }

  // Função callback para atualizar o estado visivel
  const handleCloseModal = (newValue) => {
    setVisivel(newValue);
  };

  return(
    <div className='h-80 w-full'>
      <div className={`cubo `} style={{ animationPlayState: visivel ? 'paused' : 'running' }}>

        {faces.map((face, index)=>(
          <img src={face.src} alt={`face-${index}`} title={face.name} className=' cursor-pointer' onClick={()=>abrirModal(face)} key={index}/>
        ))}
      </div>
      <Modal visivel={visivel} onClose={handleCloseModal} data={data}/>
    </div>

  )
}