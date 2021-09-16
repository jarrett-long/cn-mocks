import { Button, Typography, Grid } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

export default function Pagination({ pageNumber, setPageNumber, totalPages }) {
  const lastSection = totalPages - pageNumber < 5;
  const activeIndex = pageNumber % 5;
  const start = pageNumber - activeIndex + 1;
  const end = lastSection ? totalPages : start + 4;
  const buttons = Array.from(Array(end + 1).keys()).splice(start, end);
  return (
    <Grid container>
      <Grid item>
        <Button disabled={pageNumber < 1} onClick={() => setPageNumber(0)}>
          Start
        </Button>
        <Button disabled={pageNumber < 1} onClick={() => setPageNumber(pageNumber - 1)}>
          <ChevronLeftIcon />
        </Button>
      </Grid>
      {buttons.map((button, index) => (
        <Grid item key={button}>
          <Button 
            variant={index === activeIndex ? 'contained' : 'text'} 
            onClick={() => setPageNumber(button - 1)}>
            {button}
          </Button>
        </Grid>
      ))}
      <Grid item>
        <Button disabled={pageNumber >= totalPages} onClick={() => setPageNumber(pageNumber + 1)}>
          <ChevronRightIcon />
        </Button>
        <Button disabled={pageNumber == totalPages} onClick={() => setPageNumber(totalPages - 1)}>
          {totalPages}
        </Button>
      </Grid>
    </Grid>
  );
}