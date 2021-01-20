import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Info from "@material-ui/icons/Info";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 450,
    height: 220,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  loginBut: {
    width: 120,
    margin: "auto",
  },
  tooltip: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 110,
    bottom: 6,
  },
}));

function Login(props) {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const classes = useStyles();
  const login = () => {
    axios
      .post("/auth/login", {
        username: username,
        pwd: pwd,
      })
      .then(function (res) {
        localStorage.setItem("weatherapptoekn", res.data);
        props.signAction(true);
      })
      .catch(function (err) {
        console.log(err.response);
        alert(err.response.data);
      });
  };
  let isdisabled = username.length === 0 && pwd.length === 0;

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="username"
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <TextField
        id="password"
        type="password"
        label="Password"
        variant="outlined"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={login}
        disabled={isdisabled}
        className={classes.loginBut}
      >
        Log In
      </Button>
      <Tooltip title="username:admin,password:123456" arrow>
        <IconButton
          className={classes.tooltip}
          color="primary"
          aria-label=""
          component="span"
        >
          <Info />
        </IconButton>
      </Tooltip>
    </form>
  );
}

export default Login;
