import { useEffect, useState } from 'react';
import { Button, Typography, Grid } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

export default function Pagination({ pageIndex, setPageNumber, totalPages }) {
  let buttons = [];
  // const lastSection = totalPages - pageNumber < 5;
  // const firstSection = pageNumber <= 2;
  // const activeIndex = firstSection || lastSection ? pageNumber % 5 : 2;
  // const start = firstSection ? 1 : pageNumber - 2;
  // const end = lastSection ? totalPages : start + 4;
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
  // const buttons = Array.from(Array(end + 1).keys()).splice(start, end);
  return (
    <Grid container>
      <Grid item>
        <Button disabled={pageIndex < 1} onClick={() => setPageNumber(0)}>
          Start
        </Button>
        <Button disabled={pageIndex < 1} onClick={() => setPageNumber(pageIndex - 1)}>
          <ChevronLeftIcon />
        </Button>
      </Grid>
      {buttons.map((button) => (
        <Grid item key={button}>
          <Button 
            variant={button === pageNumber ? 'contained' : 'text'} 
            onClick={() => setPageNumber(button - 1)}>
            {button}
          </Button>
        </Grid>
      ))}
      <Grid item>
        <Button disabled={pageNumber == totalPages} onClick={() => setPageNumber(pageIndex + 1)}>
          <ChevronRightIcon />
        </Button>
        <Button disabled={pageNumber == totalPages} onClick={() => setPageNumber(totalPages - 1)}>
          {totalPages}
        </Button>
      </Grid>
    </Grid>
  );
}