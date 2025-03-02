import { useRef, forwardRef, useEffect } from "react"
import "./global.css";

const Consulta = ({ forwardRef }) => {
  useEffect(() => {
    console.log(forwardRef.current, 'consulta.tsx');
  });
  return (
      <div ref={forwardRef} className="w-200 h-150 items-center justify-center rounded-e-lg shadow-md bg-secundaria">
       ...
      </div>
  );
};

export default Consulta;
  