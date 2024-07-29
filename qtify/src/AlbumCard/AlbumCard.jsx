import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip } from '@mui/material';

const AlbumCard = ({ image, title, follows, description, isSongsSection }) => {
  return (
    <Card>
      <CardMedia component="img" image={image} alt={title} />
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="textSecondary">{description}</Typography>
        <Chip label={`${follows} ${isSongsSection ? 'Likes' : 'Follows'}`} />
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
