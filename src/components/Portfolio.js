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

import genimen from "../images/genimen.png";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
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
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projectGenimen.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
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
                  <Typography variant="body2" color="textSecondary">
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
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* <Button size="small" color="primary">
                  Share
                </Button> */}
                <Button size="small" color="primary"  style={{marginLeft:"35%"}}>
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
