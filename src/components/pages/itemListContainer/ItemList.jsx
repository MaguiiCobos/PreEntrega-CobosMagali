import CursoCard from "../../coomon/cursoCard/CursoCard";

const ItemList = ({ items }) => {
  return (
    <div className="container">
      {items.map(({ id, titulo, descripcion, precio, img }) => {
        return (
          <CursoCard 
            key={id}
            titulo={titulo}
            descripcion={descripcion}
            precio={precio}
            img={img}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
