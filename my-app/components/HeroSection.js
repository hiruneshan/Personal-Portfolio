import HeroGrid from './HeroGrid';
import SocialLinks from './SocialLinks';
import styles from '../styles/HeroSection.module.css';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroText}>
        <motion.span
          className={styles.heroIntro}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }} // Starts after navbar
        >
          Hi, I&apos;m
        </motion.span>

        <div className={styles.heroNameWrapper}>
          <div className={styles.heroNameLine}>
            {"Hiru".split("").map((char, index) => (
              <span
                key={`line1-${index}`}
                className={styles.heroNameChar}
              >
                {char}
              </span>
            ))}
          </div>
          <div className={styles.heroNameLine}>
            {"Wijemanne".split("").map((char, index) => (
              <span
                key={`line2-${index}`}
                className={styles.heroNameChar}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        <motion.h2
          className={styles.heroTagline}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          I build cool things!
        </motion.h2>

        <motion.p
          className={styles.heroSubtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          I&apos;m a computer science student based in Toronto specializing in backend and front end development.
        </motion.p>

        <div className="d-block d-md-none mt-4">
          <SocialLinks isMobile={true} />
        </div>
      </div>

      <motion.div
        className={styles.heroGrid}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
      >
        <HeroGrid />
      </motion.div>
    </section>
  );
}
