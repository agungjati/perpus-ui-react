import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/AttachMoney';
import DashboardIcon from '@material-ui/icons/Dashboard'
import useStyles from './App.style';
import MediaCard from './containers/buku/Buku'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Peminjaman from './containers/peminjaman/peminjaman'
import Dashboard from './containers/dashboard/dashboard'
import Icon from '@material-ui/core/Icon';
import InputBase from '@material-ui/core/InputBase';
import Anggota from './containers/anggota/Anggota'
import AddMember from './containers/anggota/add/AddMember'
import Signin from './containers/signin/Signin'

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [isAuth, setIsAuth] = React.useState(false);
  const menus = [{ text: 'Dashboard', link: "/", icon: "dashboard" },
  { text: 'Peminjaman', link: "/peminjaman", icon : "attach_money" },
  { text: 'Buku', link: "/buku" , icon : "book" },
  { text: 'Anggota', link: "/anggota/daftar" , icon : "account_box" }]

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function onLogOut(){
    setIsAuth(false)
  }

  function onLogIn(){
    setIsAuth(true)
  }

  return (
    <Router>
      {isAuth == false ? <Signin onLogIn={onLogIn} />:
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          color="primary"
        >
          <Toolbar className={classes.flexbetween}>
            <div className={classes.flexbetween}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Penyimpanan Buku
          </Typography>
            </div>
            <div className={classes.flexbetween}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ 'aria-label': 'Search' }}
                />
              </div>
              <Tooltip title="Log Out">
                <IconButton color="inherit" className={classes.button} onClick={onLogOut} >
                  <ExitToAppIcon />
                </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <Typography align="center" variant="h6" color="primary" >
              <IconButton color="primary">Libra</IconButton>
            </Typography>

            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {menus.map(({ text, link, icon }, index) => (
              <ListItem button key={index}>
                <ListItemIcon>
                <Icon>{ icon }</Icon>
                </ListItemIcon>
                <Link to={link} className={classes.menu}>
                  <ListItemText primary={text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Route path="/" exact component={Dashboard} />
          <Route path="/buku" component={MediaCard} />
          <Route path="/peminjaman" component={Peminjaman} />
          <Route path="/anggota/daftar" component={Anggota} />
          <Route path="/anggota/tambah" component={AddMember} />
        </main>
      </div>}
    </Router>
  );
}
