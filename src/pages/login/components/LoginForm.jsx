import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import {TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center'
  },
}));

function LoginForm({ login, error }) {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });
  const classes = useStyles();

  const submitHandler = (e) => {
    e.preventDefault();

    login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.root}>
        <Typography variant="h4">Login</Typography>

        {error !== "" ? <div className="error">{error}</div> : ""}

        <TextField
            variant="outlined"
            size="small"
            label="Nome"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
        />

        <TextField
            variant="outlined"
            size="small"
            label="Email"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.email}
        />

        <TextField
            variant="outlined"
            size="small"
            label="Password"
            type="password"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
        />

        <Button type="submit" variant="contained" color="primary">Login</Button>
        
      </div>
    </form>
  );
}

export default LoginForm;
