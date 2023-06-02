const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
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


router.post("/videos", (req, res) => {
    const { title, channel, image, description, video, timestamp } = req.body;

    const newVideo = {
        id: uuidv4(),
        title,
        channel,
        image,
        description,
        views: 0, 
        likes: 0,
        duration: "5:10",
        video,
        timestamp,
        comments: [],
    }
    // const newVideoString = JSON.stringify(newVideo);

    videosData.push(newVideo);
    res.json(newVideo);
})


module.exports = router;