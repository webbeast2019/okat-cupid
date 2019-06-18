import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, Typography} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';

interface IProps {
  imgSrc: string;
  name: string;
  description: string;
  age?: number
  short?: boolean
  id?: string;
}

const ProfileCard: React.FC<IProps> = ({imgSrc, id, name, age, description, short = false}) => {
  return (
    <Card>
      <CardActionArea>
        <img
          className={(short) ? 'profile-image-small' : 'profile-image-large'}
          src={imgSrc}
          title={name}
          alt="Profile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            {(short) ? description.substr(0, 60) + '...' : description}
          </Typography>
          {!short && age &&
          <Typography variant="body1" color="textSecondary" component="p">
            Age: {age}
          </Typography>
          }
        </CardContent>
      </CardActionArea>
      <CardActions>
        {
          short && id &&
          <RouterLink to={`/profile/${id}`}>
            <Button size="small" color="primary">
              See full profile
            </Button>
          </RouterLink>
        }
      </CardActions>
    </Card>
  )
};

export default ProfileCard;