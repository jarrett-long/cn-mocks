import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  controlRow: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    position: "sticky",
    top: 66,
    zIndex: 100,
  },
  blueBg: {
    backgroundColor: theme.palette.primary.main,
  },
  control: {
    padding: theme.spacing(1),
  },
  pagination: {
    color: theme.palette.common.white,
    marginLeft: "auto",
    marginRight: "auto",
  },
  filterColumn: {
    backgroundColor: theme.palette.primary.main,
  },
  filterContainer: {
    borderTop: "1px solid white",
    paddingTop: theme.spacing(1),
    position: "sticky",
    top: 146,
    maxHeight: '75vh',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
  },
  filter: {
    width: "100%",
  },
  filterHalf: {
    width: "50%",
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  results: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    "& p": {
      marginBottom: theme.spacing(1),
    },
  },
  result: {
    position: "relative",
    borderBottom: "1px solid grey",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryBadge: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  accordion: {
    margin: "auto",
  },
}));
