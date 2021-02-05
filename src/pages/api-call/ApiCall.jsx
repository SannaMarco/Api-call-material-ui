import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import PaperComponent from './components/Paper'
import NavBar from './components/NavBar'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      }
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
        <div>

            <NavBar />
        
            <Grid container spacing={5}>  



                {randomPersonInfo.map((userInfo, idx) => (
                    <PaperComponent data={getUsername(userInfo)} classes={classes.paper} />
                ))}  
                {randomPersonInfo.map((userInfo, idx) => (
                    <PaperComponent data={getGender(userInfo)} classes={classes.paper} />
                ))}  
                {randomPersonInfo.map((userInfo, idx) => (
                    <PaperComponent data={getAddress(userInfo)} classes={classes.paper} />
                ))}  


            </Grid>
    
        </div>
        
    )
}

export default ApiCall;
