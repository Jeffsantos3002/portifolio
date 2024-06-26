import React from "react";
import '../animations.css'
export default function Header({ cor }) {
  const ancoras = [
    {
      ancora: "#inicio",
      nome: "Início",
    },
    {
      ancora: "#about",
      nome: "Sobre",
    },
    {
      ancora: "#Projetos",
      nome: "Projetos",
    },
    {
      ancora: "#contact",
      nome: "Contato",
    },
  ];

  const handleClick = (ancora) => {
    const element = document.querySelector(ancora);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`navbar ${
        cor ? "bg-headerDesloc" : "bg-headerTop" 
      } flex flex-row justify-between px-2 sm:px-5 fixed z-20`}
    >
      <div className="navbar-start w-full">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="rounded py-2 px-5  lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow ${cor ? "bg-headerDesloc" : "bg-headerTop" } rounded-box w-52`}
          >
            {ancoras.map((anc, index) => (
              <li key={index}>
                <button
                  className={`py-2 bg-transparent text-2xl ${cor ? 'focus:text-azul' : 'focus:text-lilas'}`}
                  onClick={() => handleClick(anc.ancora)}
                >
                  {anc.nome}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-2xl">
          <span
            className={` ${
              cor ?"text-azul" : "text-lilas"
            } `}
          >
            &lt;
          </span>{" "}
          Jeferson{" "}
          <span
            className={` ${
              cor ?"text-azul" : "text-lilas"
            } `}
          >
            /&gt;
          </span>
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {ancoras.map((anc, index) => (
            <li key={index}>
              <button
                className={`py-2 bg-transparent text-2xl ${cor ? 'focus:text-azul' : 'focus:text-lilas'}`}
                onClick={() => handleClick(anc.ancora)}
              >
                {anc.nome}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
