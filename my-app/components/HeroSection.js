import HeroGrid from './HeroGrid';
import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroText}>
        <span className={styles.heroIntro}>Hi, I&apos;m</span>
        <h1 className={styles.heroName}>Hiru Wijemanne.</h1>
        <h2 className={styles.heroTagline}>I build cool things!</h2>
        <p className={styles.heroSubtitle}>
          I&apos;m a computer science student based in Toronto specializing in backend and front end development.
        </p>
      </div>

      <div className={styles.heroGrid}>
        <HeroGrid />
      </div>
    </section>
  );
}
