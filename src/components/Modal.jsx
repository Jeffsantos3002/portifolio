import { useState, useRef, useEffect } from 'react';

export default function Modal({visivel, onClose, data}) {
  const modalRef = useRef(null);

  const fecharModal = () => {
    onClose(!visivel)
  };
  
  useEffect(()=>{
    console.log(visivel)
  }, visivel)

  return (
    <div>
      {visivel && (
        <dialog ref={modalRef} className="modal" open>
          <div className="modal-box bg-lilas flex flex-col space-y-5">
            <h3 className="font-bold text-2xl font-mono">{data.name}</h3>
            <p className="py-4 text-xl font-mono">{data.description}</p>
            <p className='text-lg'><span className='text-xl'>Tecnologias:</span> {data.tecnologias}</p>
            <div>
              {data.deploy && (<a href={data.deploy} className="btn btn-ghost bg-[#4f2f7a] border-none mr-10 text-xl" target='_blank'>Deploy</a>)}
              { data.github && (<a href={data.github} className="btn btn-ghost bg-[#4f2f7a] border-none text-black text-xl" target='_blank'>GitHub</a>)}
            </div>
          </div>
          <form method="dialog" className="modal-backdrop opacity-40 bg-bg">
            <button onClick={fecharModal}>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
}
