"use client";
import { useState } from "react";
import YouTubePlayer from "@/app/YouTubePlayer/page";
import { Input, Button } from "@/app/routes/route";

export default function VideoPlayer() {
    const [videoId, setVideoId] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = event.target.elements.videoUrl.value;
        const videoId = getYouTubeVideoId(url);
        setVideoId(videoId);
    };

    const getYouTubeVideoId = (url) => {
        let videoId = "";
        const urlObj = new URL(url);

        if (urlObj.hostname.includes("youtu.be")) {
            videoId = urlObj.pathname.slice(1);
        } else if (urlObj.hostname.includes("youtube.com")) {
            videoId = urlObj.searchParams.get("v");
        }

        return videoId;
    };

    return (
        <div className="flex flex-col justify-center items-center text-center">
            <form onSubmit={handleSubmit} className="w-3/6 lg:w-2/6 gap-3 md:flex">
                <Input type="text" name="videoUrl" placeholder="Enter YouTube URL" className="my-4 mb-2 md:mb-4"></Input>
                <Button variant="outline" type="submit" className="my-4 mt-2 md:mt-4"> Load Video </Button>
            </form>
            {videoId && <YouTubePlayer videoId={videoId} />}
        </div>
    );
}
