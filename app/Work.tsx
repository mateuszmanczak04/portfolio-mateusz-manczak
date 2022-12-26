import React from 'react';
import styles from './Work.module.scss';

const Work = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>O pracy</h2>
        <div className={styles.grid}>
          <p>Strony i aplikacje webowe stworzone przeze mnie są responsywne.</p>
          <p>Działają na praktycznie każdej możliwej przeglądarce</p>
          <p>Ładują się szybko i są zoptymalizowane.</p>
          <p>
            Obsługują backend oraz funkcje takie, jak rejestracja/logowanie,
            przesyłanie treści na serwer.
          </p>
          <p>Wszystko koduję od zera i nie korzystam z gotowych szablonów.</p>
          <p>W razie potrzeby stworzę również design.</p>
          <p>
            Daję do wyboru wysłanie zbudowanej wersji aplikacji, gotowej do
            wrzucenia na serwer lub hostowanie strony przeze mnie za odpowiednią
            opłatą.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
