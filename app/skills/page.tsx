import Link from "next/link";
import PageTransition from "../_components/PageTransition";
import Navigation from "../_components/Navigation";

export default function Home() {

  let x = [];
  for (let i = 0; i < 20; i++) {
    x.push('some filler data')
  }

  return (
    <main style={{ overflow: 'hidden' }}>
      <PageTransition />
      <Navigation />
      <h1 style={{ color: 'white' }}>You're not supposed to be here.</h1>
      <div style={{ color: 'white' }}>But you're here nonetheless. Welcome!</div>
      {x.map((data, i) => <p key={i} style={{ color: 'white' }}>{data}</p>)}
    </main> 
  );
}

