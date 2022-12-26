import React from 'react';
import ContactForm from './ContactForm';
import Hero from './Hero';
import styles from './Home.module.scss';
import Projects from './Projects';
import Technologies from './Technologies';
import Work from './Work';

const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Technologies />
      <Work />
      <ContactForm />
      <Projects />
    </div>
  );
};

export default Home;
