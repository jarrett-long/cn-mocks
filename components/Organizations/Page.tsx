import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box, Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import clsx from "clsx";
import { useState } from "react";
import { blueBg } from "../../theme";
import Accordion from "../Accordion/Accordion";
import Link from "../Link/Link";
import Pagination from "../Pagination/Pagination";
import StarRating from "../StarRating/StarRating";
import { allOrganizations } from "./data";
import { useFilters } from "./logic";
import { useStyles } from "./styles";
import { Organization } from "./types";

export default function OrganizationsPage() {
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

  let totalPages = Math.ceil(orgList.length / pageSize);
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
              <Pagination 
                pageNumber={pageNumber} 
                setPageNumber={setPageNumber}
                totalPages={totalPages}
              />
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
              <Accordion defaultExpanded={true} label="Filter by rating">
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
              </Accordion>
              <Accordion defaultExpanded={true} label="Filter by category">
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
              </Accordion>
              <Accordion label="Filter by size" defaultExpanded={true}>
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
              </Accordion>
              <Accordion label="Filter by state" defaultExpanded={true}>
                <TextField
                  select
                  id="filter-by-state"
                  label="State"
                  className={classes.filter}
                  value={filterByState}
                  onChange={(e) => setFilterByState(String(e.target.value))}
                >
                  <MenuItem value="">Select a state</MenuItem>
                  <MenuItem value="AL">Alabama</MenuItem>
                  <MenuItem value="AK">Alaska</MenuItem>
                  <MenuItem value="AZ">Arizona</MenuItem>
                  <MenuItem value="AR">Arkansas</MenuItem>
                  <MenuItem value="CA">California</MenuItem>
                  <MenuItem value="CO">Colorado</MenuItem>
                  <MenuItem value="CT">Connecticut</MenuItem>
                  <MenuItem value="DE">Delaware</MenuItem>
                  <MenuItem value="DC">District Of Columbia</MenuItem>
                  <MenuItem value="FL">Florida</MenuItem>
                  <MenuItem value="GA">Georgia</MenuItem>
                  <MenuItem value="HI">Hawaii</MenuItem>
                  <MenuItem value="ID">Idaho</MenuItem>
                  <MenuItem value="IL">Illinois</MenuItem>
                  <MenuItem value="IN">Indiana</MenuItem>
                  <MenuItem value="IA">Iowa</MenuItem>
                  <MenuItem value="KS">Kansas</MenuItem>
                  <MenuItem value="KY">Kentucky</MenuItem>
                  <MenuItem value="LA">Louisiana</MenuItem>
                  <MenuItem value="ME">Maine</MenuItem>
                  <MenuItem value="MD">Maryland</MenuItem>
                  <MenuItem value="MA">Massachusetts</MenuItem>
                  <MenuItem value="MI">Michigan</MenuItem>
                  <MenuItem value="MN">Minnesota</MenuItem>
                  <MenuItem value="MS">Mississippi</MenuItem>
                  <MenuItem value="MO">Missouri</MenuItem>
                  <MenuItem value="MT">Montana</MenuItem>
                  <MenuItem value="NE">Nebraska</MenuItem>
                  <MenuItem value="NV">Nevada</MenuItem>
                  <MenuItem value="NH">New Hampshire</MenuItem>
                  <MenuItem value="NJ">New Jersey</MenuItem>
                  <MenuItem value="NM">New Mexico</MenuItem>
                  <MenuItem value="NY">New York</MenuItem>
                  <MenuItem value="NC">North Carolina</MenuItem>
                  <MenuItem value="ND">North Dakota</MenuItem>
                  <MenuItem value="OH">Ohio</MenuItem>
                  <MenuItem value="OK">Oklahoma</MenuItem>
                  <MenuItem value="OR">Oregon</MenuItem>
                  <MenuItem value="PA">Pennsylvania</MenuItem>
                  <MenuItem value="RI">Rhode Island</MenuItem>
                  <MenuItem value="SC">South Carolina</MenuItem>
                  <MenuItem value="SD">South Dakota</MenuItem>
                  <MenuItem value="TN">Tennessee</MenuItem>
                  <MenuItem value="TX">Texas</MenuItem>
                  <MenuItem value="UT">Utah</MenuItem>
                  <MenuItem value="VT">Vermont</MenuItem>
                  <MenuItem value="VA">Virginia</MenuItem>
                  <MenuItem value="WA">Washington</MenuItem>
                  <MenuItem value="WV">West Virginia</MenuItem>
                  <MenuItem value="WI">Wisconsin</MenuItem>
                  <MenuItem value="WY">Wyoming</MenuItem>
                </TextField>
              </Accordion>
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
                <Link href={`/charity/${org.orgID}`}>
                  <Typography variant="h6">{org.charityName}</Typography>
                </Link>
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
