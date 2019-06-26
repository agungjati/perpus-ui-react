import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from '../../images/reactjs.png';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CardHeader from '@material-ui/core/CardHeader';


const useStyles = makeStyles(theme => ({
  card: {
    // maxWidth: 250,
  },
  media: {
    height: 350,
  },
}));


const createObjBuku = (kode, image, judul, deskripsi) => ({ kode, image, judul, deskripsi })

let bukubuku = [
  createObjBuku(10, img, "Pemrogramman Desktop", "lorem ",
    `Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica` ),
  createObjBuku(101, img, "Pemrogramman Desktop", "lorem ",
    `Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica` ),
  createObjBuku(102, img, "Pemrogramman Desktop", "lorem ",
    `Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica` ),
  createObjBuku(11, img, "Pemrogramman Desktop", "lorem ",
    `Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica` ),
  createObjBuku(111, img, "Pemrogramman Desktop", "lorem ",
    `Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica` )
]

const useMyStyles = makeStyles(theme => ({
  containerCard: {
    "& >div": {
      float: "left",
      margin: "1%",
      maxWidth: "calc((100% - 8%)/4)"
    }
  },
  content: {
    display: "flex",
    "flex-direction": "column"
  },
  toolbar : {
    "display": "flex",
    "justify-content": "space-between",
    "align-items" : "center",
    "marginBottom": "20px"
  }

}));

export default function MediaCard() {

  const classes = useStyles(),
    myClases = useMyStyles();

  return (
    <div className={myClases.content}>
      <div className={ myClases.toolbar }>
        <Typography variant="h6" noWrap>
            Daftar Buku
          </Typography>
          <Fab variant="extended" color="primary" aria-label="Add" className={classes.fab}>
            <AddIcon  /> Tambah buku
          </Fab>
      </div>
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <div className={myClases.containerCard}>
            {bukubuku.map(({ kode, image, judul }) => (
              <Card className={classes.card} key={kode}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={image}
                    title={judul}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {judul}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button align="right" size="small" color="primary">
                    Detail
                  </Button>
                </CardActions>
              </Card>))}
          </div>
        </CardContent>
      </Card>

    </div>
  );
}