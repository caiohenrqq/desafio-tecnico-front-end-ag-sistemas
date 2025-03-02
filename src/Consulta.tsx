import { useRef, forwardRef, useEffect } from "react";
import "./global.css";

const Consulta = ({ forwardRef }) => {
  return (
    <div
      ref={forwardRef}
      className="w-200 h-150 flex rounded-3xl shadow-md font-sans items-center bg-secundaria"
    >
      <div className="w-full max-w-lg mx-auto mb-6">
        <div className="text-center text-2xl font-bold text-primaria">
          Consulta CEP
        </div>

        <div className="flex justify-center flex-wrap gap-4 mt-4">
          {/* CEP */}
          <div className="relative w-50 rounded-3xl shadow-sm">
            <input
              type="search"
              className="block w-full rounded-3xl border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="CEP (Ex: 00000-000)"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Logradouro */}
          <div className="relative w-1/2 rounded-3xl shadow-sm">
            <input
              type="search"
              className="block w-full rounded-3xl border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Logradouro (Rua, avenida, etc)"
            />
          </div>

          {/* Número */}
          <div className="relative w-40 rounded-3xl shadow-sm">
            <input
              type="search"
              className="block w-full rounded-3xl border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Nº ou Unidade"
            />
          </div>

          {/* Complemento */}
          <div className="relative w-1/2 rounded-3xl shadow-sm">
            <input
              type="search"
              className="block w-full rounded-3xl border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Complemento"
            />
          </div>

          {/* Bairro */}
          <div className="relative w-60 rounded-3xl shadow-sm">
            <input
              type="search"
              className="block w-full rounded-3xl border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Bairro"
            />
          </div>

          {/* Cidade */}
          <div className="relative w-1/2 rounded-3xl shadow-sm">
            <input
              type="search"
              className="block w-full rounded-3xl border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Cidade"
            />
          </div>

          {/* Estado */}
          <div className="relative w-30 rounded-3xl shadow-sm">
            <input
              type="search"
              className="block w-full rounded-3xl border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Estado"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulta;
