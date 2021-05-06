import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import ArrowBack from "@material-ui/icons/ArrowBack";
import DescriptionIcon from '@material-ui/icons/Description';
import Home from "@material-ui/icons/Home";
import Apps from "@material-ui/icons/Apps";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ContactMail from "@material-ui/icons/ContactMail";
import { makeStyles } from "@material-ui/core/styles";
import malith from "../../src/images/malith.jpg";
import Footer from "../components/Footer";
import 'font-awesome/css/font-awesome.min.css';
import phoenix from '../images/ww.png'

const useStyles = makeStyles((theme) => ({


  appbar: {
    background: "#3d3d3d",
    margin: 0,
  },
  arrow: {
    color: "tomato",
  },
  title: {
    color: "#00FFCC",
  },
  menuSliderContainer: {
    width: 250,
    background: "#42526C",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "#98F5FF",
  },
}));

const menuItems = [
  { listIcon: <Home />, listText: "Home", listPath: "/" },
  { listIcon: <DescriptionIcon />, listText: "Resume", listPath: "/resume" },
  { listIcon: <Apps />, listText: "Projects", listPath: "/portfolio" },
  { listIcon: <AccountBoxIcon />, listText: "About", listPath: "/about" },
];

// { listIcon: <ContactMail />, listText: "Contact", listPath: "/contact" },


const Navbar = () => {
  
  const [open, setOpen] = useState(false);

  const classes = useStyles();

 

  const sideList = () => (
    <Box className={classes.menuSliderContainer} component="div" >
      <Avatar className={classes.avatar} src={malith} alt="Malith" />
      <Divider />
      <List>
        {menuItems.map((item, i) => (
          <ListItem
            button
            key={i}
            className={classes.listItem}
            onClick={() => setOpen(false)}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listItem}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText className={classes.listItem} primary={item.listText} />
          </ListItem>          
        ))}
        <a href='/Oshadha Malith Goonathilake.pdf' target='_blank' rel='noopener noreferrer'> 
           <button class="btn"><i class="fa fa-download"></i>&nbsp;&nbsp;&nbsp; Download CV</button>
        </a>

      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Box component="nav">
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <ArrowBack className={classes.arrow} />
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              Menu
            </Typography>
        
            <img src={phoenix} style={{width:"5%",height:"5%",float:"right",marginLeft:"80%"}}></img>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
