import {
  Box,
  Grid,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  Paper,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { blueBgTheme } from "../../theme";
import Accordion from "../Accordion/Accordion";
import Pagination from "../Pagination/Pagination";
import { allOrganizations } from "./data";
import { FilterByCategory } from "./FilterByCategory";
import { FilterByRating } from "./FilterByRating";
import { FilterBySize } from "./FilterBySize";
import { PageSize } from "./PageSize";
import { Result } from "./Result";
import { SelectState } from "./SelectState";
import { SortBy } from "./SortBy";
import { SortOrder } from "./SortOrder";
import { Organization } from "./types";
import { useFilters } from "./useFilters";

export default function OrganizationsPage() {
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortBy, setSortBy] = useState("currentRating.score");
  const [filterByRating, setFilterByRating] = useState(4);
  const [filterBySizeMin, setFilterBySizeMin] = useState(0);
  const [filterBySizeMax, setFilterBySizeMax] = useState(10000000000000000);
  const [filterByState, setFilterByState] = useState("");
  const [filterByCategory, setFilterByCategory] = useState(0);
  const [filterByName, setFilterByName] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [pageIndex, setPageIndex] = useState(0);
  const [openMobileDialog, setOpenMobileDialog] = useState(false);

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

  useEffect(() => {
    setPageIndex(0);
  }, [orgList]);

  let totalPages = Math.ceil(orgList.length / pageSize);
  let start = pageIndex * pageSize;
  let stop = start + pageSize;
  orgList = orgList.slice(start, stop);

  return (
    <>
      <ThemeProvider theme={blueBgTheme}>
        <Grid
          id="controls-row"
          container
          sx={{
            padding: (theme) => theme.spacing(1),
            alignItems: "center",
            position: "sticky",
            backgroundColor: "background.default",
            top: 66,
            zIndex: 100,
            boxShadow: 5,
            display: {
              xs: "none",
              lg: "flex",
            },
          }}
        >
          <Grid item xs={3} sx={{ p: 1 }}>
            <TextField
              fullWidth
              size="small"
              variant="filled"
              label="Search charities..."
              onChange={(e) => setFilterByName(String(e.target.value))}
            />
          </Grid>
          <Grid item sx={{ p: 1 }}>
            <SortBy {...{ sortBy, setSortBy }} />
          </Grid>
          <Grid item sx={{ p: 1 }}>
            <SortOrder {...{ sortOrder, setSortOrder }} />
          </Grid>
          <Grid item sx={{ mr: "auto", ml: "auto" }}>
            <Pagination {...{ pageIndex, setPageIndex, totalPages }} />
          </Grid>
          <Grid item sx={{ p: 1 }}>
            <PageSize {...{ pageSize, setPageSize }} />
          </Grid>
        </Grid>
      </ThemeProvider>
      <Grid container>
        <ThemeProvider theme={blueBgTheme}>
          <Grid
            id="filters-column"
            item
            xs={3}
            sx={{
              mb: 2,
              backgroundColor: "background.default",
              display: {
                xs: "none",
                lg: "flex",
              },
            }}
          >
            <Box
              sx={{
                borderTop: 1,
                borderColor: "common.white",
                position: "sticky",
                top: 153,
                width: 1,
                maxHeight: "78.5vh",
                overflowY: "scroll",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              <Accordion defaultExpanded={true} label="Filter by rating">
                <FilterByRating {...{ filterByRating, setFilterByRating }} />
              </Accordion>
              <Accordion defaultExpanded={true} label="Filter by category">
                <FilterByCategory
                  {...{ filterByCategory, setFilterByCategory }}
                />
              </Accordion>
              <Accordion label="Filter by size" defaultExpanded={false}>
                <FilterBySize
                  {...{
                    filterBySizeMin,
                    filterBySizeMax,
                    setFilterBySizeMin,
                    setFilterBySizeMax,
                  }}
                />
              </Accordion>
              <Accordion label="Filter by state" defaultExpanded={false}>
                <SelectState {...{ filterByState, setFilterByState }} />
              </Accordion>
            </Box>
          </Grid>
          <Grid
            item
            id="filter-sort-mobile"
            sx={{
              display: {
                xs: "flex",
                lg: "none",
              },
              width: 1,
              p: 1,
              boxShadow: 3,
              backgroundColor: (theme) => theme.palette.background.default,
              position: "sticky",
              top: 66,
              zIndex: 100,
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                p: 1,
                width: {
                  xs: 1 / 2,
                  md: 3 / 4,
                },
              }}
            >
              <TextField
                fullWidth
                size="small"
                variant="filled"
                label="Search charities..."
                onChange={(e) => setFilterByName(String(e.target.value))}
              />
            </Box>
            <Box sx={{ p: 1 }}>
              <Button
                sx={{ height: 1 }}
                size="small"
                color="info"
                variant="outlined"
                onClick={() => setOpenMobileDialog(true)}
              >
                Filter and Sort
              </Button>
            </Box>
            <Dialog
              open={openMobileDialog}
              onClose={() => setOpenMobileDialog(false)}
            >
              <DialogTitle>Filter and Sort</DialogTitle>
              <DialogContent>
                <Box sx={{ p: 1 }}>
                  <FilterByRating {...{ filterByRating, setFilterByRating }} />
                </Box>
                <Box sx={{ p: 1 }}>
                  <FilterByCategory
                    {...{ filterByCategory, setFilterByCategory }}
                  />
                </Box>
                <Box sx={{ p: 1 }}>
                  <FilterBySize
                    {...{
                      filterBySizeMin,
                      setFilterBySizeMin,
                      filterBySizeMax,
                      setFilterBySizeMax,
                    }}
                  />
                </Box>
                <Box sx={{ p: 1 }}>
                  <SelectState {...{ filterByState, setFilterByState }} />
                </Box>
                <Box sx={{ p: 1, width: 1 }}>
                  <Button
                    onClick={() => setOpenMobileDialog(false)}
                    sx={{ width: 1 }}
                    variant="contained"
                    color="info"
                  >
                    Done
                  </Button>
                </Box>
              </DialogContent>
            </Dialog>
          </Grid>
        </ThemeProvider>
        <Grid
          id="results"
          item
          xs={12}
          lg={9}
          sx={{
            pr: 0,
            pl: 2,
            "& p": {
              mb: 1,
            },
          }}
        >
          {orgList?.map((org: Organization) => (
            <Result key={org.orgID} org={org} />
          ))}
        </Grid>
      </Grid>
    </>
  );
}
