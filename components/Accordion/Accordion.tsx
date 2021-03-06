import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@mui/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Typography } from "@mui/material";
import { useState } from "react";

export default function Accordion({ label, children, defaultExpanded }) {

  const [expanded, setExpanded] = useState(defaultExpanded)

  const Accordion = withStyles({
    root: {
      // backgroundColor: '#336699',
      // borderBottom: "1px solid rgba(0, 0, 0, .125)",
      borderTop: 0,
      borderRight: 0, 
      borderLeft: 0, 
      borderRadius: 0,
      '&:last-child': {
        borderRadius: 0,
        borderBottom: '1px solid rgba(0, 0, 0, .125)'
      },
      // boxShadow: "none",
      "&:before": {
        display: "none",
      },
      "&$expanded": {
        margin: "auto",
      },
    },
    expanded: {},
  })(MuiAccordion);

  const AccordionSummary = withStyles({
    root: {
      borderBottom: "1px solid rgba(0, 0, 0, .125)",
      marginBottom: -1,
      boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);",
      minHeight: 56,
      "&$expanded": {
        minHeight: 56,
      },
    },
    content: {
      "&$expanded": {
        margin: "12px 0",
      },
    },
    expanded: {},
  })(MuiAccordionSummary);

  const AccordionDetails = withStyles((theme) => ({
    root: {
      padding: theme.spacing(3),
      backgroundColor: 'rgba(255, 255, 255, 0.09)'
    },
  }))(MuiAccordionDetails);

  return (
    <Accordion
      defaultExpanded={expanded}
      onChange={() => setExpanded(!expanded)}
      variant="elevation"
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{label}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
