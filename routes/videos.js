const express = require('express');
const router = express.Router();
const fs = require("fs");
const videosData = require('../data/video-details.json');

// console.log(videosData);

router.get("/videos", (req, res) => {
    res.status(200).json(videosData.map((video) => {
        return {
            id: video.id,
            title: video.title,
            channel: video.channel,
            image: video.image
        }
    }));
})

router.get("/videos/:id", (req, res) => {
    const selectedVideo = videosData.find((video) => video.id === req.params.id);
    res.status(200).json(selectedVideo);
})

module.exports = router;