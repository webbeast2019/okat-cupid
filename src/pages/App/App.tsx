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
import {catsDataSet} from '../../store/cats.data.reducer';
import {Cat} from '../../models/Cat';

interface IProps {
  saveToStore: Function;
}

const App: React.FC<IProps> = ({saveToStore}) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#104DA1'
      }
    },
  });
  
  useEffect(() => {
    fetch('/data/cats.json')
      .then(res => res.json())
      .then((data: Array<any>) => {
        const cats = data.map(c => new Cat(c));
        saveToStore(cats);
      });
  }, [saveToStore]);
  
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
  saveToStore: (data: Array<Cat>) => dispatch(catsDataSet(data))
});

export default connect(null, mapDispatchToProps)(App);
