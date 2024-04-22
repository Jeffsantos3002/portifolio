export default function Tecnologias({children}){
  return(
    <div className="cursor-pointer grayscale hover:grayscale-0 w-16 h-16 rounded-full bg-iconTec flex items-center justify-center">
      {children}
    </div>
  )
}