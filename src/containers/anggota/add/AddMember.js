import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField'
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
    flexDirectColumn: {
        display: "flex",
        "flex-direction": "column"
    },
    flexDirectRow: {
        display: "flex",
        "flex-direction": "row"
    },
    flexGrow: {
        flex: 1,
        "margin": "auto 10px"
    },
    list: {
        "margin-top": "15px"
    },
}));

export default function AddMember() {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.header}>
                <Typography variant="h6" noWrap>
                    Tambah anggota
                </Typography>
            
            </div>
            <Paper className={classes.konten}>
                <form className={classes.flexDirectColumn}>
                    <div className={classes.flexDirectRow + " " + classes.list}>
                        <TextField
                            className={classes.flexGrow}
                            label="Nama depan"
                            variant="outlined"
                            margin="dense"
                            placeholder="Masukan nama depan"
                            InputLabelProps={{ shrink: true }} />
                        <TextField
                            className={classes.flexGrow}
                            label="Nama belakang"
                            variant="outlined"
                            margin="dense"
                            placeholder="Masukan nama belakang"
                            InputLabelProps={{ shrink: true }} />
                    </div>
                    <div className={classes.flexDirectRow + " " + classes.list}>
                        <TextField
                            className={classes.flexGrow}
                            label="Email"
                            variant="outlined"
                            margin="dense"
                            type="email"
                            placeholder="Masukan email yang valid"
                            InputLabelProps={{ shrink: true }} />
                        <TextField
                            className={classes.flexGrow}
                            label="Telepom"
                            variant="outlined"
                            margin="dense"
                            placeholder="Masukan nomor telepon +62"
                            InputLabelProps={{ shrink: true }} />
                    </div>
                    <TextField
                        className={classes.flexGrow + " " + classes.list}
                        label="Asal"
                        variant="outlined"
                        multiline
                        placeholder="Masukan alamat yang dikenali"
                        InputLabelProps={{ shrink: true }} />
                    <div className={classes.flexGrow + " " + classes.list} >
                    <Link to="/anggota/daftar" style={{ "text-decoration":"none"  }} ><Button >Kembali</Button></Link>
                    <Button variant="contained"  color="primary" style={{ "float":"right"  }}>Simpan</Button>
                  </div>
                </form>
            </Paper>
        </div>
    )
}