import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core';

interface IProps {
  imgSrc: string;
  name: string;
  description: string;
}

const ProfileCard: React.FC<IProps> = ({imgSrc, name, description}) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className="profile-image-small"
          image={imgSrc}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          See full profile
        </Button>
      </CardActions>
    </Card>
  )
};

export default ProfileCard;