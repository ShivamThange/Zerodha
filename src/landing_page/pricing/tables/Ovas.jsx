import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(service, frequency, charges) {
  return { service, frequency, charges };
}

const rows = [
  createData('Tickertape', 'Monthly / Annual', 'Free: 0 | Pro: 249/2399'),
  createData('Smallcase', 'Per transaction', 'Buy & Invest More: 100 | SIP: 10'),
  createData('Kite Connect', 'Monthly', 'Connect: 500 | Personal: Free'),
];

export default function ServicesTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 , width: "100%"}} aria-label="services table">
        <TableHead>
          <TableRow>
            <TableCell>Service</TableCell>
            <TableCell align="left">Billing Frequency</TableCell>
            <TableCell align="left">Charges</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.service}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.service}
              </TableCell>
              <TableCell align="left">{row.frequency}</TableCell>
              <TableCell align="left">{row.charges}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

