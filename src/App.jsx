import { useRef, useEffect } from "react";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'; 

import Header from "./components/Header";
import Inicio from "./sections/Inicio";
import Sobre from "./sections/Sobre";
import Projetos from "./sections/Projetos";
import Contato from "./sections/Contato";
import Footer from "./components/Footer";

import { useInView } from 'react-intersection-observer';
import { useState } from "react";

function App() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sobreRef = useRef();

  // Configurações do Intersection Observer
  const { ref, inView } = useInView({
    threshold: 0.1 // Quando qualquer parte do elemento é visível dentro do viewport
  });

  // Atualiza o estado quando ocorre interseção
  useEffect(() => {
    setIsIntersecting(inView);
    console.log(inView, isIntersecting)
  }, [inView]);

  // Classe condicional para alterar a cor do header
  const headerClass = isIntersecting ? true : false;

  return (
    <div className='w-full h-full text-white'>
      <Header cor={headerClass}/>
      <main>
        <ParallaxProvider>
          <Parallax speed={-100}> {/* Envolver o componente Inicio com Parallax */}
            <Inicio />
          </Parallax>
          <Parallax speed={0}> {/* Envolver o componente Sobre com Parallax */}
            <div ref={ref} >
              <Sobre />
              <Projetos/>
              <Contato/>
            </div>
          </Parallax>
        </ParallaxProvider>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
