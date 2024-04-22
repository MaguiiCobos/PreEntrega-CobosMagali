import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 230 }}
          image={item.img}
        />
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
      </Card>
    </div>
  );
};

export default ItemDetail;
