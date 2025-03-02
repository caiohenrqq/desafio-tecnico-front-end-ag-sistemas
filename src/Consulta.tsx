import { useRef, forwardRef, useEffect } from "react";
import "./global.css";

const Consulta = ({ forwardRef }) => {
  return (
    <div
      ref={forwardRef}
      className="w-200 h-150 flex rounded-3xl shadow-md font-sans bg-secundaria"
    >
      <div className="w-full max-w-lg mx-auto">
        <div className="text-center mt-10 text-2xl font-bold text-primaria">Consulta CEP</div>
        <div className="place-content-center h-40">
          <div className="relative rounded-3xl shadow-sm">
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
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="relative rounded-3xl shadow-sm">
            <input
              type="search"
              className="block w-full rounded-3xl border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="CEP (Ex: 00000-000)"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulta;
