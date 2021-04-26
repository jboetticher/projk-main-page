import React from 'react'
import GlitchTitle from '../components/GlitchTitle';
import InvisibleCard from '../components/InvisibleCard';
import '../css/k-theme.css';
import '../css/jkheads.css';

const list = [];
for (let i = 0; i < 12; i++) {
  list.push(<li key={i} />);
}

export default () => (
  <>
    <div className="jkhead-backdrop area">
      <ul className="circles">{list}</ul>
      <div className="jkhead-container row mx-auto py-4">
        <div className="j-head-1 head-panel mx-auto">
          <img src="./home/jeremy-head.png" />
        </div>
        <div className="k-head-2 head-panel mx-auto">
          <img src="./home/kevin-head.png" />
        </div>
        <div className="k-head-1 head-panel mx-auto">
          <img src="./home/kevin-head.png" />
        </div>
        <div className="j-head-2 head-panel mx-auto">
          <img src="./home/jeremy-head.png" />
        </div>
      </div>
    </div>
    <div style={{ textAlign: 'center' }}>
      <GlitchTitle />
    </div>
    <div className="row tight-margin">
      <InvisibleCard right>
        <h3>We make stuff.</h3>
        <p>
          And we don't always know what we're doing. But hey, does anyone?
        </p>
      </InvisibleCard>
      <InvisibleCard />
      <InvisibleCard col={12}>
        <h3 className="mb-4">Aforementioned stuff:</h3>
        <button className="btn btn-primary mr-2" onClick={() => window.open("https://quiznomer.com/")}>
          QUIZNOMER
        </button>
        <button className="btn btn-primary mr-2" onClick={() => window.open("https://dictatergame.com/")}>
          DICTATER
        </button>
        <button className="btn btn-primary mr-2" onClick={() => window.open("https://devpost.com/software/moonjelly")}>
          MOONJELLY
        </button>
        <button className="btn btn-primary mr-2" onClick={() => window.open("https://crabb.club/")}>
          GOD CHURCH
        </button>
      </InvisibleCard>
    </div>

  </>
);
