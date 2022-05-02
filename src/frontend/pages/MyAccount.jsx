import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import sty from "./user.module.css";
import "./Home.css";

export default function MyAccount() {
  const [open, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [name, setName] = useState("");
  const [emailaddr, setEmailaddr] = useState("");
  const [age, setAge] = useState("");
  const [county, setCounty] = useState("");
  const [username, setUsername] = useState("");
  const handleClickOpen = (item) => {
    setCurrentItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [tableData, setTableData] = useState([]);

  const getTableData = () => {
    axios
      .get("/app/userAccountData")
      .then((res) => {
        if (res.data.code === -1) {
          alert(res.data.msg);
        } else {
          console.log("user res = ", res.data.data);
          setTableData(res.data.data);
        }
      })
      .catch(() => {
        alert("An error has occurred.");
      });
  };

  useEffect(() => {
    getTableData();
  }, []);

  useEffect(() => {
    if (open) {
      console.log("currentItem = ", currentItem);
      setName(currentItem.name);
      setEmailaddr(currentItem.emailaddr);
      setAge(currentItem.age);
      setCounty(currentItem.county);
      setUsername(currentItem.username);
    }
  }, [currentItem, open]);

  return (
    <div className="home">
      <div className={sty.box2}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit User</DialogTitle>
          <DialogContent>
            <TextField
              style={{
                width: "400px",
              }}
              fullWidth
              variant="standard"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              label="Name"
            />
            <TextField
              style={{
                width: "400px",
              }}
              fullWidth
              variant="standard"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              label="Username"
            />
            <TextField
              style={{
                width: "400px",
              }}
              fullWidth
              variant="standard"
              value={emailaddr}
              onChange={(e) => {
                setEmailaddr(e.target.value);
              }}
              label="Email Address"
            />
            <TextField
              style={{
                width: "400px",
              }}
              fullWidth
              variant="standard"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              label="Age"
            />
            <TextField
              style={{
                width: "400px",
              }}
              fullWidth
              variant="standard"
              value={county}
              onChange={(e) => {
                setCounty(e.target.value);
              }}
              label="County"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() => {
                // edit
                axios
                  .post("/app/updateUser", {
                    name,
                    username,
                    emailaddr,
                    age,
                    county,
                  })
                  .then((res) => {
                    if (res.data.code === -1) {
                      alert(res.data.msg);
                    } else {
                      getTableData();
                      setOpen(false);
                    }
                  })
                  .catch(() => {
                    alert("An error has occurred.");
                  });
              }}
            >
              Enter
            </Button>
          </DialogActions>
        </Dialog>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">Email Address</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">County</TableCell>
                <TableCell align="right">Operation</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {tableData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.username}</TableCell>
                  <TableCell align="right">{row.emailaddr}</TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                  <TableCell align="right">{row.county}</TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => {
                        handleClickOpen(row);
                      }}
                      style={{
                        marginRight: 20,
                      }}
                    >
                      EDIT
                    </Button>
                    <Button
                      onClick={() => {
                        // delete
                        axios
                          .post("/app/deleteUser", {
                            username: row.username,
                          })
                          .then((res) => {
                            if (res.data.code === -1) {
                              alert(res.data.msg);
                            } else {
                              getTableData();
                            }
                          })
                          .catch(() => {
                            alert("An error has occurred.");
                          });
                      }}
                      color="error"
                      style={{
                        marginRight: 20,
                      }}
                    >
                      DELETE
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {!tableData.length && <div className={sty.emptyBox}>no data</div>}
      </div>
    </div>
  );
}
