import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(value, amc) {
  return { value, amc };
}

const rows = [
  createData('Up to ₹4 lakh', 'Free*'),
  createData('₹4 lakh - ₹10 lakh', '₹100 per year, charged quarterly*'),
  createData('Above ₹10 lakh', '₹300 per year, charged quarterly'),
];

export default function AmcTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="amc table">
        <TableHead>
          <TableRow>
            <TableCell>Value of Holdings</TableCell>
            <TableCell align="right">AMC</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.value}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.value}
              </TableCell>
              <TableCell align="right">{row.amc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
