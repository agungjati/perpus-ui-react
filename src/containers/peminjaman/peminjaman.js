import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  header : {
    "margin-bottom": "10px"
  }
}));

function createData(kode, judul, penulis, peminjam, bataswaktu, denda) {
  return { kode, judul, penulis, peminjam, bataswaktu, denda };
}

let today = new Date();
const rows = [
  createData('10', 'Pemrogramman Desktop', 'Naruguk', 
  'Agung Jati', new Date(today.setDate( today.getDate() + 1 )), 0),
  createData('101', 'Pemrogramman Web', 'Naruguk', 
  'Agung Handaru', new Date(today.setDate( today.getDate() + 2 )), 0),  
  createData('110', 'Pemrogramman C++', 'Naruguk', 
  'Asta', new Date(today.setDate( today.getDate() + 3 )) , 0),
];

export default function Peminjaman() {
  const classes = useStyles();

  return (
    <div >
      <Typography  className={classes.header} variant="h6" noWrap>
            Peminjaman Buku
          </Typography>
          <Paper>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Kode</TableCell>
            <TableCell >Judul</TableCell>
            <TableCell >Penulis</TableCell>
            <TableCell >Peminjam</TableCell>
            <TableCell align="center">Batas waktu</TableCell>
            <TableCell align="right">Denda</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.kode}>
              <TableCell component="th" scope="row">
                {row.kode}
              </TableCell>
              <TableCell >{row.judul}</TableCell>
              <TableCell >{row.penulis}</TableCell>
              <TableCell >{row.peminjam}</TableCell>
              <TableCell align="center">{row.bataswaktu.toDateString()}</TableCell>
              <TableCell align="right">{row.denda}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Paper>
    </div>
  );
}
