const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const videosData = require("../data/video-details.json");

require("dotenv").config();

router.get("/videos", (req, res) => {
  res.status(200).json(
    videosData.map((video) => {
      return {
        id: video.id,
        title: video.title,
        channel: video.channel,
        image: video.image,
        // image: `http://localhost:${PORT}${video.image}`
      };
    })
  );
});

router.get("/videos/:id", (req, res) => {
  const selectedVideo = videosData.find((video) => video.id === req.params.id);
  res.status(200).json(selectedVideo);
});

router.post("/videos", (req, res) => {
  const { title, description, timestamp } = req.body;

  const newVideo = {
    id: uuidv4(),
    title,
    channel: "My Channel",
    image: "http://localhost:8080/images/Upload-video-preview.jpg",
    description,
    views: 0,
    likes: 0,
    duration: "5:10",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp,
    comments: [],
  };

  videosData.push(newVideo);
  fs.writeFileSync(
    "./data/video-details.json",
    JSON.stringify(videosData, null, 2)
  );
  res.status(201).json(newVideo);
});

module.exports = router;
