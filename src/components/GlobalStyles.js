import { createGlobalStyle } from "styled-components";
import FuturaRoundLight from "../fonts/FuturaRoundLight.ttf"; // Adjust the path based on your structure
import JuanaRegular from "../fonts/fontspring-demo-juana-regular-webfont.woff";
const GlobalStyles = createGlobalStyle`
/*
=============== 
Variables
===============
*/
:root {
  --primary-light: #b0edfd;
  /* Primary Color */
  --primary: #61DBFB;
  --primary-dark: #316e7e;
  --border: 0px solid black;
  --transition: all 0.3s linear;
  --nav-height: 61px;
  --min-footer-height: 11vh;
  --primaryAddress: red;
}

/*
=============== 
Global Styles
===============
*/
@font-face {
    font-family: "Futura Round Light";
    src: url(${FuturaRoundLight}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Juana Regular";
    src: url(${JuanaRegular}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }

.bg-light {
  background-color: #ebe6e2 !important;
}

body {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
}

a:hover {
  cursor: pointer;
}

.navbar {
  border-bottom: var(--border);
}

.link-icons {
  line-height: 0;
  font-size: 2.25rem;
  transition: var(--transition);
  color: ${({ theme }) => theme.color};

  &:hover {
        color: var(--primary);
      }
}
// logo height done here
img:not(.nav-logo) {
  width: 100%;
  height: 75px;
  display: block;
}

.section {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: var(--nav-height) 0;

}

.sectionProjects {
  min-height: 30vh;
  display: grid;
  place-items: center;
  padding: var(--nav-height) 0;

}

.heroA {
font-family:  "Futura Round Light";
}
.heroB {
font-family:  "Futura Round Light";
font-weight: bolder;
}
.JuanaRegualarOne {
font-family: "Juana Regular";
color: #c72020;
font-size: 40px;
}

.JuanaRegualarTwo {
font-family: "Juana Regular";
color: #c72020;
font-size: 40px;
padding-bottom: -40px;
}

.JuanaRegualarThree {
font-family: "Juana Regular";
color: #c72020;
font-size: 40px;
padding-bottom: 40px;
}

.title {
    font-family: "Futura Round Light" !important;
}

.nav-link {
 
  font-family: "Futura Round Light" !important;
  font-size: 22px;
  /* Change this to the color you want */
  /* Other styles for regular links */
}

.card {
  height: 30rem;
  border: var(--border);
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }

  .card-img-top {
    height: 50%;
    object-fit: contain;
  }
}

@media screen and (min-width: 800px) {
  .link-icons {
    font-size: 3rem;
  }
  .form-group {
      max-width: 750px;
    }
}

 @media screen and (min-width: 1367px) {
  .link-icons:hover {
    color: var(--primary);
  }
  }
`;

export default GlobalStyles;
