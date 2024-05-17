import { useContext, useEffect, useState } from "react";
// import { cursos } from "../../../ProductsMock";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContex";
import Swal from 'sweetalert2'
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore"


const ItemDetailContainer = () => {

    const {id} = useParams()
    const [item, setItem] = useState({})

    const {agregarAlCarrito, obtenerCantidadPorId} = useContext(CartContext)

    let initial = obtenerCantidadPorId(+id)

    useEffect( ()=>{

      let cursosCollection = collection( db , "cursos" )
      let refDoc = doc(cursosCollection,id)
      getDoc(refDoc).then( res => {
        setItem({id: res.id, ...res.data()});
      })
    }, [id] )

    const onAdd = (cantidad) => {
      let curso = {...item, quantify: cantidad}
      agregarAlCarrito( curso )

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Se agregó al carrito",
        showConfirmButton: false,
        timer: 1500
      });
    }

  return (
    <ItemDetail item={item} onAdd={onAdd} initial={initial} />
  )
}

export default ItemDetailContainer