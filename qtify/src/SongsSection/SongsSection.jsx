import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import Section from "../Section/Section";

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all");

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get("https://qtify-backend-labs.crio.do/songs");
        setSongs(response.data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    const fetchGenres = async () => {
      try {
        const response = await axios.get("https://qtify-backend-labs.crio.do/genres");
        setGenres([{ name: "All", id: "all" }, ...response.data]);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchSongs();
    fetchGenres();
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs = selectedGenre === "all" ? songs : songs.filter(song => song.genre === selectedGenre);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4">Songs</Typography>
      <Tabs value={selectedGenre} onChange={handleTabChange}>
        {genres.map(genre => (
          <Tab key={genre.id} label={genre.name} value={genre.id} />
        ))}
      </Tabs>
      <Section
        title="Songs"
        apiEndpoint=""
        showCollapseButton={false}
        isSongsSection={true}
        items={filteredSongs}
      />
    </div>
  );
};

export default SongsSection;
