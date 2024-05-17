import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import CounterContainer from "../../coomon/counter/CounterContainer";

const ItemDetail = ({ item, onAdd, initial }) => {
  return (
    <div className="container">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" sx={{ height: 230 }} image={item.img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.descripcion}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {item.precio}
          </Typography>
        </CardContent>

        <CounterContainer stock={item.stock} onAdd={onAdd} initial={initial} />
      </Card>
    </div>
  );
};

export default ItemDetail;
