import React from 'react';
import { isEmpty } from 'lodash'

import config from '../../config'
import useFetchData from '../../hooks/useFetchData'
import MainPage from './MainPage.component'

const MainPageContainer = () => {
    const { baseUrl, pagesIds } = config;
    const [ data ]  = useFetchData(`${baseUrl}${pagesIds.mainPage}`);

    return (
        !isEmpty(data) && <MainPage data={data} />
    );
}

export default MainPageContainer;
