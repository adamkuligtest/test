import React from 'react';
import { isNil } from 'lodash';
import { array, func, object } from 'prop-types';

import ImageRedirectToVideo from '../../components/ImageRedirectToVideo'
import ImageNestedSubPage from '../../components/ImageNestedSubPage';

const SubPage = ({ data, goToSubPage, history }) => {
    const getDesiredImage = data => 
        isNil(data.video) && !isNil(data.navigateSubpageId) 
        ? <ImageNestedSubPage key={data.id} data={data} goToSubPage={goToSubPage} />
        : <ImageRedirectToVideo key={data.id} data={data} /> 
    
    const title = data[0].subpage.title
    return (
        <div className='custom-container'>
            <div className='row header'>
                <div 
                    className="col-3 rossmann-bg-secondary center"
                    onClick={history.goBack}
                >
                    ←&nbsp;&nbsp;wstecz
                </div>
                <div className="offset-1 col-8 rossmann-bg-primary center">
                    {title}
                </div>
            </div>
            <div className='row'>
                {data.map(item => getDesiredImage(item))}
             </div>
        </div>
    );
}

SubPage.propTypes = {
    data: array,
    goToSubPage: func,
    goBack: func,
    history: object
}

export default SubPage;
