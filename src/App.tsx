import { useState, useEffect, useRef } from "react";
import "./global.css";
import Consulta from "./Consulta";

function App() {
  const consultaRef = useRef<any>(null);
  const [consultaAtiva, setConsultaAtiva] = useState<boolean>(false);

  const abrirConsulta = () => {
    setConsultaAtiva(true);
  };

  useEffect(() => {
    let x = (e: MouseEvent) => {
      if (!consultaRef.current.contains(e.target)) {
        setConsultaAtiva(false);
        console.log(consultaRef.current);
      }
    };

    document.addEventListener("mousedown", x);
  });

  return (
    <>
      <section
        className={`relative min-h-screen flex flex-col items-center gap-7 justify-center font-sans bg-primaria text-secundaria ${
          consultaAtiva ? "blur-sm" : "blur-none"
        }`}
      >
        <div className="font-bold text-5xl">AG Sistemas - Desafio Técnico</div>
        {/* Botão para abrir popup */}
        <button
          onClick={abrirConsulta}
          type="button"
          className="text-primaria hover:bg-gray-400 bg-secundaria rounded-full font-bold text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          Vamos lá!
          {/* Flecha -> */}
          <svg
            className="rtl:rotate-180 w-6 h-6 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </section>
      <div
        // Utilizo forwardRef para pegar o valor ref de Consulta.tsx para poder manipular no useEffect responsável por verificar o clique do mouse fora da ref.
        className={`absolute inset-0 rounded flex items-center justify-center ${
          consultaAtiva ? "visible" : "invisible"
        }`}
      >
        <Consulta forwardRef={consultaRef} />
      </div>
    </>
  );
}

export default App;
