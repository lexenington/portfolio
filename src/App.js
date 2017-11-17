import React from "react";
import HeaderContainer from "./components/Header";
import NavbarCustom from "./components/Navbar"
import SkillsContainer from "./components/Skills";
import ProjectsContainer from "./components/Projects";
import Footer from "./components/Footer";

let links = [
  {
    name: "Skills",
    url: "#skills-section"
  }, {
    name: "Projets",
    url: "#projects-section"
  }, {
    name: "Contact",
    url: "#"
  }
]

let footerSocial = [
  {
    name: "facebook",
    url: "http://www.facebook.com/lexenington"
  }, {
    name: "twitter",
    url: "http://www.twitter.com/lexenington"
  }, {
    name: "linkedin",
    url: "https://www.linkedin.com/in/lexenington/"
  }, {
    name: "github",
    url: "https://github.com/lexenington"
  }
]

let mySkills = [
  {
    name: "HTML",
    url: "https://cdn.churchm.ag/wp-content/uploads/2011/04/html5-logo.png"
  },
  {
    name: "CSS",
    url: "https://mosaicdigitalmedia.co.uk/wp-content/uploads/2017/09/css3.png"
  },
  {
    name: "JavaScript",
    url: "http://www.logotypes101.com/logos/531/E9BC19EB93F4FEA9236932ABAD8A7CFF/js.png",
  },
  {
    name: "Boostrap",
    url: "https://i.imgur.com/EwZiUNm.png"
  },
  {
    name: "ReactJS",
    url:"http://agileengine.com/wordpress/wp-content/uploads/2016/08/reactJS-300x300.png"
  },
  {
    name: "Redux",
    url: "https://camo.githubusercontent.com/77516f02a7fa8991a5d30524107a3d059701e6e5/68747470733a2f2f7261776769742e636f6d2f69537072696e672f626162656c2d7765627061636b2d72656163742d72656475782d7475746f7269616c732f6d61737465722f696d616765732f5265647578332e706e67"
  },
  {
    name: "Mocha",
    url: "https://opencollective-production.s3-us-west-1.amazonaws.com/mochalogokk2xpng_80237b00-0481-11e6-842c-13d7bfe512ec.png"
  },
  {
    name:"Chai",
    url: "https://cdn.tutsplus.com/net/uploads/2014/01/nodejs-testing-chai-retina-preview.png"
  },
  {
    name: "NodeJS",
    url: "https://static.airpair.com/img/software/node.js.icon.png",
  },
  {
    name:"ExpressJS",
    url: "https://lh3.googleusercontent.com/IHbwrohpMbh_TsGN5V3n35bCPuIVs-KB55mW_B5pA-tgHtrj9vl6oLrNSKmGxl7Aaw=w300"
  },
  {
    name:"MongoDB",
    url: "http://corballis.ie/wp-content/uploads/2016/06/mongodb-300x300.jpg"
  },
  {
    name:"Jquery",
    url:"http://www.ics.hawaii.edu/wp-content/uploads/2013/08/jquerylogo320.png"
  },
  {
    name:"Wordpress",
    url: "https://www.dotemplate.com/adt/uploads/2015/02/wordpress-logo-vector-300x300.png",
  },
  {
    name: "Hootsuite",
    url: "http://solamaragency.com/wp-content/uploads/2015/08/hootsuite-300x300.jpg"
  }
];



class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer/>
        <NavbarCustom brand="Alexander's Portfolio" links={links}/>
        <SkillsContainer mySkills={mySkills}/>
        <ProjectsContainer />
        <Footer social={footerSocial}/>
      </div>
    )
  }
}

export default App
