import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, initial=1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
      console.log("sumar");
    } else {
      alert("No hay mas stock")
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
      console.log("restar");
    } else {
      alert("No podes menos de 1");
    }
  };

  let objectProps = {
    restar,
    sumar,
    contador,
    onAdd
  };

  return <Counter {...objectProps} />;
};

export default CounterContainer;
