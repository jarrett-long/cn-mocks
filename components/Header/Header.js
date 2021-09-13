import React from "react";
import Image from "next/image";
import TpLink from "../TpLink/TpLink";
import styles from "./header.module.css";
import { Grid } from "@material-ui/core";

function Header() {
  return (
    <header className={styles.header}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <TpLink href="/">
            <Image src="/logo.png" width={200} height={60} />
          </TpLink>
        </Grid>
        <Grid item xs={2}>
          <TpLink href="/organizations">Organizations</TpLink>
          <TpLink href="/profile">My Profile</TpLink>
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;
