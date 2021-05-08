import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import underConstruction from "../images/underConstruction.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";
import Particles from "./Particles";

import '../components/portfolio.css'

import genimen from "../images/genimen.png";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "black",
    height: "100%",
  
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
    boxShadow:"0 4px 5px 3px #3c3c3c !important;",
    color:"#fff !important",
    backgroundColor:"black !important",
    opacity:".9 !important",
    transition:"all .5s ease 0s !important",

  },
  
}));

const projectGenimen = [
  {
    name: "Genimen",
    description: `The problem discussed arises with the nature of the modern-day market.
     With immense competition and humongous customer base to cater it is often considered 
     tedious and difficult to approach the market with new services and products. Especially this 
     is an amplification of the problem when considered the routes to approach the market. This project 
     aims to simplify the research and the time that needed when coming up with new strategies to establish 
     new products.`,
    image: genimen,    
    
  },
];

const otherProjects = [
  {
    name: "Project 2",
    description: "An under-construction project is a project that can be placed instead of your future project,\
        while you fill it with content, select a design and get ready for a full release. \
       Doing a software project is not a quick deal. You need to think thoroughly over design, user journey,\
       & all the features, not to mention the very development process. Still, there are some options to\
       make this process easier – you can use site builders, where it’s possible to create a full-fledged \
       project. ",
    image: underConstruction,
  },
  {
    name: "Project 3",
    description: "An under-construction project is a project that can be placed instead of your future project,\
    while you fill it with content, select a design and get ready for a full release. \
   Doing a software project is not a quick deal. You need to think thoroughly over design, user journey,\
   & all the features, not to mention the very development process. Still, there are some options to\
   make this process easier – you can use site builders, where it’s possible to create a full-fledged \
   project. ",
    image: underConstruction,
  },
  {
    name: "Project 4",
    description: "An under-construction project is a project that can be placed instead of your future project,\
    while you fill it with content, select a design and get ready for a full release. \
   Doing a software project is not a quick deal. You need to think thoroughly over design, user journey,\
   & all the features, not to mention the very development process. Still, there are some options to\
   make this process easier – you can use site builders, where it’s possible to create a full-fledged \
   project. ",
    image: underConstruction,
  },
  {
    name: "Project 5",
    description: "An under-construction project is a project that can be placed instead of your future project,\
    while you fill it with content, select a design and get ready for a full release. \
   Doing a software project is not a quick deal. You need to think thoroughly over design, user journey,\
   & all the features, not to mention the very development process. Still, there are some options to\
   make this process easier – you can use site builders, where it’s possible to create a full-fledged \
   project. ",
    image: underConstruction,
  },
  {
    name: "Project 6",
    description: "An under-construction project is a project that can be placed instead of your future project,\
    while you fill it with content, select a design and get ready for a full release. \
   Doing a software project is not a quick deal. You need to think thoroughly over design, user journey,\
   & all the features, not to mention the very development process. Still, there are some options to\
   make this process easier – you can use site builders, where it’s possible to create a full-fledged \
   project. ",
    image: underConstruction,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
    <Particles />
    <Box component="div" className="mainContainer">
  
      <Grid container justify="center" >
     
        {/* Projects */}
        {projectGenimen.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i} >
         <br></br>
         <br></br>     
        <Typography variant="h5" style={{marginLeft:"24%",color:"#00FFFF"}} gutterBottom>
              My Recent <span style={{color:"#00FFCC",fontWeight:"bold"}} >Works</span> 
        </Typography>
          <Typography variant="caption" style={{marginLeft:"15%",marginBottom:"-25%",color:"white"}} gutterBottom>
            Here are a few projects I've worked on recently 
          </Typography>
            <br></br>           
            <Card className="boxHover">
              <CardActionArea>
                <CardMedia
                className={classes.images}
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="caption" color="white">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* <Button size="small" color="primary">
                  Share
                </Button> */}
                <Button size="small" color="primary" href="https://genimen.netlify.app/home" style={{marginLeft:"35%"}}>
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
{/* 
      {otherProjects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                className={classes.images}
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                /> */}
                {/* <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions> */}
                {/* <Button size="small" color="primary">
                  Share
                </Button> */}
                {/* <Button size="small" color="primary"  style={{marginLeft:"35%"}}>
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))} */}
      </Grid>
    </Box>
    </React.Fragment>
  );
};

export default Portfolio;
