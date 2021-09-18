import { InputLabel, MenuItem, Select } from "@mui/material";

export const PageSize = ({ pageSize, setPageSize }) => (
  <>
    <InputLabel id="page-size-label">Size</InputLabel>
    <Select
      id="page-size"
      label-id="page-size-label"
      variant="standard"
      value={pageSize}
      onChange={(e) => setPageSize(Number(e.target.value))}
    >
      <MenuItem value="10">10</MenuItem>
      <MenuItem value="25">25</MenuItem>
      <MenuItem value="50">50</MenuItem>
      <MenuItem value="100">100</MenuItem>
    </Select>
  </>
);
