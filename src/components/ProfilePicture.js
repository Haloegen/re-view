import React from "react";
import styles from "../styles/ProfilePicture.module.css";

const ProfilePicture = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.ProfilePicture}
        src="https://res.cloudinary.com/dtajxn9oi/image/upload/v1712323984/Drf-api/default_profile_ubr0la.jpg"

        height={height}
        width={height}
        alt="ProfilePicture"
      />
      {text}
    </span>
  );
};

export default ProfilePicture;