import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContex";

const CartContainer = () => {
  const { cart, limpiarCarrito, eliminarPorId, precioTotal } =
    useContext(CartContext);
  let total = precioTotal();
  return (
    <Cart
      cart={cart}
      limpiarCarrito={limpiarCarrito}
      eliminarPorId={eliminarPorId}
      total={total}
    />
  );
};

export default CartContainer;
