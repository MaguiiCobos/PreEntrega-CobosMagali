import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartContexProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (curso) => {
    let exist = isInCart(curso.id);
    if (exist) {
      let nuevoArreglo = cart.map((item) => {
        if (item.id === curso.id) {
          return { ...item, quantify: curso.quantify };
        } else {
          return item;
        }
      });

      setCart(nuevoArreglo);
    } else {
      setCart([...cart, curso]);
    }
  };

  const limpiarCarrito = () => {
    setCart([]);
  };

  const eliminarPorId = (id) => {
    const nuevoArregloCarrito = cart.filter((curso) => curso.id !== id);
    setCart(nuevoArregloCarrito);
  };

  const isInCart = (id) => {
    return cart.some((curso) => curso.id === id); //esto devuelve un boolean
  };

  const obtenerCantidadPorId = (id) => {
    let curso = cart.find((item) => item.id === id);
    return curso?.quantify; //con el ? decimos q si existe vea la cantidad, pero si es undefined q no siga y no vea la cantidad
  };

  const precioTotal = () => {
    let total = cart.reduce((acumulador, curso) => {
      return acumulador + curso.quantify * curso.precio;
    }, 0);
    return total;
  };

  const totalItems = () => {
    let total = cart.reduce((acumulador, curso) => {
      return acumulador + curso.quantify;
    }, 0);
    return total;
  };

  let data = {
    cart,
    agregarAlCarrito,
    limpiarCarrito,
    eliminarPorId,
    obtenerCantidadPorId,
    precioTotal,
    totalItems,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContexProvider;
