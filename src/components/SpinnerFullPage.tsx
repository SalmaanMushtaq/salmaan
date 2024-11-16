import styles from "./SpinnerFullPage.module.css";
const SpinnerFullPage = () => {
  return (
    <div className={styles.pl}>
      <div className={styles.pl__dot}></div>
      <div className={styles.pl__dot}></div>
      <div className={styles.pl__dot}></div>
      <div className={styles.pl__dot}></div>
      <div className={styles.pl__dot}></div>
      <div className={styles.pl__dot}></div>
      <div className={styles.pl__dot}></div>
      <div className={styles.pl__dot}></div>
      <div className={styles.pl__dot}></div>
      <div className={styles.pl__dot}></div>
      <div className={styles.pl__dot}></div>
      <div className={styles.pl__dot}></div>
      <div className={styles.pl__text}>Loading…</div>
    </div>
  );
};

export default SpinnerFullPage;
