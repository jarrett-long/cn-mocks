import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Link from "../Link/Link";
import StarRating from "../StarRating/StarRating";
import { Organization } from "./OrganizationProps";

export const Result = (props: { org: Organization }) => (
  <Paper
    elevation={1}
    sx={{ p: 2, width: 1, my: 2, "&:hover": { boxShadow: 6 } }}
  >
    <Grid
      container
      justifyContent="space-between"
      align-items="center"
      wrap="wrap"
    >
      <Grid
        item
        xs={12}
        lg={7}
        sx={{pr: {lg:4}}}
        container
        direction="column"
        justifyContent="space-between"
      >
        <Link href={props.org.charityNavigatorURL}>
          <Typography variant="h6">{props.org.charityName}</Typography>
        </Link>
        <Typography variant="body2">
          <i>{props.org.tagLine}</i>
        </Typography>
        <Typography variant="body2">
          {`${props.org.cause.causeName}`}
        </Typography>
        <Typography variant="body2">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          {` ${props.org.mailingAddress.city}, ${props.org.mailingAddress.stateOrProvince}`}
        </Typography>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Typography variant="body2" display="inline-flex">
          <StarRating rating={props.org.currentRating.rating} />
          <Box component="span" sx={{ ml: 1 }}>
            ({props.org.currentRating.score} out of 100)
          </Box>
        </Typography>
        <Typography variant="body2">
          Size: $
          {props.org.irsClassification.incomeAmount
            ?.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",") ?? 0}
        </Typography>
      </Grid>
      <Grid item xs={12} lg={2}>
        <Button variant="contained" sx={{ width: 1 }} color="secondary">
          GIVE
        </Button>
      </Grid>
      {/* <Box
      sx={{
        position: "absolute",
        top: (theme) => theme.spacing(2),
        right: (theme) => theme.spacing(2),
      }}
    >
      <img src={props.org.category.image} width={50} height={50} />
    </Box> */}
    </Grid>
  </Paper>
);
