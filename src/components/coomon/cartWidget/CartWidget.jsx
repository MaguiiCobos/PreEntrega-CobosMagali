import LocalMallIcon from '@mui/icons-material/LocalMall';
import Badge from '@mui/material/Badge';

const CartWidget = () => {
  return (
    <Badge badgeContent={0} color="secondary" showZero>
        <LocalMallIcon />
    </Badge>
    
  );
};

export default CartWidget;
