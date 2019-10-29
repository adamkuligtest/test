import React, { useEffect, useState, useCallback, useRef } from 'react';
import { isNil } from 'lodash';

import './VideoPopup.scss';

let showVideoPopup;

const VideoPopup = function() {
    const videoRef = useRef(null);

    const [isVisible, setVisible] = useState(false);
    const [videoUrl, setVideoUrl] = useState(null);

    useEffect(() => {
        showVideoPopup = function(videoUrl) {
            setVideoUrl(videoUrl);
            setVisible(true);
        };
    }, []);

    const handleOutsideClick = useCallback(() => {
        setVisible(false);
        setVideoUrl(null);
    }, [setVisible]);

    const handleOnClickVideo = useCallback(
        e => {
            e.stopPropagation();
            if (!isNil(videoRef.current)) {
                if (videoRef.current.paused) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            }
        },
        [videoRef]
    );

    return isVisible && !isNil(videoUrl) ? (
        <>
            <div
                className="video-popup__background"
                onClick={handleOutsideClick}
            >
                <video
                    ref={videoRef}
                    className="video-popup__video"
                    src={videoUrl}
                    autoPlay
                    onClick={handleOnClickVideo}
                ></video>
            </div>
        </>
    ) : null;
};

export { showVideoPopup };

export default VideoPopup;
