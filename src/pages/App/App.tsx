import React from 'react';
import './App.scss';
import {createMuiTheme} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import Header from '../../components/Header/Header';
import {Route, Switch} from 'react-router';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';

const App: React.FC = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#104DA1'
      }
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <main className="p-3 App-main">
        <Switch>
          <Route path="/profile" component={Profile}/>
          <Route path="/" component={Home}/>
          <Route render={() => 'Page not found'}/>
        </Switch>
      </main>
    </ThemeProvider>
  );
};

export default App;
