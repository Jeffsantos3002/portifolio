import { useRef, useEffect } from "react";

import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";

function App() {


  return (
    <div className="bg-bg w-full h-full">
      <Header />
      <main>
        <Inicio/>
        <Sobre/>
      </main>
    </div>
  );
}

export default App;
