import { useRef, useEffect } from "react";

import Header from "./components/Header";
import Inicio from "./sections/Inicio";
import Sobre from "./sections/Sobre";
import Projetos from "./components/Projetos";
import Contato from "./sections/Contato";

function App() {


  return (
    <div className="bg-bg w-full h-full">
      <Header />
      <main>
        <Inicio/>
        <Sobre/>
        <Projetos/>
        <Contato/>
      </main>
    </div>
  );
}

export default App;
