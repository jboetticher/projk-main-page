import PageTransition from "../_components/PageTransition";
import glitchStyle from "../_styles/glitch.module.css";
import style from "./_styles/page.module.css";
import { Card, Grid, TextField, Select, CardContent, CardMedia } from '@mui/material';

export default function Portfolio() {
  const three = [0, 0, 0];
  const twelve = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const exampleCard = (index) => <Card key={index}>
    <CardMedia component='img' image="https://ksr-ugc.imgix.net/assets/027/592/492/c58e1f28c1eec30d77b7d968bf716a3f_original.png?ixlib=rb-4.1.0&crop=faces&w=1024&h=576&fit=crop&v=1577397933&auto=format&frame=1&q=92&s=778a0882f2e3032c450a98c0204d5624" />
    <CardContent>
      this is some card content
    </CardContent>
  </Card>;

  return (
    <main style={{ overflow: 'hidden' }}>
      <PageTransition />
      <div className={style.titleBox}>
        <h1 className={`${glitchStyle.glitch} ${style.title}`} data-text={"PORTFOLIO"}>
          PORTFOLIO
        </h1>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}> {/* Featured Projects */}
          {three.map((_, index) => exampleCard(index))}
        </Grid>
        <Grid item container xs={12} md={8}> {/* Scrollable Project Cards */}
          <Grid item xs={12}> {/* Filter Bar */}
            <TextField /* ... */ />
            <Select /* ... */ />
          </Grid>
          {twelve.map((_, index) =>
            <Grid item sm={12} md={6}>
              {exampleCard(index)}
            </Grid>
          )}
        </Grid>
      </Grid>
    </main>
  );
}
