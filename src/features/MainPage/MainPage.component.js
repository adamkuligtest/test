import React from 'react';
import { isNil } from 'lodash';
import { array } from 'prop-types';

import ImageRedirectToVideo from '../../components/ImageRedirectToVideo'
import ImageNestedSubPage from '../../components/ImageNestedSubPage';

const MainPage = ({ data }) => {
    const getDesiredImage = data => 
        isNil(data.video) && !isNil(data.navigateSubpageId) 
        ? <ImageNestedSubPage key={data.id} data={data} />
        : <ImageRedirectToVideo key={data.id} data={data} /> 
    
    return (
        <div className='custom-container'>
            <div className='row header'>
                <div className='col rossmann-bg-primary center'>
                    rossmann
                </div>
            </div>
            <div className='row'>
                {data.map(item => getDesiredImage(item))}
             </div>
        </div>
    );
}

MainPage.propTypes = {
    data: array
}

export default MainPage;
