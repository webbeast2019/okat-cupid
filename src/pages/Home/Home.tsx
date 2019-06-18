import React from 'react';
import {Grid} from '@material-ui/core';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

const Home: React.FC = () => {
  const catDescription = `
  Hi, I'm cat. Like so many other humans, you might find cats to be mysterious creatures.
  But believe it or not, it’s not that hard to make friends with a feline, if you know what to do.
  `;
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <ProfileCard imgSrc="/img/cat1.jpg" name="Cat 1" description={catDescription} short={true}/>
      </Grid>
      <Grid item xs={6}>
        <ProfileCard imgSrc="/img/cat1.jpg" name="Cat 2" description={catDescription} short={true}/>
      </Grid>
    </Grid>
  )
};

export default Home;