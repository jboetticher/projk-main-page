'use client'

import PageTransition from "../_components/PageTransition";
import glitchStyle from "../_styles/glitch.module.css";
import style from "./_styles/page.module.css";
import { Grid } from '@mui/material';
import ProjectCard from "./_components/ProjectCard";
import FilterBar from "./_components/FilterBar";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const three = [0, 0, 0];
  const twelve = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const [projects, setProjects] = useState<MultiProjectQuery[]>([]);
  useEffect(() => {
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const exampleCard = (index: number) =>
    <ProjectCard key={index}
      title='DicTater | 4X Potato Strategy'
      tags={['C#', 'Hyper Projk']}
      imageUrl='https://ksr-ugc.imgix.net/assets/027/592/492/c58e1f28c1eec30d77b7d968bf716a3f_original.png?ixlib=rb-4.1.0&crop=faces&w=1024&h=576&fit=crop&v=1577397933&auto=format&frame=1&q=92&s=778a0882f2e3032c450a98c0204d5624'
      description="DicTater is a strategic micromanagement game about facist potatoes with over 10k downloads."
    />

  return (
    <main className={style.mainBox}> {/* Added horizontal padding */}
      <PageTransition />
      <div className={style.titleBox}>
        <h1 className={`${glitchStyle.glitch} ${style.title}`} data-text={"PORTFOLIO"}>
          PORTFOLIO
        </h1>
      </div>
      <Grid container spacing={2} className={style.mainGrid}>
        <Grid item container xs={12} md={4} spacing={2}> {/* Featured Projects */}
          <Grid item xs={12}>
            <h4 className={style.subtitle}>FEATURED</h4>
          </Grid>
          {three.map((_, index) =>
            <Grid item sm={12} key={index}>
              {exampleCard(index)}
            </Grid>
          )}
        </Grid>
        <Grid item container xs={12} md={8} spacing={2} className={style.scrollCardsContainer}> {/* Scrollable Project Cards */}
          <Grid item xs={12}>
            <FilterBar />
          </Grid>
          {projects?.map((p, index) =>
            <Grid item sm={12} md={6} key={index}>
              <ProjectCard key={index}
                title={p.title}
                tags={p.tags}
                imageUrl={p.image}
                description={p.tagline}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </main>
  );
}

type MultiProjectQuery = {
  id: string;
  title: string;
  tags: string[];
  tagline: string;
  image: string;
}