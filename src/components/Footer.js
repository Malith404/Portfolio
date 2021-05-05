import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#222",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<TwitterIcon />} className={classes.root} href="https://twitter.com/MALITH27615974?s=09"/>
      <BottomNavigationAction icon={<LinkedInIcon />} className={classes.root} href="https://www.linkedin.com/in/oshadha-goonathilake" />
      <BottomNavigationAction icon={<GitHubIcon />} className={classes.root} href="https://github.com/Malith404"/>
    </BottomNavigation>
  );
};
export default Footer;
