import React from 'react';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Projekty, które zrealizowałem</h2>
        <div className={styles.projects}>
          <a
            href='https://makeup-maja-pyrzynska.vercel.app/'
            className={styles.project}
            target='_blank'
            rel='noreferrer'>
            <h5>Strona reklamowa: Make-up</h5>
            <p>Użyte technologie: NextJS, ReactJS, CSS, MongoDB, NodeJS</p>
          </a>
          <a
            href='https://mateuszmanczak04.github.io/korepetycje/'
            className={styles.project}
            target='_blank'
            rel='noreferrer'>
            <h5>Strona reklamowa: Korepetycje</h5>
            <p>Użyte technologie: ReactJS, CSS</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
