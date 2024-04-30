import { useState, useRef } from 'react';
import check from '../assets/icons/check-circle.svg'

export default function ContatoForm() {

  const token = import.meta.env.VITE_API_TOKEN;

  const [verificaEmail, setVerificaEmail] = useState(null);
  const [verificaNome, setVerificaNome] = useState(null);
  const [verificaDuvida, setVerificaDuvida] = useState(null);

  const email = useRef(null)
  const assunto = useRef(null)
  const mensagem = useRef(null)
  const form = useRef(null)
  const dialog = useRef(null);

  const resetEmail = () =>{
    dialog.current.close()
    form.current.submit()
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    checkEmail()
    checkAssunto()
    checkMensagem()
    
    if (checkEmail() && checkAssunto() && checkMensagem()) {
      dialog.current.showModal()
      setTimeout(resetEmail, 3000)

    }
  };

  const checkAssunto = () => {

    if (assunto.current.value === '') {
      setVerificaNome('Campo Obrigatório');
      return false

    } else {
      setVerificaNome(null);
      return true
    }
  };

  const checkMensagem = () => {
    if (mensagem.current.value === '') {
      setVerificaDuvida('Campo Obrigatório');
      return false

    } else {
      setVerificaDuvida(null);
      return true
    }
  };

  const checkEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.current.value === '') {
      setVerificaEmail('Campo obrigatório');
      return false

    } else if (emailRegex.test(email.current.value)) {
      setVerificaEmail(null);
      return true

    } else {
      setVerificaEmail('Email inválido');
      return false
    }
  };

  return (
    <form
      ref={form}
      className="flex flex-col items-center justify-center bg-lilas rounded-md px-5 py-2.5 z-10"
      action="https://api.staticforms.xyz/submit" method="POST"
    >
      <div className="md:w-96 flex flex-col space-y-5">
        <div className="flex flex-col">
          <label htmlFor="nome" className="text-2xl">
            Assunto
          </label>
          <input
            ref={assunto}
            type="text"
            name='subject'
            className="w-full rounded-md focus:outline-none bg-neutral-50  text-neutral-950 p-2"
            placeholder="Digite o assunto aqui..."
          />
          {verificaNome && <p className="text-title font-bold text-sm mt-2">{verificaNome}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-2xl">
            Email
          </label>
          <input
          ref={email}
          name='email'
            type="email"
            className="w-full rounded-md focus:outline-none bg-neutral-50  text-neutral-950 p-2"
            placeholder="Digite seu email..."
          />
          {verificaEmail && <p className="text-title font-bold text-sm mt-2">{verificaEmail}</p>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-2xl">
            Mensagem
          </label>
          <textarea
            name="message"
            className="sm:h-36 rounded-md focus:outline-none bg-neutral-50 text-neutral-950 p-2"
            style={{ resize: 'none' }}
            placeholder="Digite a mensagem aqui..."
            ref={mensagem}
          ></textarea>
          {verificaDuvida && <p className="text-title font-bold text-sm mt-2">{verificaDuvida}</p>}
        </div>
      </div>

      <div className="w-full mt-5">
        <button
          type="submit"
          className="bg-neutral-50 btn border-none text-lilas btn-ghost text-center py-2 px-4"
          onClick={handleSubmit}
        >
          Enviar
            <dialog 
              ref={dialog}
              width="auto"
              className="modal"            >
              <div className='p-10 bg-lilas flex flex-col space-y-5 items-center justify-center rounded-md'>
                <div className='text-xl text-neutral-50'> Email enviado com sucesso! </div>
                <img src={check} alt='check-icon' title='check-icon' className='w-10'/>
              </div>
            </dialog>
          </button>
      </div>

      <input type="hidden" name="accessKey" value={token}/>
      <input type="hidden" name="redirectTo" value="http://localhost:5173/#contact"/>


    </form>
  );
}
