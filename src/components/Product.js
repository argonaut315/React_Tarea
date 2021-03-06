import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from 'accounting';

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);
  const [itemCount, setItemCount] = React.useState(1);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader

        action={
          <Typography 
             
             variant='h5'
             color='textSecondary'
             >
               {accounting.formatMoney(50)}
             </Typography>
        }
        title="Planets"
        subheader="In stock"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://p1.pxfuel.com/preview/824/862/412/neptune-planet-solar-system-atmosphere.jpg"
        alt="Nepthune"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Milk Away
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='Add to cart' >
          <AddShoppingCart fontSize='large'/>
        </IconButton>
         {Array(4)
         .fill()
         .map((_, i) =>(
             <p>&#11088;</p>
         ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <div style={{ display: "block", padding: 30 }}>
      <h4></h4>
      <div>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Neptuno es oscuro, fr??o y muy ventoso. Es el ??ltimo de los planetas de nuestro sistema solar. Est?? m??s de 30 veces m??s lejos del Sol que la Tierra. Neptuno es muy parecido a Urano. Est?? compuesto de una espesa mezcla de agua, amoniaco y metano sobre un centro s??lido del tama??o de la Tierra. Su atm??sfera se compone de hidr??geno, helio y metano. El metano le da a Neptuno el mismo color azul de Urano. Neptuno tiene seis anillos que no se ven f??cilmente.</Typography>
        </CardContent>
      </Collapse>
    </Card>
    
  );
}

