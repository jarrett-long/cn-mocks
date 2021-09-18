import { InputLabel, MenuItem, Select } from "@mui/material";

export const SortOrder = ({sortOrder, setSortOrder}) => (
  <>
    <InputLabel id="sort-order-label">Sort by</InputLabel>
    <Select
      label="Sort order"
      labelId="sort-order-label"
      id="sort-order"
      variant="standard"
      value={sortOrder}
      onChange={(e) => setSortOrder(String(e.target.value))}
    >
      <MenuItem value="asc">Ascending</MenuItem>
      <MenuItem value="desc">Descending</MenuItem>
    </Select>
  </>
);
