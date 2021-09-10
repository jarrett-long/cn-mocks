import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link className="link" href="/">
        <div>
          <Image src="/logo.png" width={250} height={83} />
        </div>
      </Link>
      <div className={styles.searchBar}>
        <form>
          <input type="text" placeholder="Search charities..." />
        </form>
      </div>
      <div className={styles.linksWrapper}>
        <Link href="/charities">Charities</Link>
        <Link href="/profile">My Profile</Link>
      </div>
    </header>
  );
}

export default Header;
