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
    }
}));

export default function AddMember() {

    const classes = useStyles();

    return (
        <div>
            {/* <div className={classes.header}>
                <Typography variant="h6" noWrap>
                    Daftar Anggota
                </Typography>
                <Link to='/anggota/tambah'>
                <Fab variant="extended" color="primary" aria-label="Add" >
                    <AddIcon /> Tambah anggota
          </Fab>
          </Link>
            </div> */}
            <Paper className={classes.konten}>
                ok
            </Paper>
        </div>
    )
}