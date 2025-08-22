import React from "react";
import { List, ListItem, ListItemText, Paper } from "@mui/material";

const quickLinks = [
  "Track account opening",
  "Track segment activation",
  "Intraday margins",
  "Kite user manual",
];

const QuickLinks = () => {
  return (
    <Paper elevation={3} className="p-3 quick-links">
      <h6 className="fw-bold mb-3">Quick links</h6>
      <List dense>
        {quickLinks.map((link, idx) => (
          <ListItem key={idx} button>
            <ListItemText primary={`${idx + 1}. ${link}`} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default QuickLinks;
