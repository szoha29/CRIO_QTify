import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Typography, Grid } from '@mui/material';
import AlbumCard from '../AlbumCard/AlbumCard';
import Carousel from '../Carousel/Carousel';

const Section = ({ title, apiEndpoint, showCollapseButton = true, isSongsSection = false }) => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        setAlbums(response.data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, [apiEndpoint]);

  const albumCards = albums.map(album => (
    <AlbumCard
      key={album.id}
      image={album.image}
      title={album.title}
      follows={isSongsSection ? album.likes : album.followCount}
      description={album.description}
      isSongsSection={isSongsSection}
    />
  ));

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h4">{title}</Typography>
        {showCollapseButton && !isSongsSection && (
          <Button variant="contained" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? 'Show All' : 'Collapse'}
          </Button>
        )}
      </div>
      {collapsed ? (
        <Carousel items={albumCards} />
      ) : (
        <Grid container spacing={2}>
          {albumCards}
        </Grid>
      )}
    </div>
  );
};

export default Section;
