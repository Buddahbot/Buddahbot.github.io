// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithubSquare,
  FaLink,
  FaNodeJs,
  FaSql
} from "react-icons/fa";

import {
  TbSql
} from "react-icons/tb";


import {
  SiJavascript,
  SiStyledcomponents,
  SiRedux,
  SiSolidity,
  SiMongodb,
  SiMysql,
  SiStrapi,
  SiHtml5
} from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
import Screen from "./images/charoo-screen.png";
import AuthcateScreen from "./images/authcate-screen.png";
import CandyCrushGameScreen from "./images/candy-crush-game-screen.png";
import AuthcateAdminScreen from "./images/authcate-admin-screen.png";
import SebastianCv from "./images/sebastian-cv-screen.png";
import PortfolioScreen from "./images/portfolio-screen.png";
import Vaultoro from "./images/Vaultoro-com.png";
// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "buddahbot";

// Blog link icon (imported above)
export const Blog = <FaLink />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Full Stack Front & Back End Developer, Running Enthusiast. Always learning." +
  "                                 Born in Hamburg, Germany, I grew up in Berlin, Edinburgh, Scotland and Adelaide, Australia. I speak German, English and Spanish fluently.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 2,
    skill: <SiSolidity className="display-4" />,
    name: "Solidity",
  },
  {
    id: 3,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
  {
    id: 4,
    skill: <SiRedux className="display-4" />,
    name: "Redux",
  },
  {
    id: 5,
    skill: <SiMysql className="display-4" />,
    name: "SQL",
  },
  {
    id: 6,
    skill: <SiMongodb className="display-4" />,
    name: "MongoDB",
  },
  {
    id: 7,
    skill: <FaNodeJs className="display-4" />,
    name: "NodeJS",
  },
  {
    id: 8,
    skill: <SiStrapi className="display-4" />,
    name: "Strapi",
  },
  {
    id: 9,
    skill: <FaBootstrap className="display-4" />,
    name: "BootStrap",
  },
  {
    id: 10,
    skill: <FaCss3Alt className="display-4" />,
    name: "CSS",
  },
  {
    id: 11,
    skill: <SiHtml5 className="display-4" />,
    name: "HTML",
  },
  {
    id: 12,
    skill: <SiStyledcomponents className="display-4" />,
    name: "Styled Components",
  },
  {
    id: 13,
    skill: <FaGithubSquare className="display-4" />,
    name: "Git",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume =
  "https://github.com/Buddahbot/resume/blob/master/Sebastian-Sibila-cv.pdf";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["String", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "Screen",
    image: Screen,
  },
  {
    name: "Charoo-front",
    image: Screen,
  },
  {
    name: "charoo-back",
    image: Screen,
  },
  {
    name: "Vaultoro",
    image: Vaultoro,
  },
  {
    name: "gigas",
    image: AuthcateScreen,
  },
  {
    name: "candy-crush-game",
    image: CandyCrushGameScreen,
  },
  {
    name: "gigasfinal",
    image: AuthcateAdminScreen,
  },
  {
    name: "resume",
    image: SebastianCv,
  },
  {
    name: "buddahbot.github.io",
    image: PortfolioScreen,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
