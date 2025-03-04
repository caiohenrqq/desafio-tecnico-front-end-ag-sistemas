import { useState } from "react";
import "./global.css";

interface forwardRefProps {
  forwardRef: any; // mudar isso <<<<<
}

const Consulta: React.FC<forwardRefProps> = ({ forwardRef }) => {
  // Referencia todos os inputs, como se fosse um ID
  const [logradouro, setLogradouro] = useState<string>("");
  const [bairro, setBairro] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
  const [estado, setEstado] = useState<string>("");

  const limpaCampos = () => {
    setLogradouro("");
    setBairro("");
    setCidade("");
    setEstado("");
  };

  const implementacaoCEP = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Usando Regex c/ Replace para substituir qualquer coisa que não seja número.
    const cep = event.target.value.replace(/\D/g, "");
    
    // Verificões para garantir o envio apenas do CEP correto, evitando chamadas a mais para a API
    if (!cep || cep.length < 8) {
      limpaCampos();
    }

    if (cep.length == 8) {

      var validaCEP = /^[0-9]{8}$/;
      
      // Validação de cep providenciada na documentação do ViaCEP
      if (validaCEP.test(cep)) {
        fetch(`https://viacep.com.br/ws/${cep}/json`)
          .then((res) => res.json())
          .then((dados) => {
            if (!dados) {
              if (dados.status === true) {
                console.error('Erro na API');
                limpaCampos();
              }
            };
            setLogradouro(dados.logradouro);
            setBairro(dados.bairro);
            setCidade(dados.localidade);
            setEstado(dados.estado);
          })
          .catch((error) => console.error("Erro ao encontrar CEP:", error));
      }
    } else {
      alert("Formato inválido! Exemplo de formato: 00000-000.");
    }
  };
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
              type="text"
              className="block w-full rounded-3xl border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="CEP (Ex: 00000-000)"
              onBlur={implementacaoCEP}
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
              type="text"
              className="block w-full rounded-3xl border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Logradouro (Rua, avenida, etc)"
              value={logradouro}
              onChange={implementacaoCEP}
            />
          </div>

          {/* Número */}
          <div className="relative w-40 rounded-3xl shadow-sm">
            <input
              type="text"
              className="block w-full rounded-3xl border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Nº ou Unidade"
            />
          </div>

          {/* Complemento */}
          <div className="relative w-1/2 rounded-3xl shadow-sm">
            <input
              type="text"
              className="block text-center w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Complemento"
            />
          </div>

          {/* Bairro */}
          <div className="relative w-60 rounded-3xl shadow-sm">
            <input
              type="text"
              className="block text-center w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Bairro"
              value={bairro}
              onChange={implementacaoCEP}
            />
          </div>

          {/* Cidade */}
          <div className="relative w-1/2 rounded-3xl shadow-sm">
            <input
              type="text"
              className="block w-full rounded-3xl border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Cidade"
              value={cidade}
              onChange={implementacaoCEP}
            />
          </div>

          {/* Estado */}
          <div className="relative w-30 rounded-3xl shadow-sm">
            <input
              type="text"
              className="block w-full rounded-3xl border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Estado"
              value={estado}
              onChange={implementacaoCEP}
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
        <button
          // onClick={}
          type="button"
          className="text-secundaria hover:bg-gray-400 bg-primaria rounded-full font-bold text-sm px-5 py-2.5 mt-4 text-center inline-flex items-center"
        >
          Salvar
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
        </div>
      </div>
    </div>
  );
};

export default Consulta;
