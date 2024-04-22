import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "../cursoCard/CursoCard.css";
import { Link } from "react-router-dom";

const CursoCard = ({ id, titulo, descripcion, precio, img }) => {
  return (
    <div className="containerCurso">
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia sx={{ height: 200 }} image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {precio}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/itemDetail/${id}`}>
            <Button size="small">Ver detalle</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default CursoCard;
