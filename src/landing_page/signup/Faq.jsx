import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="faq container">
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                component="span"
                sx={{ width: "100%", flexShrink: 0 }}
              >
                What is a Zerodha Account
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A Zerodha account is a combined demat and trading account that
                allows investors to buy, sell, and hold securities digitally.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                component="span"
                sx={{ width: "100%", flexShrink: 0 }}
              >
                What documents are required to open a demat account?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The following documents are required to open a Zerodha account
                online:
                <br />
                <ul>
                  <li>
                    {" "}
                    PAN number
                    <br />
                  </li>
                  <li>
                    Aadhaar Card (Linked with a phone number for OTP
                    verification)
                    <br />
                  </li>
                  <li>
                    Cancelled cheque or bank account statement (To link your
                    bank account)
                    <br />
                  </li>
                  <li>
                    Income proof (Required only if you wish to trade in Futures
                    & options)
                    <br />
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                component="span"
                sx={{ width: "100%", flexShrink: 0 }}
              >
                Is Zerodha account opening free?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Yes, It is completely free.</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography
                component="span"
                sx={{ width: "100%", flexShrink: 0 }}
              >
                Are there any maintenance charges for a demat account?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The account maintaince charges is appliacable based on the
                account type.
                <br />
                For Basic Services Demat Account: Zero charges if the holding
                value is less than ₹4,00,000.
                <br />
                For non-Basic Services Demat Account demat accounts: ₹300 per
                year + GST.
                <br />
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography
                component="span"
                sx={{ width: "100%", flexShrink: 0 }}
              >
                Can I open a demat account without a bank account?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                To open a demat account, you must have a bank account in your
                name. If UPI verification is completed successfully, no proof of
                bank is needed. However, if bank verification fails, you'll need
                to provide either a<br />
                cancelled cheque or a bank statement to link your bank account
                to Zerodha.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Faq;
