import React from 'react';
import './App.scss';
import {createMuiTheme, Grid} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import Header from '../Header/Header';
import ProfileCard from '../ProfileCard/ProfileCard';

const App: React.FC = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#104DA1'
      }
    },
  });
  const catDescription = `
  Hi, I'm cat. Like so many other humans, you might find cats to be mysterious creatures.
  But believe it or not, it’s not that hard to make friends with a feline, if you know what to do.
  `;
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <main className="p-3 App-main">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <ProfileCard imgSrc="/img/cat1.jpg" name="Cat 1" description={catDescription}/>
          </Grid>
          <Grid item xs={6}>
            <ProfileCard imgSrc="/img/cat1.jpg" name="Cat 2" description={catDescription}/>
          </Grid>
        </Grid>
      
      </main>
    </ThemeProvider>
  );
};

export default App;
