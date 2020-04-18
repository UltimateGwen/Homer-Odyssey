import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// import React, { Component } from 'react';
import SignUp from './components/SignUp';

function App() {
  return (
    <MuiThemeProvider>
      <Grid container alignItems="center" style={{ height: '100%' }}>
        <Grid item xs={12}>
          <Paper elevation={4} style={{ margin: 32 }}>
            <Grid container alignItems="center" justify="center">
              <Grid item sm={6} xs={12} style={{ textAlign: 'center' }}>
                <img
                  src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png"
                  alt="homer"
                />
              </Grid>
              <Grid item sm={6} xs={12} alignContent="center">
                <BrowserRouter>
                  <Switch>
                    <Route path="/signup" component={SignUp} />
                  </Switch>
                </BrowserRouter>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
