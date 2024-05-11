import { useEffect, useState } from "react";
import { cursos } from "../../../ProductsMock";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const {id} = useParams()
    const [item, setItem] = useState({})

    useEffect( ()=>{

        let itemEncontrado = cursos.find( (curso)=> curso.id === +id ) //el signo + nos transforma el numero q viene como string a numero
        const getCurso = new Promise( (resolve, reject)=>{
            resolve(itemEncontrado)
        } )

        getCurso.then((res)=> setItem(res))

    }, [id] )

    const onAdd = (cantidad) => {
      
    }

  return (
    <ItemDetail item={item} onAdd={onAdd} />
  )
}

export default ItemDetailContainer