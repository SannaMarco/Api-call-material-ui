import React from 'react';
import ReactDOM from 'react-dom';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Router from './routing/Router';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#333',
            main: '#4a94b8',
            dark: '#356a84',
        },
        secondary: {
            light: '#333',
            main: '#333',
            dark: '#333',
        },
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
