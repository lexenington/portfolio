import React from "react";
import "./Skills.css";

let Skills = (props) => (
  <div id="skills-section">
    <section className="jumbotron text-center">
      <div className="container mt-4">
        <h2 className="display-4 text-success">Skills</h2>
        <p className="lead text-muted">Programming languages and tools I use to develop web experiences</p>
      </div>
    </section>

    <div className="text-muted">
      <div className="container">
        <div className="row justify-content-center ">
          {props.mySkills.map((item,index)=>(
            <div className="text-center col-lg-3 col-md-4 col-sm-6 my-4" key={index+item.name}>
              <img src={item.url} alt="..." className="img-thumbnail img-fluid mx-auto p-2"style={{height:"auto"}}/>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
)

export default Skills;
