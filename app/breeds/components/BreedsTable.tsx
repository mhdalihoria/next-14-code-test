"use client";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BreedsApiResponse } from "@/types/breedsType";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


export default function BreedsTable({ data }: { data: BreedsApiResponse }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Breed</StyledTableCell>
            <StyledTableCell align="left">Country</StyledTableCell>
            <StyledTableCell align="left">Origin</StyledTableCell>
            <StyledTableCell align="left">Coat</StyledTableCell>
            <StyledTableCell align="left">Pattern</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.data.map((breed) => (
            <StyledTableRow key={breed.breed}>
              <StyledTableCell component="th" scope="row">
                {breed.breed}
              </StyledTableCell>
              <StyledTableCell align="left">{breed.country}</StyledTableCell>
              <StyledTableCell align="left">{breed.origin}</StyledTableCell>
              <StyledTableCell align="left">{breed.coat}</StyledTableCell>
              <StyledTableCell align="left">{breed.pattern}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
