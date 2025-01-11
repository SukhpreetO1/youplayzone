"use client";
import { useState } from "react";
import YouTubePlayer from "@/components/YouTubePlayer";
import { Input, Button } from "@/routes/page";

export default function HomePage() {
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
            <form onSubmit={handleSubmit} className="w-2/6 flex gap-3">
                <Input type="text" name="videoUrl" placeholder="Enter YouTube URL" required ></Input>
                <Button variant="outline" type="submit"> Load Video </Button>
            </form>
            {videoId && <YouTubePlayer videoId={videoId} />}
        </div>
    );
}
