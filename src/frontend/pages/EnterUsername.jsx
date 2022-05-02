import React from "react";
import CountyTable from "../components/Chart/CountyTable";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import sty from "./login.module.css";

export default function EnterUsername() {
  const [username, setUsername] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = () => {
    axios
      .post("/app/login-user", {
        username,
      })
      .then((res) => {
        if (res.data.code === -1) {
          alert(res.data.msg);
        } else {
          alert(res.data.msg);
          setLogin(true);
        }
      })
      .catch(() => {
        alert("An error has occurred.");
      });
  };

  return login ? (
    <CountyTable />
  ) : (
    <div className={sty.box}>
      <div className={sty.loginBox}>
        <h1 className={sty.h1}>{"Please enter your username"}</h1>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              style={{
                width: "60%",
              }}
              label="Username"
            />
          </div>
        </Box>
        <div className="sideBySide">
          <div style={{ marginTop: 20 }}>
            <Button onClick={handleSubmit} variant="contained">
              {"Enter"}
            </Button>
          </div>
          <div className={sty.note}>
            <h3>Please use this button - do not type enter</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
