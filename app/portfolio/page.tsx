'use client'

import PageTransition from "../_components/PageTransition";
import glitchStyle from "../_styles/glitch.module.css";
import style from "./_styles/page.module.css";
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import ProjectCard from "./_components/ProjectCard";
import FilterBar from "./_components/FilterBar";
import { useEffect, useRef, useState } from "react";
import Navigation from "../_components/Navigation";

export default function Portfolio() {
  const three = [0, 0, 0];

  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down('md'));

  const exampleCard = (index: number) =>
    <ProjectCard key={index}
      id='dictater'
      title='Doinktater | 4X Potato Strategy'
      tags={['C#', 'Hyper Projk']}
      imageUrl='https://ksr-ugc.imgix.net/assets/027/592/492/c58e1f28c1eec30d77b7d968bf716a3f_original.png?ixlib=rb-4.1.0&crop=faces&w=1024&h=576&fit=crop&v=1577397933&auto=format&frame=1&q=92&s=778a0882f2e3032c450a98c0204d5624'
      description="DicTater is a strategic micromanagement game about facist potatoes with over 10k downloads."
    />

  // Query for projects
  const [projects, setProjects] = useState<MultiProjectQuery[]>([]);
  useEffect(() => {
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  // Scrollbar data
  const hasWindow = () => { return typeof window === 'object' }
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState(hasWindow() ? window.innerWidth : 1080);
  const gridRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (gridRef.current) setScrollPosition(gridRef.current.scrollTop);
  };
  useEffect(() => {
    const gridElement = gridRef.current;
    gridElement?.addEventListener('scroll', handleScroll);

    setScreenWidth(window.innerWidth);
    const handleResize = () => { setScreenWidth(window.innerWidth) };
    window.addEventListener('resize', handleResize);

    return () => {
      gridElement?.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate title box width
  const IS_LARGE = screenWidth > 1535;
  const TITLE_BOX_WIDTH = IS_LARGE ?
    100 - Math.min(scrollPosition, 75) :
    100 - Math.min(scrollPosition, 70);

  // Calculate font related
  const LARGE_SUBTRACTION_AMOUNT = 15 * ((2080 - screenWidth) / 544);
  const SMALL_SUBTRACTION_AMOUNT = 25 * ((1535 - screenWidth) / 635);
  const FONT_SIZE = IS_LARGE ?
    60 - Math.max(0, LARGE_SUBTRACTION_AMOUNT * (Math.min(scrollPosition, 70) / 70)) :
    60 - Math.max(0, SMALL_SUBTRACTION_AMOUNT * (Math.min(scrollPosition, 70) / 70));

  return (
    <main className={style.mainBox}> {/* Added horizontal padding */}
      <PageTransition />
      {isSmScreen && <Navigation />}
      <Grid container spacing={2} className={style.mainGrid}>
        {!isSmScreen && <Grid item container xs={12} md={4} xl={3} spacing={2}> {/* Featured Projects */}
          <Grid item xs={12} sx={{ height: '120px' }}>
            <div className={style.titleBox} style={{ width: `calc(${TITLE_BOX_WIDTH}vw - 16px)` }}>
              <h1 data-text={"PORTFOLIO"}
                className={`${glitchStyle.glitch} ${style.title}`}
                style={{ fontSize: `${FONT_SIZE}px` }}
              >
                PORTFOLIO
              </h1>
            </div>
          </Grid>
          <Grid item xs={12}>
            <h4 className={style.subtitle}>FEATURED</h4>
          </Grid>
          {three.map((_, index) =>
            <Grid item sm={12} key={index}>
              {exampleCard(index)}
            </Grid>
          )}
        </Grid>}
        <Grid item container xs={12} md={8} xl={9} spacing={2}
          className={style.scrollCardsContainer}
          ref={gridRef}
        >
          {!isSmScreen && <Grid item xs={12}><div style={{ height: '104px' }} /></Grid>}
          {isSmScreen && <Grid item xs={12}>
            <div className={style.titleBox}>
              <h1 data-text={"PORTFOLIO"}
                className={`${glitchStyle.glitch} ${style.title}`}
                style={{ fontSize: `${FONT_SIZE}px` }}
              >
                PORTFOLIO
              </h1>
            </div>
          </Grid>}
          <Grid item xs={12}>
            <FilterBar />
          </Grid>
          {projects?.map((p, index) =>
            <Grid item sm={12} md={6} xl={4} key={index}>
              <ProjectCard key={index}
                id={p.id}
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