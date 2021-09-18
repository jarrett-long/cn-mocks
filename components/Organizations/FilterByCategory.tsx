import { MenuItem, Select } from "@mui/material";

export const FilterByCategory = ({ filterByCategory, setFilterByCategory }) => (
  <Select
    name="category"
    onChange={(e) => setFilterByCategory(Number(e.target.value))}
    sx={{ width: 1 }}
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
);
