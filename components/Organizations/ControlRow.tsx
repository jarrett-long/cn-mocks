import { withStyles } from '@mui/styles';
import { Box, Grid, TextField, Select, InputLabel, FormControl, MenuItem } from '@mui/material';

const ControlRow = ({ 
  setFilterByName,
  setSortBy,
  sortBy,
  setSortOrder,
  classes
}) => {
  return (
    <Box boxShadow={3} className={classes.controlRow} sx={{
      color: (theme) => theme.palette.common.white,
      // backgroundColor: (theme) => theme.palette.primary.main
    }}>
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
            color="primary"
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
            pageIndex={pageNumber}
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

  )
}