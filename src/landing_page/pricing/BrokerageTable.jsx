import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TableContainer from "./TableContainer.jsx";
import FnOTable from "./tables/Fno";
import CurrencyTable from "./tables/Currency";
import CommodityTable from "./tables/Commodity";
import EquityTable from "./tables/equity";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BrokerageTable = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="brokerageTable">
      <Box
        sx={{ alignContent: "center", justifyItems: "center" }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "80%" }}>
          <Tabs value={value} onChange={handleChange} aria-label="">
            <Tab label="Equity" {...a11yProps(0)} />
            <Tab label="FnO" {...a11yProps(1)} />
            <Tab label="Currency" {...a11yProps(2)} />
            <Tab label="Commodity" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <TableContainer table={<EquityTable />} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <TableContainer table={<FnOTable />} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <TableContainer table={<CurrencyTable />} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <TableContainer table={<CommodityTable />} />
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default BrokerageTable;
