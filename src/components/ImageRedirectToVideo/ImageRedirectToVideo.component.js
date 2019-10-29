import React from 'react';
import { array, object, oneOfType } from 'prop-types';

import { showVideoPopup } from '../VideoPopup';

const ImageRedirectToVideo = ({ data: { imageAlt, image, video }}) => (
    <div className='col-12 col-xl-6 block'>
        <img
            src={image.url}
            alt={imageAlt}
            onClick={() => showVideoPopup(video.url)}
        />
    </div>
);

ImageRedirectToVideo.propTypes = {
    data: oneOfType([array, object])
}

export default ImageRedirectToVideo;
