import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0x387C44,
          backgroundColor: 0x1e1c1c,
          maxDistance: 34.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);
  return (
    <div className={styles.container}>
     <Head>
        <title>Vers3Dynamics</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <main className={styles.main} ref={vantaRef}></main>
<h1><p><script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.79/build/spline-viewer.js"></script>
<spline-viewer url="https://prod.spline.design/PYL6WDDrqTwo6Lfu/scene.splinecode"></spline-viewer> 
  );
} 
