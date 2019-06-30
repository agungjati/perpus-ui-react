import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'

const useStyles = makeStyles(theme => ({
    konten: {
        width: "350px"
    },
    flexDirectColumn: {
        display: "flex",    
        "flex-direction": "column"
    },
    flexGrow: {
        flex: 1,
        "margin": "auto 10px"
    },
    root: { 
        "height": "100vh", 
        background: "url('/img/bg.jpg')",
        "background-size": "cover"
    },
    flexCenter: {
        "display": "flex",
        "align-items": "center",
        "justify-content": "center",
    },
    list: {
        "margin-top": "25px"
    },
    alignCenter: {
        textAlign: "center",
    }, 
    form : {
        padding: "10px 15px",
        paddingBottom: "35px",
    },
    header : {
        background: "#3f51b5",
        color: "white",
        padding: "20px 0",
        "border-radius": "2px 2px 0 0"
    }
}));

export default function Signin(props) {

    const classes = useStyles();

    return (    
        <div className={classes.flexCenter +" "+ classes.root}>
            <Paper className={classes.konten}>
                <Typography variant="h6" className={classes.flexCenter +" "+ classes.header} noWrap>
                <Icon>exit_to_app</Icon>&nbsp;&nbsp;<span>Sign In</span>
            </Typography>
                <form className={classes.flexDirectColumn +" "+ classes.form}>
                    <TextField
                        className={classes.flexGrow + " " + classes.list}
                        label="Email"
                        variant="outlined"
                        margin="dense"
                        type="email"
                        placeholder="Masukan alamat email"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Icon>account_circle</Icon>
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{ shrink: true }} />
                    <TextField
                        className={classes.flexGrow + " " + classes.list}
                        label="Password"
                        variant="outlined"
                        margin="dense"
                        type="password"
                        placeholder="Masukan password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Icon>keyboard</Icon>
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{ shrink: true }} />
                    <div className={classes.flexGrow + " " + classes.list} >
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ "float": "right" }}
                            onClick={props.onLogIn}>Sign in</Button>
                    </div>
                </form>
            </Paper>
        </div>
    )
}