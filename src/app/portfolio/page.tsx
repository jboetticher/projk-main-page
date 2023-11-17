import Link from "next/link";
import PageTransition from "../_components/PageTransition";
import glitchStyle from "../_styles/glitch.module.css";
import style from "./_styles/page.module.css";

export default function Home() {

  let x = [];
  for (let i = 0; i < 20; i++) {
    x.push('some filler data')
  }

  return (
    <main style={{ overflow: 'hidden' }}>
      <PageTransition />
      <div className={style.titleBox}>
        <h1 className={`${glitchStyle.glitch} ${style.title}`} data-text={"PORTFOLIO"}>
          PORTFOLIO
        </h1>
      </div>
    </main>
  );
}

