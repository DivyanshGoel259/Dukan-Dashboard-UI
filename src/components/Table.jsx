import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(OrderID, Status, TransactionID, RefundDate, OrderAmount) {
  return { OrderID, Status, TransactionID, RefundDate, OrderAmount};
}

const rows = [
  createData('#281209', "Successful", "TRX123456", "Today, 8:45 PM","₹1125.00"),
  createData('#281210', "Processing", "TRX123456", "Today, 8:45 PM","₹1125.00"),
  createData('#281211', "Successful", "TRX123456", "Today, 8:45 PM","₹1125.00"),
  createData('#281212', "Processing", "TRX123456", "Today, 8:45 PM","₹1125.00"),
  createData('#281214', "Processing", "TRX123456", "Today, 8:45 PM","₹1125.00"),
  createData('#281215', "Successful", "TRX123456", "Today, 8:45 PM","₹1125.00"),
  createData('#281216', "Processing", "TRX123456", "Today, 8:45 PM","₹1125.00"),
  createData('#281217', "Processing", "TRX123456", "Today, 8:45 PM","₹1125.00"),
  createData('#281218', "Successful", "TRX123456", "Today, 8:45 PM","₹1125.00"), 
];

export function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Order ID</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Transaction ID&nbsp;</TableCell>
            <TableCell align="right">Refund Date&nbsp;</TableCell>
            <TableCell align="right">Order Amount&nbsp;</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.OrderID}
              </TableCell>
              <TableCell align="right">{row.Status}</TableCell>
              <TableCell align="right">{row.TransactionID}</TableCell>
              <TableCell align="right">{row.RefundDate}</TableCell>
              <TableCell align="right">{row.OrderAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
