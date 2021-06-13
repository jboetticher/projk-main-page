import React from 'react'
import JInfo from '../info/j-projk.json';
import GlitchTitle from '../components/GlitchTitle';
import ProjectCard from '../components/ProjectCard';
import '../css/j-theme.css';

/**
 *     <div className="background-video">
      <iframe frameborder="0" height="100%" width="100%"
        src="https://youtube.com/embed/w1o4O2SfQ5g?autoplay=1&controls=0&showinfo=0&autohide=1">
      </iframe>
    </div>
 */

let JeremyPage = props => {

  console.log(JInfo.main);

  return (
    <>
      <div style={{ height: "250px" }}>
        <div style={{ textAlign: 'center' }}>
          <GlitchTitle text="JEREMY" />
        </div>
      </div>
      <div className="row">
        {JInfo.main.map(projk => (
          <div className="col-12 col-md-6 col-lg-4">
            <ProjectCard
              jeremy
              {...projk}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default JeremyPage;