import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import React from "react";
import TpLink from "../TpLink/TpLink";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: theme.palette.common.white,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  links: {
    "& a": {
      marginLeft: theme.spacing(2),
    },
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <Box component="header" boxShadow={4} className={classes.root}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <TpLink href="/">
            <Image src="/logo.png" width={200} height={60} />
          </TpLink>
        </Grid>
        <Grid item className={classes.links}>
          <Link href="/organizations">Organizations</Link>
          <Link href="/profile">My Profile</Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
