export default function Header({cor}){

  const ancoras = [
    {
      ancora: '#inicio',
      nome: 'Início'
    },
    {
      ancora: '#about',
      nome: 'Sobre'
    },
    {
      ancora: '#Projetos',
      nome: 'Projetos'
    },
    {
      ancora: '#contact',
      nome: 'Contato'
    }
  ]

  return(

    <header className={`navbar ${ cor ? 'bg-bg/25' : 'bg-lilas '} flex flex-row justify-between px-2 sm:px-5 fixed z-20`}>
      <div className="navbar-start w-full">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-bg rounded-box w-52">
            {ancoras.map((anc, index)=>(
              <li key={index}><a className="button text-2xl" href={anc.ancora} >{anc.nome}</a></li>
            ))}
          </ul>
        </div>
        <p className="text-2xl"><span className={` ${ cor ? 'text-lilas' : 'text-azul'} `}>&lt;</span> Jeferson <span className={` ${ cor ? 'text-lilas' : 'text-azul'} `}>/&gt;</span></p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {ancoras.map((anc, index)=>(
            <li key={index}><a className="button text-2xl" href={anc.ancora} >{anc.nome}</a></li>
          ))}
        </ul>
      </div>
    </header>

  )
}