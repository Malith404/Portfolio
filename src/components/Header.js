import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import malith from '../malith1.png'

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#66CCCC ",
  },
  hello: {
    color: "#70DB93",
  },
  subtitle: {
    color: "#36DBCA	",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={malith} alt="Malith" style={{width:"20%",height:"10%"}}/>
      </Grid>
      <Typography className={classes.hello} variant="h4">
       Hello ! 
        <br></br>
      </Typography>

      <Typography className={classes.title} variant="h4">
              <Typed strings={["I'm, Oshadha Goonathilake"]} />

      </Typography>
      <br></br>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Full-Stack Web-Developer",
            "Data-Science Enthusiast",
            "Cyber Security Enthusiast",
            "Cricket Player"
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>  
        <div className="footerAllignment">  
        <Typography  variant="subtitle2">Copyright © 2021 OSHADHA GOONATHILAKE</Typography>
        </div>
    </Box>
   
  );
};

export default Header;
