import React from 'react'
import GlitchTitle from '../components/GlitchTitle';
import InvisibleCard from '../components/InvisibleCard';
import '../css/k-theme.css';

export default () => (
  <>
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
