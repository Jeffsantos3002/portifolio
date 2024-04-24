import Cubo from "./cubo/Cubo"

import AVA from '../assets/cubo/AVA.png'
import URBITAVEL from '../assets/cubo/URBITAVEL.png'

export default function Projetos(){

  const faces = [
    {
      name: 'AVA',
      src: AVA,
      description: 'Este é um projeto feito no processo seletivo para ingressar no Laboratório de Pesquisa Laís. Nesse repositório você encontrará o frontend que consome dados das API fornecida nessa etapa do processo seletivo.Este é um projeto feito no processo seletivo para ingressar no Laboratório de Pesquisa Laís. Nesse repositório você encontrará o frontend que consome dados das API fornecida nessa etapa do processo seletivo.',
      github: 'https://github.com/Jeffsantos3002/AVA',
      deploy: 'https://ava-xi.vercel.app/',
      tecnologias: 'VueJs, Vue Router, Vuetify, Tailwind CSS, vue-google-charts, Axios, vue-lazyload. '
    },
    {
      name: 'URBITAVEL',
      src: URBITAVEL,
      description: "O propósito deste projeto é desenvolver um website para uma fictícia organização ambiental comunitária denominada 'Urbitável'. A concepção visual do site baseia-se em um design público disponibilizado no Figma.",
      github: 'https://github.com/Jeffsantos3002/urbitavel-projeto-comunitario',
      deploy: 'https://urbitavel.vercel.app/',
      tecnologias: 'VueJs, Vue Router, Vuetify, Tailwind CSS, Figma. '
    },
    {
      name: 'AVA',
      src: AVA,
      description: 'Este é um projeto feito no processo seletivo para ingressar no Laboratório de Pesquisa Laís. Nesse repositório você encontrará o frontend que consome dados das API fornecida nessa etapa do processo seletivo.Este é um projeto feito no processo seletivo para ingressar no Laboratório de Pesquisa Laís. Nesse repositório você encontrará o frontend que consome dados das API fornecida nessa etapa do processo seletivo.',
      github: 'https://github.com/Jeffsantos3002/AVA',
      deploy: 'https://ava-xi.vercel.app/',
      tecnologias: 'VueJs, Vue Router, Vuetify, Tailwind CSS, vue-google-charts, Axios, vue-lazyload. '
    },
    {
      name: 'URBITAVEL',
      src: URBITAVEL,
      description: "O propósito deste projeto é desenvolver um website para uma fictícia organização ambiental comunitária denominada 'Urbitável'. A concepção visual do site baseia-se em um design público disponibilizado no Figma.",
      github: 'https://github.com/Jeffsantos3002/urbitavel-projeto-comunitario',
      deploy: 'https://urbitavel.vercel.app/',
      tecnologias: 'VueJs, Vue Router, Vuetify, Tailwind CSS, Figma. '
    },
    {
      name: 'AVA',
      src: AVA,
      description: 'Este é um projeto feito no processo seletivo para ingressar no Laboratório de Pesquisa Laís. Nesse repositório você encontrará o frontend que consome dados das API fornecida nessa etapa do processo seletivo.Este é um projeto feito no processo seletivo para ingressar no Laboratório de Pesquisa Laís. Nesse repositório você encontrará o frontend que consome dados das API fornecida nessa etapa do processo seletivo.',
      github: 'https://github.com/Jeffsantos3002/AVA',
      deploy: 'https://ava-xi.vercel.app/',
      tecnologias: 'VueJs, Vue Router, Vuetify, Tailwind CSS, vue-google-charts, Axios, vue-lazyload. '
    },
    {
      name: 'URBITAVEL',
      src: URBITAVEL,
      description: "O propósito deste projeto é desenvolver um website para uma fictícia organização ambiental comunitária denominada 'Urbitável'. A concepção visual do site baseia-se em um design público disponibilizado no Figma.",
      github: 'https://github.com/Jeffsantos3002/urbitavel-projeto-comunitario',
      deploy: 'https://urbitavel.vercel.app/',
      tecnologias: 'VueJs, Vue Router, Vuetify, Tailwind CSS, Figma. '
    },
  ]

  return(
    <div className="flex flex-col xl:h-screen items-center space-y-5 bg-projetos pb-10">
        <span className=" bg-azul w-full h-2 mb-14"></span>
        <div className="flex flex-col justify-center items-center space-y-1">
          <h1 className=" text-4xl">Projetos</h1>
          <span className=" bg-azul w-12 h-1"></span>
        </div>
        <div className="w-full xl:max-w-[1200px] flex flex-col xl:flex-row justify-center xl:justify-between items-center  px-5 pt-24">
          <div className="xl:max-w-[620px] font-mono text-2xl space-y-5">
            <p className="text-center ">Transformando linhas de código em experiências inovadoras, trago o espírito do futuro para o presente através do meu trabalho.</p>
            <p className=" text-azul text-center">Clique em uma das faces do cubo.</p>
          </div>
          <div className="mt-36 mb-14">
            <Cubo faces={faces}/>
          </div>
        </div>
    </div>
  )
  
}
