import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Typography, Grid } from '@mui/material';
import AlbumCard from '../AlbumCard/AlbumCard';
import Carousel from '../Carousel/Carousel';

const Section = ({ title, apiEndpoint, showCollapseButton = true, isSongsSection = false }) => {
    const [items, setItems] = useState([]);
    const [collapsed, setCollapsed] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(apiEndpoint);
                setItems(response.data);
            } catch (error) {
                console.error(`Error fetching ${isSongsSection ? 'songs' : 'albums'}:`, error);
            }
        };

        fetchItems();
    }, [apiEndpoint, isSongsSection]);

    const itemCards = items.map(item => (
        <AlbumCard
            key={item.id}
            image={item.image}
            title={item.title}
            follows={isSongsSection ? item.likes : item.followCount}
            description={item.description}
            isSongsSection={isSongsSection}
        />
    ));

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <Typography variant="h4">{title}</Typography>
                {showCollapseButton && (
                    <Button variant="contained" onClick={() => setCollapsed(!collapsed)}>
                        {collapsed ? 'Show All' : 'Collapse'}
                    </Button>
                )}
            </div>
            {collapsed ? (
                <Carousel items={itemCards} />
            ) : (
                <Grid container spacing={2}>
                    {itemCards}
                </Grid>
            )}
        </div>
    );
};

export default Section;
