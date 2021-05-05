import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Particles from "./Particles";
import '../components/resume.css'
import GetAppIcon from '@material-ui/icons/GetApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import 'font-awesome/css/font-awesome.min.css';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#344152",
    height:"100vh"
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));


const Resume = () => {
    const classes = useStyles();

  return (
    
    <React.Fragment>
    <Particles />
    <div class="ma0 " style={{height:"100%",backgroundColor:"black"}}>
       <div class="grid-layout-1">

        <main class="main" role="main" id="mainContent">

            <h1 id="monikapatel" style={{color:"#67E6EC",marginLeft:"-10%"}}>Oshadha Goonathilake</h1>

            <p style={{color:"#B0E0E6",textAlign:"center",marginLeft:"-10%"}}>
            Hi Everyone, I am Oshadha Goonathilake from Sri Lanka.
            I am an Undergraduate student following the BEng(Hons) Software Engineering in Informatics Institute of Technology(IIT) 
            affliated with Unversity of Westminster, United Kingdom.

            </p>

            <div class="grid">
                <div class="col -span-cols-6 -m-right-2" style={{marginLeft:"-40%"}}>
                  <div className="element">
                    <h2 id="professional-experience" style={{color:"tan"}}>Education</h2>
                    <br>
                    </br>
                    <br></br>

                   <h3 id="solutiondynamics-dotnetdeveloper" style={{fontWeight:"bold",color:"#539DC2"}}> BENG.(HONS) SOFTWARE ENGINEERING
                    </h3>
                    <h6><em>Informatics Institute of Technology, Colombo 06 | 2020</em></h6>


                    <p style={{color:"white",width:"100%"}}>
                    Level 04 (1st Year) 
                    <br></br>
                    <br></br>
                    Programming Principles 1 (Python),
                    Computer Science Practice, 
                    Computer System Fundamental, 
                    Mathematics for Computing, 
                    Programming Principle 2 (Java), 
                    Web Design and Development, 
                    </p>
                    <br></br>
                    <br></br>


                  <h3 id="solutiondynamics-dotnetdeveloper" style={{fontWeight:"bold",color:"#539DC2"}}> BENG.(HONS) SOFTWARE ENGINEERING
                    </h3>
                    <h6><em>Informatics Institute of Technology, Colombo 06 | 2020</em></h6>


                    <p style={{color:"white",width:"100%"}}>
                    Level 04 (1st Year) 
                    <br></br>
                    <br></br>
                    Programming Principles 1 (Python),
                    Computer Science Practice, 
                    Computer System Fundamental, 
                    Mathematics for Computing, 
                    Programming Principle 2 (Java), 
                    Web Design and Development, 
                    </p>
                    <br></br>
               
                    <br>
                    </br>
                    <br></br>

                   <h3 id="solutiondynamics-dotnetdeveloper" style={{fontWeight:"bold",color:"#539DC2"}}> GCE Ordinary level
                    </h3>
                    <h6><em>Vidura COllege, Thalawathugoda | 2018</em></h6>


                    <p style={{color:"white",width:"100%"}}>
                    6A Passes | 3B Passes
                    </p>
                    <br></br>
                    <br></br>



                     <h2 id="professional-experience" style={{color:"tan"}}>Extra-curricular Activities</h2>

                   
                    <ul style={{color:"white"}}>
                        <li>Member of School Cricket Team</li>
                        <li>Member of IIT(University) Cricket Team</li>
                        <li>Member of LR Cricket Academy</li>
                        <li>Member of School Environment Society</li>
                        <li>Photography</li>
                    </ul>
                    <h2 id="professional-experience" style={{color:"tan"}}>Personal Skills</h2>

                   
                    <ul style={{color:"white"}}>
                      <li>Goal oriented and adaptive individual</li>
                      <li> Goal oriented and adaptive individual</li>
                       <li> Quick learner and dedicated to work</li>
                      <li>Teamwork and Communication skills</li>
                    </ul>                    
                </div>
                </div>
                <div className="element-right">

                <div class="col -span-cols-4 -p-left-3" style={{marginLeft:"80px",width:"400px"}}>

                    <h4 id="fluent-with" style={{color:"tan"}}>Fluent with</h4>

                    <ul>

                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Angular</li>
                        <li>React JS</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>Play Framework</li>
                        <li>Flask</li>
                        <li>MySQL</li>
                        <li>PHP</li>

                    </ul>

                    <h4 id="familiar-with" style={{color:"tan"}}>Familiar with</h4>

                    <ul>
                        <li>IntelliJ IDEA</li>
                        <li>Pycharm</li>
                        <li>NetBeans</li>
                        <li>Visual Studio Code</li>
                        <li>Notepad++</li>                  

                    </ul>

                    {/* <h4 id="other-info">Other Info</h4> */}

                    <dl>
                        <dt style={{color:"#999"}}><strong>Language:</strong>
                        <br></br><br></br>

                        <dd>English - Fluent</dd>
                        <dd>Sinhala - Fluent</dd></dt>

                    </dl>

                    <h2 id="hobbies-interests" style={{color:"tan"}}>Interests</h2>

                    <ul>
                        <li>Data Science</li>
                        <li>Cyber Security</li>
                        <li>Server Side Web Development</li>
                    </ul>

                    <h2 id="references" style={{color:"tan"}}>Contacts</h2>


                    <ul className="social-mediaIcons">
                        <li><i class="fa fa-twitter fa-2x" aria-hidden="true" ></i>&nbsp;&nbsp;&nbsp;<a href="https://twitter.com/MALITH27615974?s=09">https://twitter.com/MALITH27615974?s=09</a></li>
                        <li><i class="fa fa-linkedin fa-2x" aria-hidden="true" ></i>&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/in/oshadha-goonathilake" target="_blank">https://www.linkedin.com/in/oshadha-goonathilake</a></li>
                        <li><i class="fa fa-github fa-2x" aria-hidden="true" ></i>&nbsp;&nbsp;&nbsp;<a href="https://github.com/Malith404" target="_blank">https://github.com/Malith404</a></li>
                        <li><i class="fa fa-envelope-square fa-2x" aria-hidden="true" ></i>&nbsp;&nbsp;&nbsp;<a href="oshadamalith123@gmail.com" target="_blank">oshadamalith123@gmail.com</a></li>

                   </ul>
                </div>
                </div>


                <div id="drawing" ></div>

                <footer class="-m-auto -border-top -em-08 -lineheight-1-3 footer -text-left" >
                  <div className="copyrightAlign">
                  <p class="-clearfix -text-center lastpublished -em-07" style={{width:"350px",fontSize:"0.8rem"}}>Copyright © 2021 OSHADHA GOONATHILAKE</p>
                   </div>
                </footer>
     
    </div>
    </main>
    </div>
    </div>
    </React.Fragment>
  );
};


export default Resume;
