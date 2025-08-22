import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, futures, options) {
  return { name, futures, options };
}

const rows = [
  createData(
    'Brokerage',
    '0.03% or Rs. 20/executed order whichever is lower',
    'Flat Rs. 20 per executed order'
  ),
  createData(
    'STT/CTT',
    '0.02% on the sell side',
    `0.0125% of the intrinsic value on options that are bought and exercised
0.1% on sell side (on premium)`
  ),
  createData(
    'Transaction charges',
    `NSE: 0.00173%
BSE: 0`,
    `NSE: 0.03503% (on premium)
BSE: 0.0325% (on premium)`
  ),
  createData(
    'GST',
    '18% on (brokerage + SEBI charges + transaction charges)',
    '18% on (brokerage + SEBI charges + transaction charges)'
  ),
  createData('SEBI charges', '₹10 / crore', '₹10 / crore'),
  createData(
    'Stamp charges',
    '0.002% or ₹200 / crore on buy side',
    '0.003% or ₹300 / crore on buy side'
  ),
];

export default function FnOTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="fno table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">F&amp;O - Futures</TableCell>
            <TableCell align="left">F&amp;O - Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">
                {row.futures.split('\n').map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </TableCell>
              <TableCell align="left">
                {row.options.split('\n').map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
