import { useState } from 'react'

import '../../animations.css'
import Modal from '../Modal'
import elipse from '../../assets/cubo/ellipse.svg'

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
      <div className="cubo"  style={{ animationPlayState: visivel ? 'paused' : 'running' }}>

        {faces.map((face, index)=>(
          <img src={face.src} alt={`face-${index}`} title={face.name} className=' cursor-pointer border-2  border-azul' onClick={()=>abrirModal(face)} key={index}/>
        ))}
      </div>
      <Modal visivel={visivel} onClose={handleCloseModal} data={data}/>
      <div className="flex items-center justify-center mt-28">
        <img src={elipse} className='sombra w-28 blur-md'/>
      </div>
    </div>

  )
}