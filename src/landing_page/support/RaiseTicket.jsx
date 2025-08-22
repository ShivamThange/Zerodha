import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const sections = [
  {
    title: "Account Opening",
    items: ["Resident individual", "Minor", "Non Resident Indian (NRI)", "Company, Partnership, HUF and LLP", "Glossary"],
  },
  {
    title: "Your Zerodha Account",
    items: ["Your Profile", "Account modification", "Client Master Report (CMR) and Depository Participant (DP)", "Nomination", "Transfer and conversion of securities"],
  },
  {
    title: "Kite",
    items: ["IPO", "Trading FAQs", "Margin Trading Facility (MTF) and Margins", "Charts and orders", "Alerts and Nudges", "General"],
  },
  {
    title: "Funds",
    items: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
  },
  {
    title: "Console",
    items: ["Portfolio", "Corporate actions", "Funds statement", "Reports", "Profile", "Segments"],
  },
  {
    title: "Coin",
    items: ["Mutual funds", "National Pension Scheme (NPS)", "Fixed Deposit (FD)", "Features on Coin", "Payments and Orders", "General"],
  },
];

const RaiseTickets = () => {
  return (
    <div className="accordion-container mt-4">
      {sections.map((section, idx) => (
        <Accordion key={idx} className="mb-2">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className="fw-bold">{section.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              {section.items.map((item, i) => (
                <ListItem key={i} button>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default RaiseTickets;

