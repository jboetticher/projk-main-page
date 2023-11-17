import Link from "next/link";

export default function Home() {

  let x = [];
  for (let i = 0; i < 20; i++) {
    x.push('some filler data')
  }

  return (
    <main style={{ overflow: 'hidden' }}>
      <h1 style={{ color: 'white' }}>this is the portfolio page!</h1>
      {x.map((data, i) => <p key={i} style={{ color: 'white' }}>{data}</p>)}
      <Link href='/'>go back to home</Link>
    </main> 
  );
}

