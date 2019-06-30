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

import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    konten: {
        width: "350px",
        padding: "15px"
    },
    flexDirectColumn: {
        display: "flex",
        "flex-direction": "column"
    },
    flexGrow: {
        flex: 1,
        "margin": "auto 10px"
    },
    flexCenter: {
        "display": "flex",
        "align-items": "center",
        "justify-content": "center",
        "height": "100vh"
    },
    list: {
        "margin-top": "25px"
    },
    alignCenter : {
        textAlign:"center"
    }
}));

export default function Signin(props) {

    const classes = useStyles();
    
    return (
        <div className={classes.flexCenter}>
            <Paper className={classes.konten}>
            <Typography variant="h6" className={classes.alignCenter} noWrap>
            Sign In
            </Typography>
                <form className={classes.flexDirectColumn}>
                    <TextField
                        className={classes.flexGrow +" "+ classes.list}
                        label="Email"
                        type="email"
                        variant="outlined"
                        margin="dense"
                        placeholder="Masukan alamat email"
                        InputLabelProps={{ shrink: true }} />
                    <TextField
                        className={classes.flexGrow +" "+ classes.list}
                        label="Password"
                        variant="outlined"
                        margin="dense"
                        type="password"
                        placeholder="Masukan password"
                        InputLabelProps={{ shrink: true }} />
                    <div className={classes.flexGrow + " " + classes.list} >
                        <Button 
                        variant="contained" 
                        color="primary" 
                        style={{ "float": "right" }}
                        onClick={props.onLogIn}>Signin</Button>

                    </div>
                </form>
            </Paper>
        </div>
    )
}