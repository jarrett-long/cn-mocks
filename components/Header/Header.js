import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import React from "react";
import TpLink from "../TpLink/TpLink";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  links: {
    '& a': {
      marginLeft: theme.spacing(2)
    }
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <header>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <TpLink href="/">
            <Image src="/logo.png" width={200} height={60} />
          </TpLink>
        </Grid>
        <Grid item className={classes.links}>
          <Link href="/organizations">
            Organizations
          </Link>
          <Link href="/profile">
            My Profile
          </Link>
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;
