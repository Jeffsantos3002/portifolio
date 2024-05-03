import { useState, useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";

import Tecnologias from './Tecnologias';


function Carousel({slidesProps}) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { ref, inView } = useInView({ // utiliza o ntersection-observer para utilizar o handleNextSlide apenas quando o componente fica visível
    threshold: 0,
  });

  useEffect(() => {
    const carousel = carouselRef.current;
    const slides = carousel.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    const handleNextSlide = () => {
      if (inView) {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % totalSlides);
      }
    };
    const interval = setInterval(handleNextSlide, 3000); // Troca de slide a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, [inView]); // Re-executar o efeito quando inView mudar

  useEffect(() => {
    const carousel = carouselRef.current;
    const activeSlide = carousel.querySelector('.carousel-item.active');
    if (activeSlide) {
      activeSlide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
    console.log(currentIndex);
  }, [currentIndex]); // Re-executar o efeito quando currentIndex mudar

  return (
    <div ref={carouselRef} className='w-full flex justify-center items-center'>
      <div ref={ref} className="carousel w-[286px] xs:w-[360px] h-20 scroll-auto space-x-2">
        {slidesProps.map(
          (slide, index) => (
            
            <div key={index} className={`carousel-item ${index === currentIndex ? 'active' : ''}`}>
              <Tecnologias>
                <img src={slide} alt={`slide${index + 1}`} title={`slide${index + 1}`} />
              </Tecnologias>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Carousel;
