import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button, FormControl, Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField, Typography
} from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import { useState } from "react";
import StarRating from "../components/StarRating/StarRating";
import TpLink from "../components/TpLink/TpLink";
import { allOrganizations } from "../data/organizationsData";
import styles from "../styles/charities.module.css";
import { blueBg } from "../theme";
import { Organization } from "../types/organizationType";
import { getPropertyValue } from "../utils/helpers";
import useChainMemo from "../utils/useChainMemo";

const useStyles = makeStyles((theme) => ({
  controlRow: {
    backgroundColor: theme.palette.primary.main,
    // color: theme.palette.common.white,
    padding: theme.spacing(1),
    display: "flex",
    position: "sticky",
    alignItems: "center",
    borderBottom: "1px solid white",
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
  filter: {
    width: "100%",
  },
  results: {
    padding: theme.spacing(2),
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

  let orgList = useChainMemo(allOrganizations, (orgList) => [
    [
      [filterByRating],
      () =>
        orgList.filter((org) => org.currentRating?.rating >= filterByRating),
    ],
    [
      [filterByCategory],
      () =>
        filterByCategory > 0
          ? orgList.filter((org) => org.category.categoryID == filterByCategory)
          : orgList,
    ],
    [
      [filterBySizeMin],
      () =>
        orgList.filter(
          (org) => org.irsClassification.incomeAmount >= filterBySizeMin
        ),
    ],
    [
      [filterBySizeMax],
      () =>
        orgList.filter(
          (org) => org.irsClassification.incomeAmount <= filterBySizeMax
        ),
    ],
    [
      [filterByState],
      () =>
        filterByState !== ""
          ? orgList.filter(
              (org) => org.mailingAddress.stateOrProvince == filterByState
            )
          : orgList,
    ],
    [
      [filterByName],
      () =>
        filterByName != ""
          ? orgList.filter((org) =>
              org.charityName
                ?.toLowerCase()
                .startsWith(filterByName.toLowerCase())
            )
          : orgList,
    ],
    [
      [sortBy, sortOrder],
      () =>
        orgList.sort((current, next) => {
          const currentVal = getPropertyValue(current, sortBy);
          const nextVal = getPropertyValue(next, sortBy);
          const a = sortOrder == "asc" ? currentVal : nextVal;
          const b = sortOrder == "asc" ? nextVal : currentVal;
          return typeof currentVal == "string" ? a.localeCompare(b) : a - b;
        }),
    ],
  ]);

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
        <Grid container className={classes.controlRow} color="primary">
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
      </ThemeProvider>
      <Grid container>
        <ThemeProvider theme={blueBg}>
          <Grid item xs={3} className={classes.filterColumn}>
            <Accordion className={classes.blueBg} defaultExpanded={true}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Filter by rating</Typography>
              </AccordionSummary>
              <AccordionDetails>
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
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.blueBg} defaultExpanded={true}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Filter by category</Typography>
              </AccordionSummary>
              <AccordionDetails>
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
              </AccordionDetails>
            </Accordion>
          </Grid>
        </ThemeProvider>
        <Grid item xs={9} className={classes.results}>
          {orgList?.map((org: Organization) => (
            <div key={org.orgID} className={styles.item}>
              <div className={styles.itemHeading}>
                <TpLink href={`/charity/${org.orgID}`}>
                  <h3>{org.charityName}</h3>
                </TpLink>
                <p>{org.tagLine}</p>
                <p>
                  <i>{`${org.cause.causeName}`}</i>
                </p>
                <span>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  {` ${org.mailingAddress.city}, ${org.mailingAddress.stateOrProvince}`}
                </span>
              </div>
              <div className={styles.itemScore}>
                <StarRating rating={org.currentRating.rating} />
                <p>Score: {org.currentRating.score} out of 100</p>
                <p>
                  Size: $
                  {org.irsClassification.incomeAmount
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",") ?? 0}
                </p>
              </div>
              <div className={styles.itemScore}>
                <Button className={styles.button}>GIVE</Button>
              </div>
              <div className={styles.category}>
                <img src={org.category.image} width={50} height={50} />
              </div>
            </div>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
