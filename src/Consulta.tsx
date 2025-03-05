import { useEffect, useState } from "react";
import "./global.css";

interface forwardRefProps {
  forwardRef: any; // mudar isso <<<<<
}

const Consulta: React.FC<forwardRefProps> = ({ forwardRef }) => {
  // Referencia todos os inputs, como se fosse um ID
  const [dados, setDados] = useState<
    {
      cep: string;
      logradouro: string;
      bairro: string;
      cidade: string;
      estado: string;
    }[]
  >([]);
  const [dadosTemporario, setDadosTemporario] = useState<{
    cep: string;
    logradouro: string;
    bairro: string;
    cidade: string;
    estado: string;
  } | null>(null);

  const [cep, setCep] = useState<string>("");
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

  const verificacaoLocalStorage = () => {
    const dadosArmazenado = localStorage.getItem("dadosArray");
    const dadosTexto = dadosArmazenado ? JSON.parse(dadosArmazenado) : [];
    const dadosVerifica = dadosTexto.find(
      (item: { cep: string }) => item.cep.replace(/\D/g, '') === cep.replace(/\D/g, '')
    );

    if (dadosVerifica) {
      console.log(`CEP ${cep} já existente!`); 

      setLogradouro(dadosVerifica.logradouro);
      setBairro(dadosVerifica.bairro);
      setCidade(dadosVerifica.cidade);
      setEstado(dadosVerifica.estado);
    } else {
      limpaCampos();
    }
  };

  const implementacaoCEP = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cep = event.target.value.replace(/\D/g, "");
    setCep(cep);

    if (!cep || cep.length < 8) {
      limpaCampos();
    }

    if (cep.length === 8) {
      var validaCEP = /^[0-9]{8}$/;

      if (validaCEP.test(cep)) {
        fetch(`https://viacep.com.br/ws/${cep}/json`)
          .then((res) => res.json())
          .then((dados) => {
            if (!dados || dados.status === "error") {
              console.error("Erro na API");
              limpaCampos();
              return;
            }

            setLogradouro(dados.logradouro);
            setBairro(dados.bairro);
            setCidade(dados.localidade);
            setEstado(dados.uf);

            setDadosTemporario({
              cep: dados.cep,
              logradouro: dados.logradouro,
              bairro: dados.bairro,
              cidade: dados.localidade,
              estado: dados.uf,
            });
          })
          .catch((error) => console.error(`Erro: ${error}`));
      }
    }
  };

  const salvarDados = () => {
    if (!dadosTemporario) {
      alert("Nenhum dado para salvar.");
      return;
    }
    const dadosArmazenado = localStorage.getItem("dadosArray");
    const dadosTexto = dadosArmazenado ? JSON.parse(dadosArmazenado) : [];

    // Adiciona os novos dados à lista existente <-
    const dadosAtualizado = [...dadosTexto, dadosTemporario];

    localStorage.setItem("dadosArray", JSON.stringify(dadosAtualizado));

    setDados(dadosAtualizado);

    setDadosTemporario(null);
  };

  useEffect(() => {
    const dadosArmazenado = localStorage.getItem("dadosArray");
    if (dadosArmazenado) {
      setDados(JSON.parse(dadosArmazenado));
    }
  }, []);

  return (
    <div
      ref={forwardRef}
      className="w-200 h-150 flex rounded-3xl shadow-md font-sans items-center bg-secundaria text-sm"
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
              value={cep}
              className="block w-full rounded-3xl border-0 py-1.5 pl-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 md:text-lg"
              placeholder="CEP (Ex: 00000-000)"
              onBlur={verificacaoLocalStorage}
              onChange={implementacaoCEP}
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
              className="block w-full rounded-3xl border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
              placeholder="Logradouro (Rua)"
              value={logradouro}
              onChange={verificacaoLocalStorage}
            />
          </div>

          {/* Bairro */}
          <div className="relative w-60 rounded-3xl shadow-sm">
            <input
              type="text"
              className="block text-center w-full rounded-3xl border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Bairro"
              value={bairro}
              onChange={verificacaoLocalStorage}
            />
          </div>

          {/* Cidade */}
          <div className="relative w-1/2 rounded-3xl shadow-sm">
            <input
              type="text"
              className="block w-full rounded-3xl border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Cidade"
              value={cidade}
              onChange={verificacaoLocalStorage}
            />
          </div>

          {/* Estado */}
          <div className="relative w-30 rounded-3xl shadow-sm">
            <input
              type="text"
              className="block w-full rounded-3xl border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Estado"
              value={estado}
              onChange={verificacaoLocalStorage}
            />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            type="button"
            className="text-secundaria hover:bg-secundaria hover:text-primaria bg-primaria rounded-full font-bold text-sm px-5 py-2.5 mt-4 text-center inline-flex items-center transition duration-700 ease-in-out"
            onClick={salvarDados}
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
        <div className="flex flex-col justify-center text-center mt-5">
          {dados.length > 0
            ? dados.map((dados, i) => (
                <div className="flex flex-col" key={i}>
                  {dados.cep}, {dados.logradouro}, {dados.cidade}, {dados.estado}
                </div>
              ))
            : "Nenhum dado encontrado."}
        </div>
      </div>
    </div>
  );
};

export default Consulta;
