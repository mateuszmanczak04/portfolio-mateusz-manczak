import Image from 'next/image';
import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Strony internetowe i aplikacje webowe</h1>
        <p>Mateusz Mańczak</p>
        <Image
          src='/images/me-1.jpg'
          alt='Moje zdjęcie'
          width={1000}
          height={600}
        />
      </div>
    </section>
  );
};

export default Hero;
