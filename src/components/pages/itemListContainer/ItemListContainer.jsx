import "../itemListContainer/ItemListContainer.css";

const ItemListContainer = ({gretting}) => {
  return (
    <div className="container">
        <h1 style={{color:"black", margin:"10px"}}>{gretting}</h1>
    </div>
  )
}

export default ItemListContainer