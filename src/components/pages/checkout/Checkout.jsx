import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContex";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, precioTotal, limpiarCarrito } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  let total = precioTotal();

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let obj = {
      buyer: info,
      items: cart,
      total: total,
    };
    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, obj).then((res) => setOrderId(res.id));

    cart.forEach((curso) => {
      let cursosCollection = collection(db, "cursos");
      let refDoc = doc(cursosCollection, curso.id);
      updateDoc(refDoc, { stock: curso.stock - curso.quantify }); //actualizacion patch
    });

    limpiarCarrito();
  };

  const compraFinalizada = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se realizó la compra con éxito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div>
      {orderId ? (
        <div>
          {compraFinalizada()}
          <h1>Su ID es: #{orderId}</h1>
          <Link to="/">
            <Button variant="contained" color="secondary">
              Volver al inicio
            </Button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            type="text"
            label="Nombre"
            onChange={handleChange}
            name="name"
          />
          <TextField
            variant="outlined"
            type="text"
            label="Telefono"
            onChange={handleChange}
            name="phone"
          />
          <TextField
            variant="outlined"
            type="text"
            label="Email"
            onChange={handleChange}
            name="email"
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="secondary"
            type="submit"
          >
            Enviar
          </Button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
