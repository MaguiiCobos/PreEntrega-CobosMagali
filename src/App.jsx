import Layout from "./components/layout/Layout";
import CartContainer from "./components/pages/cart/CartContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/pages/notFound/NotFound";
import Checkout from "./components/pages/checkout/Checkout";
import CartContexProvider from "./context/CartContex";

function App() {
  return (
    <BrowserRouter>
      <CartContexProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartContexProvider>
    </BrowserRouter>
  );
}

export default App;
