import {
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";

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

export default function SkeletonTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Skeleton animation="wave" sx={{ bgcolor: 'grey.900' }}/>
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" sx={{ bgcolor: "grey.900" }} />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" sx={{ bgcolor: "grey.900" }} />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" sx={{ bgcolor: "grey.900" }} />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" sx={{ bgcolor: "grey.900" }} />
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
            <StyledTableCell align="left">
              <Skeleton animation="wave" />
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
