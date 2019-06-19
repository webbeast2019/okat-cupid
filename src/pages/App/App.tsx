import React, {useEffect} from 'react';
import './App.scss';
import {createMuiTheme} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import Header from '../../components/Header/Header';
import {Route, Switch} from 'react-router';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {getCats} from '../../store/cats.api.middleware';

interface IProps {
  getData: Function;
}

const App: React.FC<IProps> = ({getData}) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#104DA1'
      }
    },
  });
  
  // get data on app init
  useEffect(() => {
    getData();
  });
  
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <main className="p-3 App-main">
        <Switch>
          <Route path="/profile/:id" component={Profile}/>
          <Route path="/" component={Home}/>
          <Route render={() => 'Page not found'}/>
        </Switch>
      </main>
    </ThemeProvider>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getData: () => dispatch(getCats())
});

export default connect(null, mapDispatchToProps)(App);
