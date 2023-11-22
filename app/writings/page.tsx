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
      <h1 style={{ color: 'white' }}>this is the writings page!</h1>
      {x.map((data, i) => <p key={i} style={{ color: 'white' }}>{data}</p>)}
      <Link href='/'>go back to home</Link>
    </main> 
  );
}

