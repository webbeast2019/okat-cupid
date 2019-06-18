import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';

interface IProps {
  imgSrc: string;
  name: string;
  description: string;
  short?: boolean
}

const ProfileCard: React.FC<IProps> = ({imgSrc, name, description, short = false}) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={(short) ? 'profile-image-small' : 'profile-image-large'}
          image={imgSrc}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {(short) ? description.substr(0, 60) + '...' : description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {
          short &&
          <RouterLink to="/profile">
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