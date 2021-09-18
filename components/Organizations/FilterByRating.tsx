import { MenuItem, Select } from "@mui/material";

export const FilterByRating = ({ filterByRating, setFilterByRating }) => (
  <Select
    label="Rating"
    value={filterByRating}
    sx={{ width: 1 }}
    onChange={(e) => setFilterByRating(Number(e.target.value))}
  >
    <MenuItem value="0">0+</MenuItem>
    <MenuItem value="1">1+</MenuItem>
    <MenuItem value="2">2+</MenuItem>
    <MenuItem value="3">3+</MenuItem>
    <MenuItem value="4">4+</MenuItem>
  </Select>
);
