import React from "react";
import Slider from "react-slick"
import "./Projects.css";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  arrows: true,
  dots: true
};


let Projects = (props) =>(
  <div className="mt-5" id="projects-section">
    <section className="jumbotron text-center">
      <div className="container mt-4">
        <h2 className="display-4 text-success">Projects</h2>
        <p className="lead text-muted">Projects I have done</p>
      </div>
    </section>
    <div className="container p-5">
      <Slider {...settings}>

        <div className="my-3">
          <h4 className="text-center my-3"><a href="https://github.com/lexenington/mario-pest-control">Mario Pest Control Website</a></h4>
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <p className="lead">
                This is my Mario Pest Control Project. In this project I used JavaScript and HTML/CSS. It keeps track of the total creatures Mario has killed and how much Princess Peach owes Mario<br/>
                As Mario keeps track of all his work he can know how much of a great deal his effors will cost Princess Peach
              </p>
            </div>
            <div className="col-lg-5 col-sm-12">
              <a href="https://github.com/lexenington/mario-pest-control"><img className="img-fluid project-img mx-auto px-3" alt="..." src="https://i.imgur.com/sCSYZBZ.jpg"/></a>
            </div>
          </div>
        </div>
        <div className="my-3">
          <h4 className="text-center my-3"><a href="https://github.com/lexenington/escape-the-room">Escape The Room Game</a></h4>
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <p className="lead">
                This is a Zork style puzzle/rpg game where the player must escape the room! The task is to loacte the key to leave the room. But there is a catch here, if you touch certain items in the room you will get electrocuted and die, if you also play ten moves you will of suffucation and die. Conserve your energy and play smart <br/>
                This project used the npm package called readline-sync
              </p>
            </div>
            <div className="col-lg-5 col-sm-12">
              <a href="https://github.com/lexenington/escape-the-room" ><img className="img-fluid project-img mx-auto px-3" alt="..." src="https://i.imgur.com/5qlSFgl.jpg"/></a>
            </div>
          </div>
        </div>
        <div className="my-3">
          <h4 className="text-center my-3"><a href="https://github.com/lexenington/react-blog">React Blog</a></h4>
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <p className="lead">
                This is a React.js Project. In this project I created a blog for an African Magazine Company using the react.js.
                Every item on the blog is components. For example, the navbar, header content/article and footer are all components. This shows I know how to use props in react
                Props are data passed from parent components to child components. In combination with .map() method I took an array of objects and displayed as JSX to rendered on the webpage
              </p>
            </div>
            <div className="col-lg-5 col-sm-12">
              <a href="https://github.com/lexenington/react-blog"><img className="img-fluid project-img mx-auto px-3 " alt="..." src="https://i.imgur.com/GYx1Hnj.jpg"/></a>
            </div>
          </div>
        </div>
        <div className="my-3">
          <h4 className="text-center my-3"><a href="https://github.com/lexenington/uglythings">Ugly Things: A React CRUD App</a></h4>
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <p className="lead">
                This is a react app called Ugly Things. It is a CRUD application made with react.js, redux and bootstrap. A user may give the title, image url and description of things that are ugly. User may also remove an item if he wants to

                This show that I know how to use props and states in react. It also show that I know how use redux to handle changes to states
              </p>
            </div>
            <div className="col-lg-5 col-sm-12">
              <a href="https://github.com/lexenington/uglythings"><img className="img-fluid project-img mx-auto px-3 " alt="..." src="https://i.imgur.com/XRgG6HE.jpg"/></a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  </div>
)

export default Projects
