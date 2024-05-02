import { useRef, useEffect } from "react";

import Header from "./components/Header";
import Inicio from "./sections/Inicio";
import Sobre from "./sections/Sobre";
import Projetos from "./sections/Projetos";
import Contato from "./sections/Contato";

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
    }, [inView]);
  

  // Classe condicional para alterar a cor do header
  const headerClass = isIntersecting ? true : false;

  return (
    <div className='bg-bg w-full h-full'>
      <Header cor={headerClass}/>
      <main>
        <div ref={ref}> 
          <Inicio />
        </div>
        <Sobre />
        <Projetos/>
        <Contato/>
       
      </main>
    </div>
  );
}

export default App;
