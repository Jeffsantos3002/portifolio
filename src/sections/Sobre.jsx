
import Perfil from '../assets/foto-Perfil.svg'
import Carrossel from '../components/Carrossel'
import Tecnologias from '../components/Tecnologias';

import slide1 from '../assets/carrossel/slide1.svg';
import slide2 from '../assets/carrossel/slide2.svg';
import slide3 from '../assets/carrossel/slide3.svg';
import slide4 from '../assets/carrossel/slide4.svg';
import slide5 from '../assets/carrossel/slide5.svg';
import slide6 from '../assets/carrossel/slide6.svg';
import slide7 from '../assets/carrossel/slide7.svg';
import slide8 from '../assets/carrossel/slide8.svg';
import slide9 from '../assets/carrossel/slide9.svg';

export default function Sobre(){
  
  const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9]
  return(
    <div className="flex flex-col xl:h-screen items-center justify-center pt-12" id='about'>
      <h1 className="text-4xl">Um pouco sobre mim</h1>
      <span className="bg-azul w-[50px] h-[4px]"></span>

      <div className='px-5  w-full xl:w-[1260px] py-24 flex flex-col items-center justify-between xl:flex-row space-y-10 xl:space-y-0'>
        <div className='flex  relative justify-center items-center'>
          <span className=' bg-lilas w-48 h-48 rounded-full blur-3xl absolute '></span>
          <img src={Perfil} alt='foto-de-perfil' title='foto-de-perfil' className=' z-10'/>
        </div>
        <div className='flex flex-col justify-center items-center xl:items-start space-y-14 xl:w-[676px] md:px-10 xl:px-0'>
          <p className='font-mono text-2xl text-center xl:text-start'>Olá, eu sou um Desenvolvedor Web com paixão por desafios e um olhar futurista para a tecnologia. Transformando linhas de código 
            em experiências inovadoras, trago o espírito do futuro para o presente através do meu trabalho.
          </p>
          <p className=' text-lilas font-mono text-xl'> Confira as engrenagens que movem meu mundo atualmente </p>
          <div className=' flex justify-center items-center'>
            <div className="sm:hidden">
              <Carrossel slidesProps={slides}/>
            </div>
            <div className=' w-full hidden sm:flex space-x-2'>
            {slides.map( (slide, index) => (                
                <Tecnologias key={index}>
                  <img src={slide} alt={`slide${index + 1}`} title={`slide${index + 1}`} />
                </Tecnologias>
              )
            )}
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}