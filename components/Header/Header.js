import { Grid, Box, Typography, Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/system";
import Image from "next/image";
import React from "react";
import Link from "../Link/Link";
import { blueBgTheme } from "../../theme";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <ThemeProvider theme={blueBgTheme}>
      <Box
        component="header"
        sx={{
          backgroundColor: "background.default",
          position: "sticky",
          top: 0,
          zIndex: 50,
          pl: 2,
          pr: 2,
          boxShadow: 3,
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Link href="/">
              <Image src="/logo.png" width={200} height={60} />
            </Link>
          </Grid>
          <Grid item>
            <Typography color="primary.contrastText">
              This is a re-design of{" "}
              <a href="https://www.charitynavigator.org">
                charitynavigator.org
              </a>{" "}
              that I'm doing for fun.
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 1,
              "& a": {
                ml: 2,
              },
            }}
          >
            <Link color="primary.contrastText" href="/organizations">
              Organizations
            </Link>
            <Link color="primary.contrastText" href="/profile">
              <AccountCircleIcon sx={{height:50, width: 50}} color="#fff" />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
