import React from 'react';
import { object } from 'prop-types';
import { Link } from 'react-router-dom';

const ImageNestedSubPage = ({ data: { navigateSubpageId, imageAlt, image } }) => (
    <div className='col-12 col-xl-6 block'>
        <Link to={`/${navigateSubpageId.id}`}>
            <img
                src={image.url}
                alt={imageAlt}
            />
        </Link>
    </div>
);

ImageNestedSubPage.propTypes = {
    data: object
}

export default ImageNestedSubPage;
