import React from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    header: {
        "display": "flex",
        "justify-content": "space-between",
        "align-items": "center",
        "margin-bottom": "15px"
    },
    konten: {
        padding: "15px"
    },
    list: {
        "margin-top": "15px"
    },
    buttonAdd: {
        position: "fixed",
        bottom: "10%",
        right: "3%",
        "z-index": 9999
    }
}));

export default function Anggota() {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.header}>
                <Typography variant="h6" noWrap>
                    Daftar Anggota
                </Typography>
                <Link to='/anggota/tambah'>
                    <Fab variant="round" className={classes.buttonAdd} color="primary" aria-label="Add" >
                        <AddIcon /> 
          </Fab>
                </Link>
            </div>
            <Paper className={classes.konten}>
                <Card className={classes.list}>
                    <CardContent>
                        <Typography variant="h6" noWrap>
                            Naruguk
                        </Typography>
                        Dari kelas X RPL B, sukanya pinjam komik one piece
                        dan biasanya nongkrong di PC perpus cuman mau baca manga.
                    </CardContent>
                </Card>
                <Card className={classes.list}>
                    <CardContent>
                        <Typography variant="h6" noWrap>
                            Roel
                        </Typography>
                        Dari kelas X RPL B, suka baca komik one piece.
                    </CardContent>
                </Card>
                <Card className={classes.list}>
                    <CardContent>
                        <Typography variant="h6" noWrap>
                            Otong2
                        </Typography>
                        Dari kelas X RPL A, suka pake wifi perpus untuk main mobile legend.
                    </CardContent>
                </Card>
            </Paper>
        </div>
    )
}