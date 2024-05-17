import LocalMallIcon from "@mui/icons-material/LocalMall";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContex";

const CartWidget = () => {
  const {totalItems} = useContext(CartContext);
  let total = totalItems()

  return (
    <Badge badgeContent={total} color="secondary" showZero>
      <LocalMallIcon />
    </Badge>
  );
};

export default CartWidget;
