import { useTheme } from "../../contexts/ThemeContext";
import classNames from "classnames";
import styles from "./MainPageStyles.module.scss";
import { Socials } from "../../components";
import Info from "../../components/info/Info";
import Contact from "../../components/contact/Contact";

const MainPage = () => {
  const { setTheme, theme } = useTheme();

  const isLightTheme = theme === "light";

  const getYear = () => {
    const now = new Date();
    const year = now.getFullYear();
    return year;
  };

  return (
    <>
      <div
        className={classNames(styles.container, {
          [styles.containerLight]: isLightTheme,
        })}
      >
        <div className={styles.header}>
          <div className={styles.logo}>WHY NOT</div>
          <div className={styles.toolbar}>
            <Info />
            <Contact />
            <Socials />
          </div>
        </div>
      </div>
      <div className={styles.footer}>{getYear()} | © Why Not Music</div>
      <video
        className={styles.video}
        src="https://firebasestorage.googleapis.com/v0/b/emsievent.firebasestorage.app/o/whynot%2Fdeneme.mp4?alt=media&token=ff60b605-7f6d-4330-aa90-7287ea4b5c10"
        autoPlay
        loop
        muted
        playsInline
        preload="true"
      />
    </>
  );
};

export default MainPage;
