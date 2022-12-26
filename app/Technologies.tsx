import React from 'react';
import styles from './Technologies.module.scss';

const Technologies = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Technologie, z których korzystam</h2>
        <div className={styles.technologies}>
          <p style={{ background: '#FF5733', color: 'white' }}>HTML</p>
          <p style={{ background: '#264de4', color: 'white' }}>CSS</p>
          <p style={{ background: '	#f0db4f', color: 'black' }}>JavaScript</p>
          <p style={{ background: '#61dafb', color: 'black' }}>React</p>
          <p style={{ background: '#0cd45b', color: 'black' }}>MongoDB</p>
          <p style={{ background: 'white', color: 'black' }}>Express</p>
          <p style={{ background: '#3c873a', color: 'white' }}>NodeJS</p>
          <p
            style={{
              background: 'black',
              color: 'white',
              // border: '2px solid white',
            }}>
            NextJS
          </p>
          <p style={{ background: '#FFA611', color: 'black' }}>Firebase</p>
          <p style={{ background: '#A259FF', color: 'white' }}>Figma</p>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
