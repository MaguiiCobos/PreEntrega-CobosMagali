import Navbar from "./components/layout/navbar/Navbar.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";

function App() {
  let bienvenida = "¡Bienvenid@ a mi Ecommerce!"
  return (
    <div>
      <Navbar />
      <ItemListContainer gretting={bienvenida}/>
    </div>
  );
}

export default App;
