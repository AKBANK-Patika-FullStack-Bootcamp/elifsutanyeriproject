import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function GetUser(props) {
  return (
    <>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Elektrik</TableCell>
                <TableCell align="right">Su</TableCell>
                <TableCell align="right">Gaz </TableCell>
                <TableCell align="right">Aidat</TableCell>
                <TableCell align="right">Ay</TableCell>
                <TableCell align="right">Ödendi</TableCell>
                <TableCell align="right">Kullanıcı Id</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.bills &&
                props.bills.map((bill, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {props.bills.id}
                    </TableCell>
                    <TableCell align="right">{bill.electricity}</TableCell>
                    <TableCell align="right">{bill.water}</TableCell>
                    <TableCell align="right">{bill.gas}</TableCell>
                    <TableCell align="right">{bill.due}</TableCell>
                    <TableCell align="right">{bill.month}</TableCell>
                    <TableCell align="right">{bill.ispaid}</TableCell>
                    <TableCell align="right">{bill.userid}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
