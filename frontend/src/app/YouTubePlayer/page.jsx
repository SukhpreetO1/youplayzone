'use client';
import { Button } from '@/app/routes/route';
import { useEffect, useRef, useState } from 'react';

const YouTubePlayer = ({ videoId }) => {
    const playerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
            console.log('YouTube IFrame API is ready');
            console.log('Video ID:', videoId);
            playerRef.current = new window.YT.Player('youtube-player', {
                height: '360',
                width: '640',
                videoId,
                events: {
                    onStateChange: handleStateChange,
                },
            });
        };
    }, [videoId]);

    const handleStateChange = (event) => {
        if (event.data === window.YT.PlayerState.PLAYING) {
            setIsPlaying(true);
        } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
            setIsPlaying(false);
        }
    };

    const handlePlayClick = () => {
        if (playerRef.current) {
            playerRef.current.playVideo();
        }
    };

    const handlePauseClick = () => {
        if (playerRef.current) {
            playerRef.current.pauseVideo();
        }
    };

    return (
        <div>
            <div id="youtube-player" className="mt-4"></div>
            <div>
                {isPlaying ? (
                    <Button onClick={handlePauseClick} variant="secondary" size="lg" className="mt-4 w-32">Pause</Button>
                ) : (
                    <Button onClick={handlePlayClick} variant="secondary" size="lg" className="mt-4 w-32">Play</Button>
                )}
            </div>
        </div>
    );
};

export default YouTubePlayer;