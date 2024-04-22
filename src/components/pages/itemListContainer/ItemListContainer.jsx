import { useEffect, useState } from "react";
import { cursos } from "../../../ProductsMock";
import "../itemListContainer/ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const {name} = useParams()

  const [items, setItems] = useState([]);

  useEffect(() => {

    let cursosFiltered = cursos.filter( curso => curso.categoria === name )

    const getCursos = new Promise((resolve, reject) => {
      let flag = true;
      if (flag) {
        resolve(name ? cursosFiltered : cursos);
        // setTimeout(() => {
        //   resolve(cursos);
        // }, 1000);
      } else {
        reject("error");
      }
    });

    getCursos
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);


  return ( <ItemList items={items} />);
};

export default ItemListContainer
