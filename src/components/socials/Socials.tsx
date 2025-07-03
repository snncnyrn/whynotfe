import type { ReactNode } from "react";
import Button from "../button/Button";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa6";

import styles from "./SocialsStyles.module.scss";
import DugunIcon from "./DugunIcon";

interface Social {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

const socialsArr: Social[] = [
  {
    id: "dugun",
    name: "Düğün",
    url: "https://dugun.com/muzik/istanbul/whynot-music-5f810e",
    icon: (
      <div
        style={{
          width: "26px",
          height: "26px",
          marginBottom: "5px",
        }}
      >
        <DugunIcon />
      </div>
    ),
  },
  {
    id: "insta",
    name: "Instagram",
    url: "https://www.instagram.com/whynotmusicband/",
    icon: <FaInstagram size={28} />,
  },
  {
    id: "tiktok",
    name: "Tiktok",
    url: "https://www.tiktok.com/@whynotmusicband",
    icon: <FaTiktok size={24} />,
  },
  {
    id: "yt",
    name: "YouTube",
    url: "https://www.youtube.com/@WhyNotMusicBand",
    icon: <FaYoutube size={28} />,
  },
];

const Socials = () => {
  return (
    <div className={styles.container}>
      {socialsArr.map(({ url, id, icon }) => (
        <Button key={id} onClick={() => window.open(url, "_blank")}>
          {icon}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
