// import React from "react";
// import Typography from "@material-ui/core/Typography";
// import Avatar from "@material-ui/core/Avatar";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import Typed from "react-typed";
// import { makeStyles } from "@material-ui/core/styles";
// import avatar from "../avatar.png";
// import malith from '../images/malith.jpg'
// import Particles from "./Particles";

// const useStyles = makeStyles((theme) => ({

//   avatar: {
//     width: theme.spacing(15),
//     height: theme.spacing(15),
//     margin: theme.spacing(1),
//   },
//   title: {
//     marginLeft:"4%",
//     color: "#98F5FF",
//   },
//   subtitle: {
//     color: "white	",

//   },
//   quote: {
//     color: "#00FFCC",
//     marginTop:"10%",
//     marginLeft:"50%"
//   },
//   typedContainer: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%,-50%)",
//     width: "60vw",
//     textAlign: "center",
//     zIndex: 1,

//   },
  
// }));

// const About = () => {
//   const classes = useStyles();

//   return (
//     <React.Fragment>
//     <Particles />
//     <Box className={classes.typedContainer}>
//       <Grid container justify="center">
//         <Avatar className={classes.avatar} src={malith} alt="Mahmudul Alam" />
//       </Grid>
//       <Typography className={classes.title} variant="h4">
//         <Typed strings={["Hey Everyone, Get to know about me !"]} typeSpeed={40} />
//       </Typography>
//       <br></br>
//       <br></br>

//       <Typography className={classes.subtitle} variant="h6">
//       I am a software engineering undergraduate at IIT, Sri Lanka (Affiliated
//        with University of Westminster U.K). Improving my skills 
//     in design, development, testing and implementation of programming 
//     languages and web-based applications. 

//     </Typography>  
//       <p className={classes.quote}>"The Harder The Battle, The sweeter The Victory"</p>
//       <p style={{marginTop:"1%",marginLeft:"80%",color:"#00FFCC"}}>-Les Brown</p>

//     </Box>


//     </React.Fragment>
   
//   );
// };

// export default About;


import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import malith from '../images/malith2.png'
import '../components/about.css'
import IITRedbull from '../images/IITRedbull.jpg'
import photography from '../images/photography.jpg'

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
    color: "white	",
    textAlign:"justify",
    width:"50%",
    marginLeft:"25%"
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

const About = () => {
  const classes = useStyles();

  return (
    <div style={{backgroundColor:"#BaB2B5",height:"100%",margin:"0"}}>
 {/* <div style={{textAlign:"center"}}>
  <h2>Responsive Zig Zag Layout Example</h2>
</div> */}

<div class="container" >
  <div class="row">
    <div class="column-66">
      <h1 class="xlarge-font"><b>WHO AM I ?</b></h1>
      <h1 class="large-font" style={{color:"MediumSeaGreen"}}><b> <Typed strings={["Read About Myself"]} typeSpeed={40}/></b></h1>
      <p><span style={{fontSize:"36px"}}>I am a software engineering undergraduate</span>  at IIT, Sri Lanka (Affiliated
      with University of Westminster U.K). Improving my skills in design, development, testing and implementation of 
     software and web-based applications. 
    </p>
      <button class="button">"The Harder The Battle, The Sweeter The Victory" - Les Brown</button>
    </div>
    <div class="column-33">
        <img src={malith} width="485" height="471"></img>
    </div>
  </div>
</div>

<div class="container" style={{background:"#C2CAD0"}}>
  <div class="row">
    <div class="column-33">
      <img src={IITRedbull} alt="App" width="585" height="451"></img>
    </div>
    <div class="column-66">
      <h1 class="xlarge-font"><b>Cricket</b></h1>
      <h1 class="large-font" style={{color:"red"}}><b>Passion is energy</b></h1>
      <p><span style={{fontSize:"24px"}}>From my school days</span> cricket became a part of my life. When I am playing for the school I joined LR cricket academy which drives to a clear path in my cricket career.
      After that I joind the cricket team of my university(IIT) where I am currently playing at.</p>
      <button class="button" style={{backgroundColor:"red"}}> “Life is like Cricket, Take Infinite Wickets and Face the Pace to Win the Race”</button>
    </div>
  </div>
</div>
<div class="container" >
  <div class="row">
    <div class="column-66">
      <h1 class="xlarge-font"><b>Photography</b></h1>
      <h1 class="large-font" style={{color:"MediumSeaGreen"}}><b>A revolution in resolution</b></h1>
      <p><span style={{fontSize:"36px"}}>Nikon certified photography course</span> created a photographer from me where now I can keep my memories as a professional.
      Photography can tell stories, give people new perspectives and ways of seeing the world.</p>
      <button class="button">“Photography is the art of making memories tangible”</button>
    </div>
    <div class="column-33">
        <img src={photography} width="435" height="471" ></img>
    </div>
  </div>
</div>
</div>
  );
};

export default About;
