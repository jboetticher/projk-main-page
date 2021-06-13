import React from "react";
import ProjkChips from "./ProjkChips";

let ProjectCard = props => {

  console.log(props);

  return (
    <div className="card mb-4">
      {props.image == null ? <></> :
        <a href={props.link}>
          <img class="card-img-top projk-card-img-edit" src={props.image} />
        </a>
      }
      <div className="d-flex card-body">
        <div>
          <h3 mb-4 className={props.jeremy ? "j-h3" : ""}>
            {props.title}
          </h3>
          <ProjkChips attributes={props.attributes} />
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;