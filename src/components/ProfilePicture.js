import React from "react";
import styles from "../styles/ProfilePicture.module.css";
import defaultProfile from '../assets/default_profile_ubr0la.jpg'

const ProfilePicture = ({ src, height = 45, text }) => {

  return (
    <span>
      <img
        className={styles.ProfilePicture}
        src={src}
        height={height}
        width={height}
        alt="ProfilePicture"
      />
      {text}
    </span>
  );
};

export default ProfilePicture;