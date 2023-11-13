import React from "react";
import Attributes from "../info/attributes.json";
import ReactTooltip from 'react-tooltip';

let ProjkChips = props => {

  console.log(props);

  return (
    <div className="d-flex">
      {props.attributes?.map(x => (
        <div class="chip" style={{ backgroundColor: Attributes[x].color }}>
          <a data-tip={Attributes[x].tooltip}>{x}</a>
          <ReactTooltip />
        </div>
      ))}
    </div>
  );
}

export default ProjkChips;