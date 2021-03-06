import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import {TextField, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useForm} from 'react-hook-form'
import WaringIcon from '@material-ui/icons/Warning'



const useStyles = makeStyles((theme) => ({
  root: theme.login.flexColumn,
  title: theme.typo.title,
  inputFields: theme.login.inputFields,
  buttonPrimary: theme.buttons.primary,
}));

function LoginForm({ login, error }) {
  const classes = useStyles();
  const {register, handleSubmit, errors} = useForm();

  function useLocalStorage(){
    const [data, setData] = useState({userName:'', userEmail:'', key:''})
    useEffect(() => {
      localStorage.setItem(data);   
      console.log(data);
    }, [data])
  }

  const onSubmit = data =>{
    console.log(data.name);
    login(data);

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.root}>
        <Typography className={classes.title} variant="h4">Login</Typography>

        {error !== "" ? <div className="error">{error}</div> : ""}

        <TextField
            className={classes.inputFields}
            variant="outlined"
            size="small"
            label="Nome"
            name='name'  
            inputRef={register({required: true})}      
        />
        {errors.name && <p><WaringIcon/>  This is required</p>}

        <TextField
            className={classes.inputFields}
            variant="outlined"
            size="small"
            label="Email"  
            name='email' 
            inputRef={register({required: true})}         
        />

        {errors.email && <p><WaringIcon/>  This is required</p>}


        <TextField
            className={classes.inputFields}
            variant="outlined"
            size="small"
            label="Password"
            name='password'
            type="password"
            inputRef={register({required: true})}
        />
         {errors.password && <p><WaringIcon/>  This is required</p>}


        <Button type="submit" variant="contained" className={classes.buttonPrimary}>Login</Button>
        
      </div>
    </form>
  );
}

export default LoginForm;
