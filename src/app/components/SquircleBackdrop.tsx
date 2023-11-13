'use client'

import styles from "../styles/squircles.module.css";
import { useEffect, useState } from 'react';

export default function SquircleBackdrop() {
  const [enableSquircles, setEnableSquircles] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEnableSquircles(true);
    }, 3000); // 5000 milliseconds = 5 seconds

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const list = [];
  for (let i = 0; i < 12; i++) {
    list.push(<li key={i} />);
  }

  if (enableSquircles) return (
    <div className={styles.area}>
      <ul className={styles.circles}>{list}</ul>
    </div>
  );
  else return <></>;
}
