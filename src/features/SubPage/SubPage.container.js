import React from 'react';
import { isEmpty } from 'lodash';
import { object } from 'prop-types';

import config from '../../config'
import useFetchData from '../../hooks/useFetchData'
import SubPage from './SubPage.component'

const SubPageContainer = (props) => {
    const { baseUrl } = config;
    const [ data ] = useFetchData(`${baseUrl}${props.match.params.id}`);

    return (
        !isEmpty(data) && 
            <SubPage 
                data={data} 
                history={props.history}
            />
    );
}

SubPage.propTypes = {
    history: object
}

export default SubPageContainer;
