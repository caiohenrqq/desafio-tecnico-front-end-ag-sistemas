import { useState, useEffect, useRef } from "react";
import "./global.css";
import { Consulta } from "./Consulta";

function App() {
  const [consultaAtiva, setConsultaAtiva] = useState<boolean>(false);

  const abrirConsulta = () => {
    setConsultaAtiva(true);
  };

  useEffect(() => {
    let x = (e:any) => {
      if (e.target) {
        setConsultaAtiva(false);
      }
    };

    document.addEventListener("mousedown", x);
  });

  return (
    <>
      <section
        className={`relative inicio min-h-screen flex flex-col items-center gap-7 justify-center font-sans bg-primaria text-secundaria ${
          consultaAtiva ? "blur-sm" : "blur-none"
        }`}
      >
        <div className="titulo-inicio font-bold text-5xl">
          AG Sistemas - Desafio Técnico
        </div>
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
      {consultaAtiva ? (
        <div className="fixed inset-0 flex items-center justify-center  ">
          <Consulta />
        </div>
      ) : null}
    </>
  );
}

export default App;
