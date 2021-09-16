import { Grid, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import React from "react";
import Link from "../Link/Link";

function Header() {
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: "background.default",
        position: "sticky",
        top: 0,
        zIndex: 100,
        pl: 2,
        pr: 2
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Link href="/">
            <Image src="/logo.png" width={200} height={60} />
          </Link>
        </Grid>
        <Grid
          item
          sx={{
            "& a": {
              ml: 2
            },
          }}
        >
          <Link href="/organizations">Organizations</Link>
          <Link href="/profile">My Profile</Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
