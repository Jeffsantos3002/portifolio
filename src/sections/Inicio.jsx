import { useState } from "react";

import bg from "../assets/bg.mp4";
import currilo from '../assets/curriculo.pdf'

export default function Início() {

  const [github, setGithub] = useState(false)
  const [linkedin, setLinkedin] = useState(false)
  const [curriculum, setCurriculum] = useState(false)

  const handleGithub = () =>{
    setGithub(!github)
  }

  const handleLinkedin = () => {
    setLinkedin(!linkedin)
  }

  const handeCurriculum = () => {
    setCurriculum(!curriculum)
  }

  return (
    <div className="relative  h-screen">
      <video autoPlay playsInline loop muted className="w-full h-full object-cover opacity-70">
        <source src={bg} type="video/mp4" alt='video-background' className="absolute inset-0 " />
      </video>
      <div className="absolute inset-0 flex items-center justify-center flex-col space-y-2.5">
        <h1 className="text-white text-3xl sm:text-4xl 2xl:text-6xl font-bold">Jeferson de O. Santos</h1>
        <h2 className=" text-2xl sm:text-3xl 2xl:text-5xl font-mono">Desenvolvedor Web <span className=" text-lilas">&lt;/&gt;</span></h2>

        <div className="flex flex-row justify-center mx-5 space-x-5 md:space-x-10 transition-transform duration-500 ease-in-out">
          <a href="https://github.com/Jeffsantos3002" target="_blank"
            className="cursor-pointer flex flex-row items-center space-x-2 "
            onMouseEnter={handleGithub}
            onMouseLeave={handleGithub}
          >
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="duration-3000 ease-in-out">
              <path  d="M20 0.5C31.046 0.5 40 9.67986 40 21.0059C40 30.0639 34.276 37.7479 26.334
              40.4619C25.32 40.6639 24.96 40.0235 24.96 39.4775C24.96 38.8015 24.984 36.5936 24.984 33.8496C24.984 31.9376 24.344 30.6897 
              23.626 30.0537C28.08 29.5457 32.76 27.8115 32.76 19.9355C32.76 17.6955 31.984 15.8676 30.7 14.4316C30.908 13.9136 31.594 11.8279 
              30.504 9.00391C30.504 9.00391 28.828 8.45444 25.01 11.1064C23.412 10.6524 21.7 10.424 20 10.416C18.3 10.424 16.59 10.6524 14.994 
              11.1064C11.172 8.45444 9.492 9.00391 9.492 9.00391C8.406 11.8279 9.092 13.9136 9.298 14.4316C8.02 15.8676 7.23801 17.6955 7.23801 
              19.9355C7.23801 27.7915 11.908 29.5523 16.35 30.0703C15.778 30.5823 15.26 31.4855 15.08 32.8115C13.94 33.3355 11.044 34.2424 
              9.25999 31.1084C9.25999 31.1084 8.202 29.1381 6.194 28.9941C6.194 28.9941 4.244 28.9682 6.058 30.2402C6.058 30.2402 7.368 30.8702 
              8.278 33.2402C8.278 33.2402 9.45201 36.9002 15.016 35.6602C15.026 37.3742 15.044 38.9895 15.044 39.4775C15.044 40.0195 14.676 
              40.6539 13.678 40.4639C5.72999 37.7539 0 30.0659 0 21.0059C0 9.67986 8.956 0.5 20 0.5Z" fill={github ? '#9747FF' : "white"}/>
            </svg>
            
            <p className={`${github ? 'w-10 opacity-100 text-lilas hidden md:flex text-2xl transform translate-x-0 transition-transform duration-500 ease-in-out' : 
              'w-0 opacity-0 transform -translate-x-1 transition-transform duration-500 ease-in-out'} `}
            >Github</p>
         </a>

          <a href="https://www.linkedin.com/in/jeferson-de-oliveira-santos-b149b61b7/" target="_blank"
            className="cursor-pointer flex flex-row items-center space-x-2 "
            onMouseEnter={handleLinkedin}
            onMouseLeave={handleLinkedin}
          >
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5.54492V35.4551C0 38.2783 2.22169 40.5 5.04492 40.5H34.9551C36.3369 40.5 37.6572 39.8389 38.499 38.999C39.4004 
                38.0977 40 36.9561 40 35.4551V5.54492C40 2.72169 37.7783 0.5 34.9551 0.5H5.04492C3.54394 0.5 2.40234 1.10155 1.50099 
                2.00099C0.659203 2.84277 0 4.1631 0 5.54492ZM5.40624 9.50783C5.40624 7.58596 6.96872 5.90432 8.8906 5.90432C10.8721 5.90432 
                12.4941 7.58596 12.4941 9.50783C12.4941 11.4893 10.8721 13.0518 8.8906 13.0518C6.96872 13.0518 5.40624 11.4893 5.40624 
                9.50783ZM15.0752 34.1924V15.875C15.0752 15.4541 15.4961 15.0947 15.7959 15.0947H20.9004C21.6211 15.0947 21.6211 15.9365 21.6211 
                16.4766C23.0625 15.0351 24.9248 14.6738 26.8467 14.6738C31.5322 14.6738 34.5342 16.8955 34.5342 21.8213V34.1943C34.5342 34.6152 
                34.1729 34.9746 33.8135 34.9746H28.5283C28.1074 34.9746 27.8076 34.5537 27.8076 34.1943V23.0225C27.8076 21.1602 27.2676 20.1396 
                25.165 20.1396C22.5225 20.1396 21.8613 21.8809 21.8613 24.2236V34.1943C21.8613 34.6152 21.4404 34.9746 21.0196 
                34.9746H15.794C15.4942 34.9746 15.0733 34.5537 15.0733 34.1943L15.0752 34.1924ZM5.52539 34.1924V15.875C5.52539 15.4541 5.94628 
                15.0947 6.2461 15.0947H11.4717C11.9521 15.0947 12.252 15.3945 12.252 15.875V34.1924C12.252 34.6133 11.8906 34.9727 11.4717 
                34.9727H6.2461C5.88478 34.9727 5.52539 34.5518 5.52539 34.1924Z" fill={linkedin ? '#007EBB' : "white"}/>
            </svg>
            <p className={`${linkedin ? 'w-10 opacity-100 text-[#007EBB] hidden md:flex text-2xl transform translate-x-0 transition-transform duration-500 ease-in-out' : 
              'w-0 opacity-0 transform -translate-x-1 transition-transform duration-500 ease-in-out'} `}>Linkedin</p>   
          </a>

          <a href={currilo} target="_blank"
            className="cursor-pointer flex flex-row items-center space-x-2 "
            onMouseEnter={handeCurriculum}
            onMouseLeave={handeCurriculum}
          >
            <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.7958 33.6028H10.1779C9.56528 33.6028 9.06464 34.0969 9.06464 34.7161C9.06464 35.3288 9.55876 35.8294 10.1779 
                35.8294H29.8025C30.4151 35.8294 30.9157 35.3353 30.9157 34.7161C30.9091 34.0969 30.4151 33.6028 29.7958 33.6028ZM29.7958 
                28.728H10.1779C9.56528 28.728 9.06464 29.222 9.06464 29.8412C9.06464 30.4539 9.55876 30.9545 10.1779 30.9545H29.8025C30.4151 
                30.9545 30.9157 30.4604 30.9157 29.8412C30.9091 29.2221 30.4151 28.728 29.7958 28.728ZM19.9868 5.17059C17.3517 5.17059 15.1976 
                7.31818 15.1976 9.9598C15.1976 12.5949 17.3517 14.7424 19.9868 14.7424C22.6219 14.7424 24.776 12.5948 24.776 9.95317C24.776 
                7.31156 22.6219 5.17059 19.9868 5.17059ZM19.9868 12.5093C18.5836 12.5093 17.4308 11.3565 17.4308 9.95327C17.4308 8.55008 18.577 
                7.39726 19.9868 7.39726C21.3967 7.39726 22.5428 8.55008 22.5428 9.95327C22.5428 11.3564 21.39 12.5093 19.9868 12.5093Z" fill={curriculum ? '#BD00FF' : "white"}/>
              <path d="M26.3439 17.147C22.2793 15.5659 17.7074 15.5659 13.643 17.147C12.3122 17.6674 11.4229 18.9915 11.4229 
                20.4474V24.9664C11.4163 25.5791 11.917 26.0797 12.5297 26.0797H27.4506C28.0632 26.0797 28.5639 25.5857 28.5639 
                24.9664V20.4474C28.5639 18.9915 27.6746 17.6674 26.3439 17.147ZM26.3439 23.8597H13.643V20.4539C13.643 19.9137 13.9658 
                19.4131 14.4467 19.2286C17.9973 17.8518 21.9895 17.8518 25.5403 19.2286C26.0211 19.4197 26.344 19.9072 26.344 
                20.4539V23.8597H26.3439Z" fill={curriculum ? '#BD00FF' : "white"}/>
              <path d="M31.9039 0.5H13.3992C12.5429 0.5 11.7392 0.829348 11.1331 1.43546L5.81028 6.75823C5.20427 7.36434 4.87482 8.16794 
                4.87482 9.02433V37.2852C4.87482 39.0573 6.31755 40.4999 8.08953 40.4999H31.9104C33.6825 40.4999 35.1251 39.0572 35.1251 
                37.2852V3.71471C35.1054 1.94273 33.6627 0.5 31.9039 0.5ZM11.4163 4.29443V7.04804H8.66273L11.4163 4.29443ZM32.8854 
                12.4038H28.7484C28.1357 12.4038 27.6351 12.8979 27.6351 13.5171C27.6351 14.1297 28.1291 14.6304 28.7484 
                14.6304H32.8854V16.6067H31.3702C30.7576 16.6067 30.2569 17.1007 30.2569 17.72C30.2569 18.3326 30.7511 18.8332 31.3702 
                18.8332H32.8854V37.2917C32.8854 37.8385 32.4441 38.2799 31.9039 38.2799H8.06986C7.52968 38.2799 7.08834 37.8385 7.08834 
                37.2983V9.26808H12.5297C13.1424 9.26808 13.643 8.77406 13.643 8.1548V2.71342H31.9039C32.4441 2.71342 32.8854 3.15476 32.8854 
                3.69494V12.4038Z" fill={curriculum ? '#BD00FF' : "white"}/>
            </svg>
            <p className={`${curriculum ? 'w-10 opacity-100 text-rosa hidden md:flex text-2xl transform translate-x-0 transition-transform duration-500 ease-in-out' : 
              'w-0 opacity-0 transform -translate-x-1 transition-transform duration-500 ease-in-out'} `}>Currículo</p>    
          </a>
          
        </div>
      </div>
    </div>
  );
}
