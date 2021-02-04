import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { get } from 'http';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function ApiCall() {
    const [randomPersonInfo, setRandomPersonInfo] = useState([]);
    const classes = useStyles();

    useEffect(() =>{
        fetchData().then((data) =>{
            setRandomPersonInfo(data.results);
        });
    }, [])

    const fetchData = async () =>{
        try {
            const { data } = await axios.get('https://randomuser.me/api');
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    const getUsername = (userInfo) =>{
        const {name: {first, last}} = userInfo;
        return `${first} ${last}`;
    }

    const getGender = (userInfo) =>{
        const {gender} = userInfo;
        return `${gender}`;
    }

    const getAddress = (userInfo) =>{
        const {location : {street: {name, number}}} = userInfo;
        return `${name} ${number}`;
    }

    return (
        
        <Grid container spacing={3}>

            {randomPersonInfo.map((userInfo, idx) => (
                     <Grid item xs={12}>
                         <Paper className={classes.paper} >
                             {getUsername(userInfo)} 
                         </Paper>
                     </Grid>
                ))}


            {randomPersonInfo.map((userInfo, idx) => (
                     <Grid item xs={4}>
                         <Paper className={classes.paper} >
                             {getGender(userInfo)}
                         </Paper>
                     </Grid>
                ))}

            {randomPersonInfo.map((userInfo, idx) => (
                     <Grid item xs={4}>
                         <Paper className={classes.paper} >
                             {getAddress(userInfo)}
                         </Paper>
                     </Grid>
                ))}

            {randomPersonInfo.map((userInfo, idx) => (
                     <Grid item xs={4}>
                         <Paper className={classes.paper} >
                             {getGender(userInfo)}
                         </Paper>
                     </Grid>
                ))}
                
            

        </Grid>
        
    )
}

export default ApiCall;
