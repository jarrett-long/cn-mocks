import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Button, Grid } from "@mui/material";

export default function Pagination({ pageIndex, setPageNumber, totalPages }) {
  let buttons = [];
  const pageNumber = pageIndex + 1;
  if (totalPages < 5) {
    buttons = Array.from(Array(totalPages + 1).keys()).splice(1);
  } else if (pageNumber < 3) {
    buttons = [1, 2, 3, 4, 5];
  } else if (totalPages - pageIndex < 4) {
    buttons = [
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages
    ];
  } else {
    buttons = [
      pageNumber - 2,
      pageNumber - 1,
      pageNumber,
      pageNumber + 1,
      pageNumber + 2,
    ];
  }
  return (
    <Grid container>
      <Grid item>
        <Button color="info" disabled={pageIndex < 1} onClick={() => setPageNumber(0)}>
          Start
        </Button>
        <Button color="info" disabled={pageIndex < 5} onClick={() => setPageNumber(pageIndex - 5)}>
          <ChevronLeftIcon />
        </Button>
      </Grid>
      {buttons.map((button) => (
        <Grid item key={button}>
          <Button 
            color="info"
            variant={button == pageNumber ? "contained" : "text"}
            onClick={() => setPageNumber(button - 1)}>
            {button}
          </Button>
        </Grid>
      ))}
      <Grid item>
        <Button color="info" disabled={pageNumber > totalPages - 5} onClick={() => setPageNumber(pageIndex + 5)}>
          <ChevronRightIcon />
        </Button>
        <Button color="info" disabled={pageNumber == totalPages} onClick={() => setPageNumber(totalPages - 1)}>
          {totalPages}
        </Button>
      </Grid>
    </Grid>
  );
}