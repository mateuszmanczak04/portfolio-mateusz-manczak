import React from 'react';
import styles from './ContactForm.module.scss';
import { BsFacebook } from 'react-icons/bs';

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Skontaktuj się ze mną</h2>
        <div className={styles.form}>
          <input type='text' placeholder='Adres e-mail' required />
          <input type='text' placeholder='Imię i nazwisko' required />
          <textarea rows={5} placeholder='Twoja wiadomość' required></textarea>
          <button>Wyślij</button>
        </div>
        <div className={styles.other}>
          <a
            href='https://www.facebook.com/mateusz.mancxzak/'
            target='_blank'
            rel='noreferrer'>
            <BsFacebook /> Facebook
          </a>
          <a
            href='mailto: @mateuszmanczak16@gmail.com'
            target='_blank'
            rel='noreferrer'>
            mateuszmanczak16@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
