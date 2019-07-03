import React from 'react';
import {Grid} from '@material-ui/core';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import {IRootState} from '../../store/configureStore';
import {connect} from 'react-redux';
import {Cat} from '../../models/Cat';

interface IProps {
  cats: Array<Cat>
}

const Home: React.FC<IProps> = ({cats}) => {
  // see: https://facebook.github.io/create-react-app/docs/using-the-public-folder
  return (
    <Grid container spacing={3}>
      {
        cats.map((c: Cat) => (
          <Grid item xs={12} md={6} key={c.id}>
            <ProfileCard imgSrc={`${process.env.PUBLIC_URL}/img/${c.imgFile}`}
                         id={c.id}
                         name={c.name}
                         description={c.description}
                         short={true}/>
          </Grid>
        ))
      }
    </Grid>
  )
};

const mapStateToProps = (state: IRootState) => ({
  cats: state.cats,
});

export default connect(mapStateToProps)(Home);