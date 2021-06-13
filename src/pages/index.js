import React from 'react'
import GlitchTitle from '../components/GlitchTitle';
import InvisibleCard from '../components/InvisibleCard';
import ProjectCard from '../components/ProjectCard';
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
        <div className="mx-auto d-flex">
          <div className="j-head-1 head-panel">
            <img src="./home/jeremy-head.png" />
          </div>
          <div className="k-head-2 head-panel">
            <img src="./home/kevin-head.png" />
          </div>
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
          And we put it here. Not all projks will be sustained forever, but not all of them were meant to be.
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
      {/*
        <ProjectCard col={6} projectName="DicTater" description="Dude poggers" image="https://assets.obior.com/uploads/ckeditor/pictures/5015/content_e4b00bab.png" />
      */}
    </div>

  </>
);
