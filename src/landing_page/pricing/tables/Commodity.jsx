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
    '₹20/executed order'
  ),
  createData(
    'STT/CTT',
    '0.01% on sell side (Non-Agri)',
    '0.05% on sell side'
  ),
  createData(
    'Transaction charges',
    `MCX: 0.0021%
NSE: 0.0001%`,
    `MCX: 0.0418%
NSE: 0.001%`
  ),
  createData(
    'GST',
    '18% on (brokerage + SEBI charges + transaction charges)',
    '18% on (brokerage + SEBI charges + transaction charges)'
  ),
  createData(
    'SEBI charges',
    `Agri:
₹1 / crore
Non-agri:
₹10 / crore`,
    '₹10 / crore'
  ),
  createData(
    'Stamp charges',
    '0.002% or ₹200 / crore on buy side',
    '0.003% or ₹300 / crore on buy side'
  ),
];

export default function CommodityTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="commodity table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Commodity Futures</TableCell>
            <TableCell align="left">Commodity Options</TableCell>
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
