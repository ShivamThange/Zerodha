import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(accountType, charges) {
  return { accountType, charges };
}

const rows = [
  createData('Online account', 'Free'),
  createData('Offline account', 'Free'),
  createData('NRI account (offline only)', '₹500'),
  createData('Partnership, LLP, HUF, or Corporate accounts (offline only)', '₹500'),
];

export default function AccountTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="account charges table">
        <TableHead>
          <TableRow>
            <TableCell>Type of Account</TableCell>
            <TableCell align="left">Charges</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.accountType}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.accountType}
              </TableCell>
              <TableCell align="left">{row.charges}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
