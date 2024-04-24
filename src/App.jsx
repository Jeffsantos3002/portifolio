import { useRef, useEffect } from "react";

import Header from "./components/Header";
import Inicio from "./sections/Inicio";
import Sobre from "./sections/Sobre";
import Projetos from "./components/Projetos";

function App() {


  return (
    <div className="bg-bg w-full h-full">
      <Header />
      <main>
        <Inicio/>
        <Sobre/>
        <Projetos/>
      </main>
    </div>
  );
}

export default App;
