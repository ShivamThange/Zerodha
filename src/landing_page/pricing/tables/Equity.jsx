import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, equityDelivery, equityIntraday) {
  return { name, equityDelivery, equityIntraday };
}

const rows = [
  createData(
    'Brokerage',
    'Zero Brokerage',
    '0.03% or Rs. 20/executed order whichever is lower'
  ),
  createData('STT/CTT', '0.1% on buy & sell', '0.025% on the sell side'),
  createData(
    'Transaction charges',
    `NSE: ${0.00297}% BSE: ${0.00375}%`,
    `NSE: ${0.00297}% BSE:${0.00375}% `
  ),
  createData(
    'GST',
    `${18}% on (brokerage + SEBI charges + transaction charges)	`,
    `${18}% on (brokerage + SEBI charges + transaction charges`
  ),
  createData('SEBI charges', `₹10 per crore`, `	₹10 per crore`),
  createData(
    'Stamp charges',
    `${0.015}% or ₹1500 per crore on buy side`,
    `${0.003}% or ₹300 per crore on buy side`
  ),
];

export default function EquityTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="left">Equity Delivery</TableCell>
            <TableCell align="left">Equity Intraday</TableCell>
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
              <TableCell align="left">{row.equityDelivery}</TableCell>
              <TableCell align="left">{row.equityIntraday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
