import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Typography, Grid, Collapse } from '@mui/material';
import AlbumCard from '../AlbumCard/AlbumCard';

const Section = ({ title, apiEndpoint }) => {
    const [albums, setAlbums] = useState([]);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await axios.get(apiEndpoint);
                setAlbums(response.data); // Adjust based on the actual structure of the response
            } catch (error) {
                console.error('Error fetching albums:', error);
            }
        };

        fetchAlbums();
    }, [apiEndpoint]);

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <Typography variant="h4">{title}</Typography>
                <Button variant="contained" onClick={() => setCollapsed(!collapsed)}>
                    {collapsed ? 'Expand' : 'Collapse'}
                </Button>
            </div>
            <Collapse in={!collapsed}>
                <Grid container spacing={2}>
                    {albums.map(album => (
                        <Grid item xs={12} sm={6} md={4} key={album.id}>
                            <AlbumCard 
                                image={album.image} 
                                title={album.title} 
                                follows={album.followCount} 
                                description={album.description}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Collapse>
        </div>
    );
};

export default Section;
