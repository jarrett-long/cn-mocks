import { InputLabel, Select, MenuItem } from "@mui/material";
import React from "react";

export const SortBy = ({sortBy, setSortBy}) => (
  <>
    <InputLabel id="sort-by-label">Sort by</InputLabel>
    <Select
      color="primary"
      label="Sort by"
      labelId="sort-by-label"
      id="sort-by"
      value={sortBy}
      variant="standard"
      onChange={(e) => setSortBy(String(e.target.value))}
    >
      <MenuItem value="charityName">Name</MenuItem>
      <MenuItem value="currentRating.score">Score</MenuItem>
      <MenuItem value="irsClassification.incomeAmount">Size</MenuItem>
    </Select>
  </>
);
