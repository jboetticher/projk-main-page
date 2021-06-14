import React from 'react'
import KInfo from '../info/k-projk.json';
import GlitchTitle from '../components/GlitchTitle';
import ProjectCard from '../components/ProjectCard';
import '../css/j-theme.css';

let KevinPage = props => {

    console.log(KInfo.main);
  
    return (
      <>
        <div style={{ height: "250px" }}>
          <div style={{ textAlign: 'center' }}>
            <GlitchTitle text="KEVIN" />
          </div>
        </div>
        <div className="row">
          {KInfo.main.map(projk => (
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
  
  export default KevinPage;
