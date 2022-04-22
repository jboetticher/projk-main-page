import React from 'react'
import JInfo from '../info/j-projk.json';
import GlitchTitle from '../components/GlitchTitle';
import ProjectCard from '../components/ProjectCard';
import '../css/j-theme.css';

let JeremyPage = props => {

  console.log(JInfo.main);

  return (
    <>
      <div style={{ height: "150px" }}>
        <div style={{ textAlign: 'center' }}>
          <GlitchTitle text="JEREMY" />
        </div>
      </div>
      <h1 style={{textAlign: 'center'}} className="jp">
        Main Portfolio
      </h1>
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
      <h1 style={{textAlign: 'center'}} className="jp">
        Other
      </h1>
      <div className="row">
        {JInfo.other.map(projk => (
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