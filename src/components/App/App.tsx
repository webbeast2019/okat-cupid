import React from 'react';
import logo from '../../assets/okat_logo.jpg';
import cat1 from '../../assets/cat1.jpg';
import './App.scss';
import {
  AppBar, Button,
  Card,
  CardActionArea, CardActions,
  CardContent,
  CardMedia,
  createMuiTheme,
  Grid,
  Toolbar,
  Typography
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const App: React.FC = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#104DA1'
      },
      // secondary: '#104DA1',
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
        <header>
          <AppBar position="static">
            <Toolbar>
              <img src={logo} className="App-logo" alt="logo"/>
              <Typography variant="h6" className="mx-3 cursor-pointer">
                Home
              </Typography>
            </Toolbar>
          </AppBar>
        </header>
      <main className="p-3 App-main">
        <Grid container spacing={3}>
          {/*item 1*/}
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className="profile-image-small"
                  image={cat1}
                  title="Cat 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Cat 1
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Hi, I'm cat. Like so many other humans, you might find cats to be mysterious creatures.
                    But believe it or not, it’s not that hard to make friends with a feline, if you know what to do.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  See full profile
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/*item 2*/}
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  className="profile-image-small"
                  image={cat1}
                  title="Cat 2"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Cat 2
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Hi, I'm cat. Like so many other humans, you might find cats to be mysterious creatures.
                    But believe it or not, it’s not that hard to make friends with a feline, if you know what to do.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  See full profile
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

      </main>
    </ThemeProvider>
  );
};

export default App;
