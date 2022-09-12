import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [title, setTitle] = useState('Initial Title');

  const handleClick = () => {
    if (title === 'Initial Title') {
      setTitle('Hello useState');
    } else {
      setTitle('Hello useState');
    }
  };

  return (
    <section>
      <h1 className={styles.section}> {title} </h1>
      <button className={styles.button} onClick={handleClick}>
        Change title
      </button>
    </section>
  );
}
