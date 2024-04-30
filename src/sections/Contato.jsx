import Title from "../components/Title"
import Icon from "../assets/icon-mensagem.svg"
import ContatoForm from "../components/ContatoForm"
import "../animations.css"

export default function Contato(){
  return(
    <div className="relative flex flex-col xl:h-screen pb-10 z-10 overflow-hidden" id="contact">
      <span className=" bg-azul w-full h-2 mb-14"></span>
      <div className="flex flex-col items-center justify-center space-y-5 mb-10">
        <Title texto={"Contato"} color={"bg-lilas"}/>
        <p className="text-2xl text-center">Entre em contato para demais informções!</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-56 h-full ">
        <img src={Icon} alt="icon-mensagem" title="icon-mensagem" className="hidden w-56 lg:flex"/>
        <ContatoForm/>
      </div>
      <div className="circle rounded-full bg-lilas blur-sm w-2 h-2 absolute z-0" id="circle1"></div>
      <div className="circle rounded-full bg-lilas blur-sm w-2 h-2 absolute z-0" id="circle2"></div>
      <div className="circle rounded-full bg-lilas blur-sm w-2 h-2 absolute z-0" id="circle3"></div>
      <div className="circle rounded-full bg-lilas blur-sm w-2 h-2 absolute z-0" id="circle4"></div>
      <div className="circle rounded-full bg-lilas blur-sm w-2 h-2 absolute z-0" id="circle5"></div>
      <div className="circle rounded-full bg-lilas blur-sm w-2 h-2 absolute z-0" id="circle6"></div>
      <div className="circle rounded-full bg-lilas blur-sm w-2 h-2 absolute z-0" id="circle7"></div>
      <div className="circle rounded-full bg-lilas blur-sm w-2 h-2 absolute z-0" id="circle8"></div>
    </div>
  )
}