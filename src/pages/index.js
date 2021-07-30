import React, { useState } from 'react'
import GlitchTitle from '../components/GlitchTitle';
import '../css/k-theme.css';
import '../css/jkheads.css';

const list = [];
for (let i = 0; i < 12; i++) {
  list.push(<li key={i} />);
}

const kevinNormal = "/home/knormal.png";
const kevinHover = "/home/khover.png";
const jeremyNormal = "/home/jnormal.png";
const jeremyHover = "/home/jhover.png";

export default props => {
  let [centerText, setCenterText] = useState('PROJK');

  return (
    <>
      <div className="jkhead-backdrop area">
        <ul className="circles">{list}</ul>
      </div>
      <div class="k-home-img-button home-img-button">
        <a href="/kevin">
          <img src={kevinNormal}
            onMouseEnter={e => { e.currentTarget.src = kevinHover; setCenterText("KEVIN"); }}
            onMouseLeave={e => { e.currentTarget.src = kevinNormal; setCenterText("PROJK"); }}
          />
        </a>
      </div>
      <div class="j-home-img-button home-img-button">
        <a href="/jeremy">
          <img src={jeremyNormal}
            onMouseEnter={e => { e.currentTarget.src = jeremyHover; setCenterText("JEREMY"); }}
            onMouseLeave={e => { e.currentTarget.src = jeremyNormal; setCenterText("PROJK"); }}
          />
        </a>
      </div>
      <div style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '0', right: '0', marginTop: '-100px' }}>
        <GlitchTitle text={centerText} />
      </div>
      <div className="row tight-margin">
      </div>

    </>
  );
};
