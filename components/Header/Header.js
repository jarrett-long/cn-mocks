import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link className='link' href='/'>
        <Image src='/logo.png' width={250} height={83} />
      </Link>
      <div className={styles.searchBar}>
        <form>
          <input type="text" placeholder="Search charities..." />
        </form>
      </div>
      <div className={styles.linksWrapper}>
        <Link href='/charities'>Charities</Link>
        <Link href='/charts'>Charts</Link>
        <Link href='/guide'>Guide</Link>
        <Link href='/profile'>My Profile</Link>
      </div>
    </header>
  );
}

export default Header;
