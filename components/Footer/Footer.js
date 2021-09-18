import React from "react";
import Image from "next/image";
import { Box, ThemeProvider } from "@mui/system";
import { blueBgTheme } from "../../theme";
import { Grid, Typography } from "@mui/material";
import Link from "../Link/Link";

function Footer() {
  return (
    <ThemeProvider theme={blueBgTheme}>
      <Box component="footer" sx={{ bottom: 0, mt: "auto", backgroundColor: "background.default", p:4, '& a,p': { color: '#fff'} }}>
        <Grid container direction="row">
          <Grid item container direction="column" xs={3}>
            <Typography>
              About Us
            </Typography>
            <Link href="/">Overview</Link>
            <Link href="/">Overview</Link>
            <Link href="/">Overview</Link>
            <Link href="/">Overview</Link>
            <Link href="/">Overview</Link>
            <Link href="/">Overview</Link>
            <Link href="/">Overview</Link>
          </Grid>
          <Grid item container direction="column" xs={3}>
            <Typography>
              About Us
            </Typography>
            <Link href="/">Overview</Link>
            <Link href="/">Overview</Link>
            <Link href="/">Overview</Link>
            <Link href="/">Overview</Link>
            <Link href="/">Overview</Link>
            <Link href="/">Overview</Link>
            <Link href="/">Overview</Link>
          </Grid>
          <Grid item container direction="column" xs={3}>
            <Typography>
              About Us
            </Typography>
            <Link href="/">Overview</Link>
            <Link href="/">Overview</Link>
            <Link href="/">Overview</Link>
            <Link href="/">Overview</Link>
            <Link href="/">Overview</Link>
            <Link href="/">Overview</Link>
            <Link href="/">Overview</Link>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Footer;
