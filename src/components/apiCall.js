import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { get } from 'http';

function ApiCall() {

    
    const [randomPersonInfo, setRandomPersonInfo] = useState([]);

    const url = 'https://randomuser.me/api';
    

    const fetchData = async () =>{
        try {
            const { data } = await axios.get(url);
            return data;
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() =>{
        fetchData().then((data) =>{
            setRandomPersonInfo(data.results);
        });
    }, [])

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

const classes = useStyles();

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
