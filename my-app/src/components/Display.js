import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import WCard from "../components/Card";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 440,
    height: 50,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

function Display() {
  const classes = useStyles();
  const inputEl = useRef(null);
  const [data, setData] = useState({});
  const cityQuery = () => {
    let city = inputEl.current.value;
    if (city.trim().length > 0) {
      axios
        .get("/v1/weather", {
          params: {
            city: city,
          },
          headers: {
            Authorization: localStorage.getItem("weatherapptoekn"),
          },
        })
        .then(function (res) {
          setData(res.data);
        })
        .catch(function (err) {
          let msg =
            err.response.status === 401
              ? err.response.data
              : "Something wrong, please try again later";
          alert(msg);
        });
    }
  };
  return (
    <div className="Display">
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="City..."
          inputRef={inputEl}
        />
        <IconButton
          className={classes.iconButton}
          aria-label="search"
          onClick={cityQuery}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <WCard data={data} />
    </div>
  );
}

export default Display;
