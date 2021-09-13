import React from "react";
import Image from "next/image";
import TpLink from "../TpLink/TpLink";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <TpLink className="link" href="/">
        <Image src="/logo.png" width={200} height={60} />
      </TpLink>
      <div className={styles.linksWrapper}>
        <TpLink href="/organizations">Organizations</TpLink>
        <TpLink href="/profile">My Profile</TpLink>
      </div>
    </header>
  );
}

export default Header;
