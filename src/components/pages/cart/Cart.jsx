import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../cart/Cart.css";
import Swal from "sweetalert2";

const Cart = ({ cart, limpiarCarrito, eliminarPorId, total }) => {
  // solo va a tener la parte de html

  const limpiarCarritoAlert = () =>{
    Swal.fire({
      title: "¿Está seguro que quiere vaciar el carrito?",
      text: "Se perderán todos los cursos que a agregado",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, vaciar",
      cancelButtonText: "No vaciar"
    }).then((result) => {
      if (result.isConfirmed) {
        limpiarCarrito()
        Swal.fire({
          title: "Se vació el carrito",
          icon: "success"
        });
      }
    });
  }

  if (cart.length === 0) {
    return <h1>Carrito vacío</h1>
  }

  return (

    <div>
      <h1>Carrito</h1>

      {cart.map((curso) => (
        <div key={curso.id} className="divCursoCart">
          <h4>{curso.titulo}</h4>
          <h5>${curso.precio}</h5>
          <h5>{curso.quantify}</h5>
          <h5>Subtotal: ${curso.precio * curso.quantify}</h5>
          <button
            onClick={() => eliminarPorId(curso.id)}
            className="btnEliminar"
          >
            Eliminar
          </button>
        </div>
      ))}

      <h2>Total a pagar: ${total}</h2>

      {cart.length > 0 && ( //es como un ternario pero solo con la parte del truthy
        <Button onClick={limpiarCarritoAlert} className="btnLimpiar">
          Limpiar carrito
        </Button>
      )}

      {cart.length > 0 && ( //es como un ternario pero solo con la parte del truthy
        <Link to="/checkout">
          <Button className="btnComprar"> Finalizar compra </Button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
