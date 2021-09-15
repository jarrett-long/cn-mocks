import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Box,
} from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import clsx from "clsx";
import { useState } from "react";
import CnAccordion from "../components/Shared/CnAccordion";
import StarRating from "../components/StarRating/StarRating";
import TpLink from "../components/TpLink/TpLink";
import { allOrganizations } from "../data/organizationsData";
import { blueBg } from "../theme";
import { Organization } from "../types/organizationType";
import { useFilters } from "../utils/useChainMemo";

const useStyles = makeStyles((theme) => ({
  controlRow: {
    backgroundColor: theme.palette.primary.main,
    // color: theme.palette.common.white,
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid white",
    position: "sticky",
    top: 65,
    zIndex: 100,
  },
  blueBg: {
    backgroundColor: theme.palette.primary.main,
  },
  control: {
    padding: theme.spacing(1),
  },
  pagination: {
    color: theme.palette.common.white,
    marginLeft: "auto",
    marginRight: "auto",
  },
  filterColumn: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(1),
  },
  filterContainer: {
    position: "sticky",
    top: 155,
  },
  filter: {
    width: "100%",
  },
  filterHalf: {
    width: "50%",
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  results: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    "& p": {
      marginBottom: theme.spacing(1),
    },
  },
  result: {
    position: "relative",
    borderBottom: "1px solid grey",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryBadge: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  accordion: {
    margin: "auto",
  },
}));

export default function Charities() {
  const classes = useStyles();
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortBy, setSortBy] = useState("charityName");
  const [filterByRating, setFilterByRating] = useState(0);
  const [filterBySizeMin, setFilterBySizeMin] = useState(0);
  const [filterBySizeMax, setFilterBySizeMax] = useState(10000000000000000);
  const [filterByState, setFilterByState] = useState("");
  const [filterByCategory, setFilterByCategory] = useState(0);
  const [filterByName, setFilterByName] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(0);

  // let orgList = allOrganizations;

  let orgList = useFilters(
    allOrganizations,
    filterByRating,
    filterBySizeMin,
    filterBySizeMax,
    filterByState,
    filterByCategory,
    filterByName,
    sortBy,
    sortOrder
  );

  const totalPages = Math.ceil(orgList.length / pageSize);

  let skip = pageNumber * pageSize;

  if (skip > orgList.length) {
    skip = 0;
    setPageNumber(0);
  }

  orgList = orgList.slice(skip, skip + pageSize);

  return (
    <>
      <ThemeProvider theme={blueBg}>
        <Box boxShadow={3} className={classes.controlRow}>
          <Grid container color="primary" alignItems="center">
            <Grid item xs={3} className={classes.control}>
              <TextField
                fullWidth
                size="small"
                variant="filled"
                label="Search charities..."
                onChange={(e) => setFilterByName(String(e.target.value))}
              />
            </Grid>
            <FormControl className={classes.control}>
              <InputLabel id="sort-by-label">Sort by</InputLabel>
              <Select
                label="Sort by"
                labelId="sort-by-label"
                id="sort-by"
                value={sortBy}
                onChange={(e) => setSortBy(String(e.target.value))}
              >
                <MenuItem value="charityName">Name</MenuItem>
                <MenuItem value="currentRating.score">Score</MenuItem>
                <MenuItem value="irsClassification.incomeAmount">Size</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.control}>
              <InputLabel id="sort-order-label">Sort by</InputLabel>
              <Select
                label="Sort order"
                labelId="sort-order-label"
                id="sort-order"
                value={sortOrder}
                onChange={(e) => setSortOrder(String(e.target.value))}
              >
                <MenuItem value="asc">Ascending</MenuItem>
                <MenuItem value="desc">Descending</MenuItem>
              </Select>
            </FormControl>
            <Grid item className={classes.pagination}>
              {pageNumber > 1 && (
                <>
                  <Button onClick={() => setPageNumber(pageNumber - 1)}>
                    Prev
                  </Button>
                  <Button onClick={() => setPageNumber(0)}>1</Button>
                  <Typography variant="caption"> ... </Typography>
                </>
              )}
              {pageNumber > 0 && (
                <Button onClick={() => setPageNumber(pageNumber - 1)}>
                  {" "}
                  {pageNumber}{" "}
                </Button>
              )}
              <Button disabled>{pageNumber + 1} </Button>
              {pageNumber + 1 < totalPages && (
                <Button onClick={() => setPageNumber(pageNumber + 1)}>
                  {" "}
                  {pageNumber + 2}{" "}
                </Button>
              )}
              {pageNumber + 2 < totalPages && (
                <>
                  <Typography variant="caption" color="inherit">
                    {" "}
                    ...{" "}
                  </Typography>
                  <Button onClick={() => setPageNumber(totalPages - 1)}>
                    {totalPages}
                  </Button>
                  <Button onClick={() => setPageNumber(pageNumber + 1)}>
                    Next
                  </Button>
                </>
              )}
            </Grid>
            <FormControl className={classes.control}>
              <InputLabel id="page-size-label">Size</InputLabel>
              <Select
                id="page-size"
                label-id="page-size-label"
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                <MenuItem value="10">10</MenuItem>
                <MenuItem value="25">25</MenuItem>
                <MenuItem value="50">50</MenuItem>
                <MenuItem value="100">100</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Box>
      </ThemeProvider>
      <Grid container>
        <ThemeProvider theme={blueBg}>
          <Grid item xs={3} className={classes.filterColumn}>
            <Box className={classes.filterContainer}>
              <CnAccordion defaultExpanded={true} label="Filter by rating">
                <Select
                  label="Rating"
                  value={filterByRating}
                  className={clsx(classes.filter)}
                  onChange={(e) => setFilterByRating(Number(e.target.value))}
                >
                  <MenuItem value="0">0+</MenuItem>
                  <MenuItem value="1">1+</MenuItem>
                  <MenuItem value="2">2+</MenuItem>
                  <MenuItem value="3">3+</MenuItem>
                  <MenuItem value="4">4+</MenuItem>
                </Select>
              </CnAccordion>
              <CnAccordion defaultExpanded={true} label="Filter by category">
                <Select
                  name="category"
                  onChange={(e) => setFilterByCategory(Number(e.target.value))}
                  className={classes.filter}
                  value={filterByCategory}
                >
                  <MenuItem value="0">Select a category</MenuItem>
                  <MenuItem value="1">Animals</MenuItem>
                  <MenuItem value="2">Arts, Culture, Humanities</MenuItem>
                  <MenuItem value="3">Education</MenuItem>
                  <MenuItem value="4">Environment</MenuItem>
                  <MenuItem value="5">Health</MenuItem>
                  <MenuItem value="6">Human Services</MenuItem>
                  <MenuItem value="7">International</MenuItem>
                  <MenuItem value="8">Human and Civil Rights</MenuItem>
                  <MenuItem value="9">Religion</MenuItem>
                  <MenuItem value="10">Community Development</MenuItem>
                  <MenuItem value="11">Research and Public Policy</MenuItem>
                </Select>
              </CnAccordion>
              <CnAccordion label="Filter by size" defaultExpanded={true}>
                <TextField
                  select
                  id="filter-by-size-min"
                  label="Min"
                  className={classes.filterHalf}
                  value={filterBySizeMin}
                  onChange={(e) => setFilterBySizeMin(Number(e.target.value))}
                >
                  <MenuItem value="0">No min</MenuItem>
                  <MenuItem value="3500000">$3,500,000+</MenuItem>
                  <MenuItem value="13500000">$13,500,000+</MenuItem>
                  <MenuItem value="50000000">$50,000,000+</MenuItem>
                </TextField>
                <TextField
                  select
                  id="filter-by-size-max"
                  label="Max"
                  className={classes.filterHalf}
                  value={filterBySizeMax}
                  onChange={(e) => setFilterBySizeMax(Number(e.target.value))}
                >
                  <MenuItem value="3500000">$3,500,000+</MenuItem>
                  <MenuItem value="13500000">$13,500,000+</MenuItem>
                  <MenuItem value="50000000">$50,000,000+</MenuItem>
                  <MenuItem value="10000000000000000">No max</MenuItem>
                </TextField>
              </CnAccordion>
            </Box>
          </Grid>
        </ThemeProvider>
        <Grid item xs={9} className={classes.results}>
          {orgList?.map((org: Organization) => (
            <Grid
              container
              key={org.orgID}
              justifyContent="space-between"
              align-items="center"
              className={classes.result}
            >
              <Grid
                item
                xs={7}
                container
                direction="column"
                justifyContent="space-between"
              >
                <TpLink href={`/charity/${org.orgID}`}>
                  <Typography variant="h6">{org.charityName}</Typography>
                </TpLink>
                <Typography variant="body2">{org.tagLine}</Typography>
                <Typography variant="body2">
                  <i>{`${org.cause.causeName}`}</i>
                </Typography>
                <Typography variant="body2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  {` ${org.mailingAddress.city}, ${org.mailingAddress.stateOrProvince}`}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <StarRating rating={org.currentRating.rating} />
                <Typography variant="body2">
                  Score: {org.currentRating.score} out of 100
                </Typography>
                <Typography variant="body2">
                  Size: $
                  {org.irsClassification.incomeAmount
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") ?? 0}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" color="secondary">
                  GIVE
                </Button>
              </Grid>
              <div className={classes.categoryBadge}>
                <img src={org.category.image} width={50} height={50} />
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
