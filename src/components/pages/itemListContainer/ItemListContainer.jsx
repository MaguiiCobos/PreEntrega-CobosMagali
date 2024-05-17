import { useEffect, useState } from "react";
// import { cursos } from "../../../ProductsMock";
import "../itemListContainer/ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { cursos } from "../../../ProductsMock";

const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const cursosCollection = collection(db, "cursos");
    let x = cursosCollection
    if(name){
      x = query(cursosCollection, where("categoria", "==", name));   //filtrar por categoria
    }
    getDocs(x).then((res) => {
      let nuevoArreglo = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(nuevoArreglo);
    });
  }, [name]);

  // const addDocsProducts = () =>{   //para rellenar la db con el arreglo de ProdutsMock
  //   let cursosCollection = collection(db,"cursos")
  //   cursos.forEach(curso => addDoc(cursosCollection, curso))
  // }

  if (items.length === 0) {
    return (
      <div className="contenedor">
        <div className="titulo">
          <Skeleton
            variant="text"
            sx={{ fontSize: "1rem" }}
            width={100}
            height={50}
          />
        </div>
        <div className="divLoader">
          <div className="divCard">
            <Skeleton variant="rounded" width={300} height={200} />
            <Skeleton
              variant="text"
              sx={{ fontSize: "0.8rem" }}
              width={100}
              height={50}
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "0.5rem" }}
              width={300}
              height={50}
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "0.5rem" }}
              width={80}
              height={30}
            />
          </div>
          <div className="divCard">
            <Skeleton variant="rounded" width={300} height={200} />
            <Skeleton
              variant="text"
              sx={{ fontSize: "0.8rem" }}
              width={100}
              height={50}
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "0.5rem" }}
              width={300}
              height={50}
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "0.5rem" }}
              width={80}
              height={30}
            />
          </div>
          <div className="divCard">
            <Skeleton variant="rounded" width={300} height={200} />
            <Skeleton
              variant="text"
              sx={{ fontSize: "0.8rem" }}
              width={100}
              height={50}
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "0.5rem" }}
              width={300}
              height={50}
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "0.5rem" }}
              width={80}
              height={30}
            />
          </div>
          <div className="divCard">
            <Skeleton variant="rounded" width={300} height={200} />
            <Skeleton
              variant="text"
              sx={{ fontSize: "0.8rem" }}
              width={100}
              height={50}
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "0.5rem" }}
              width={300}
              height={50}
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "0.5rem" }}
              width={80}
              height={30}
            />
          </div>
        </div>
      </div>
    );
  }

  return ( 
    <>
      <h2>Cursos</h2>
      <ItemList items={items} />

      {/* <button onClick={addDocsProducts}>Agregar documentos</button> */} {/* al hacer click se llena la db */}
      
    </>
  );
};

export default ItemListContainer;
