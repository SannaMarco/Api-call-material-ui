import React from 'react';
import ReactDOM from 'react-dom';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Router from './routing/Router';
import './index.css'

const theme = createMuiTheme({
    typo:{
        title:{
            fontSize: '40px',
            margin: '15px'
        }
    },
    login:{
       inputFields:{
        width: '80%',
        margin: '20px 0'
       },
       flexColumn:{
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center'
       }
   },
   buttons:{
       primary:{
           color:'white',
           background:'green'
       }
   }
    
})

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
