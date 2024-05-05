export default function Title({texto, color}){
  
  return(
    <div className="flex flex-col justify-center items-center space-y-1">
      <h1 className=" text-4xl">{texto}</h1>
      <span className={`w-12 h-1 ${color}`}></span>
    </div>
  )
}