import React from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import {IRootState} from '../../store/configureStore';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import {Cat} from '../../models/Cat';

interface IProps {
  getCat: Function
}
const Profile: React.FC<IProps & RouteComponentProps> = ({match,getCat}) => {
  const id = (match.params as {id: string}).id;
  const cat:Cat = getCat(id);
  
  // see: https://facebook.github.io/create-react-app/docs/using-the-public-folder
  return (!cat) ? null :(
    <ProfileCard imgSrc={`${process.env.PUBLIC_URL}/img/${cat.imgFile}`}
                 age={cat.age}
                 name={cat.name}
                 description={cat.description}/>
  )
};

const mapStateToProps = (state: IRootState) => ({
  getCat: (id:string) => state.cats.find(c => c.id === id),
});

export default connect(mapStateToProps)(Profile);
