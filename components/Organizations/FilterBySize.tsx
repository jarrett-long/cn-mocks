import { MenuItem, TextField } from "@mui/material";
import React from "react";

export const FilterBySize = ({
  filterBySizeMin,
  setFilterBySizeMin,
  filterBySizeMax,
  setFilterBySizeMax,
}) => (
  <>
    <TextField
      select
      id="filter-by-size-min"
      label="Min"
      sx={{ width: 1 / 2 }}
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
      sx={{ width: 1 / 2 }}
      value={filterBySizeMax}
      onChange={(e) => setFilterBySizeMax(Number(e.target.value))}
    >
      <MenuItem value="3500000">$3,500,000+</MenuItem>
      <MenuItem value="13500000">$13,500,000+</MenuItem>
      <MenuItem value="50000000">$50,000,000+</MenuItem>
      <MenuItem value="10000000000000000">No max</MenuItem>
    </TextField>
  </>
);
