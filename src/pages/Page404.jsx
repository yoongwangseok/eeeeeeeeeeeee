import React from 'react';
import styles from './Page404.module.css';

export default function Page404() {
  return (
    <div className={styles.container}>
      <div className={styles["red-dot"]}></div>
      <div className={styles["error-icon"]} />
      <p className={styles["error-message"]}>페이지를 찾을 수 없습니다. :(</p>
      <button className={styles["retry-button"]} onClick={() => {window.history.back()}}>이전 페이지</button>
    </div>
  )
}
