import React from 'react'
import { useLocation } from 'react-router-dom';

import NotFoundComp from '../../components/NotFoundComp/NotFoundComp';

import NotFound from '../../assets/not-found.png'


const NotFoundPage = () => {
    const location = useLocation();
    return (
        <div>
            <NotFoundComp
                text='No match for '
                img={NotFound}
                brText={location.pathname}
            />
        </div>
    )
}

export default NotFoundPage