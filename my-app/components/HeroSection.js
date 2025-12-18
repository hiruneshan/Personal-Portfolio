import HeroGrid from './HeroGrid';
import styles from '../styles/HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>

      {/* LEFT TEXT */}
      <div className={styles.heroTextCol}>
        <span className={styles.heroIntro}>Hi, I&apos;m</span>
        <h1 className={styles.heroName}>Hiru Wijemanne</h1>
        <p className={styles.heroSubtitle}>
          I&apos;m a full stack software developer based in Toronto, Canada.
          I like building cool things for the world. We shall create something
          cool together.
        </p>
      </div>

      {/* RIGHT GRID */}
      <div className={styles.heroImageCol}>
        <HeroGrid />
      </div>

    </section>
  );
}
