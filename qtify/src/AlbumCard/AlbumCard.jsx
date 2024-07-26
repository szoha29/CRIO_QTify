import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip } from '@mui/material';

const AlbumCard = ({ image, title, follows, description }) => {
    return (
        <Card style={{ maxWidth: 345, position: 'relative' }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt="Album cover"
                style={{ objectFit: 'cover' }}
            />
            <CardContent>
                <Chip 
                    label={`${follows} Follows`} 
                    style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        padding: '4px 8px',
                        fontSize: '0.8rem',
                    }}
                />
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default AlbumCard;
