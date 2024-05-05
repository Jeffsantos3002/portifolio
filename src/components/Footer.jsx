import { useState } from "react"
import Title from "./Title"

export default function Footer(){

  const [github, setGithub] = useState(false)
  const [linkedin, setLinkedin] = useState(false)

  const handleGithub = () =>{
    setGithub(!github)
  }

  const handleLinkedin = () => {
    setLinkedin(!linkedin)
  }

  return(
    <footer className="px-12 bg-projetos py-7 flex flex-col divide-y">
      <div className="flex flex-wrap justify-center md:justify-between space-y-5 sm:space-x-10 py-2.5 mb-7 ">
        <div className="min-w-[200px] max-w-[500px] space-y-2">
          <h1 className="text-2xl">Jeferson de Oliveira Santos</h1>
          <p className="text-base">Um desenvolvedor Web que constroi sites e aplicativos levando produto geral ao sucesso.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Title texto={"Social"} color={''}/>
          <div className="flex flex-row space-x-5">
            <a href="https://github.com/Jeffsantos3002" target="_blank"
              className="cursor-pointer flex flex-row items-center space-x-2 "
              onMouseEnter={handleGithub}
              onMouseLeave={handleGithub}
            >
              <svg width="20" height="20" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="duration-3000 ease-in-out">
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
              
            </a>

            <a href="https://www.linkedin.com/in/jeferson-de-oliveira-santos-b149b61b7/" target="_blank"
            className="cursor-pointer flex flex-row items-center space-x-2 "
            onMouseEnter={handleLinkedin}
            onMouseLeave={handleLinkedin}
          >
            <svg width="20" height="20" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            </a>
          </div>
        </div>
      </div>
      <p className="w-full text-center pt-7">© Copyright 2024 . Made by Jeferson de O. Santos</p>

    </footer>
  )
}