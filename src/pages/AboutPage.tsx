import React from 'react';
import {useHistory} from "react-router-dom";

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Page of Information</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur excepturi illo laborum mollitia perspiciatis
                reiciendis veritatis voluptatum. Cumque, omnis, ullam.
            </p>
            <button className={'btn'} onClick={() => history.push('/')}>back to TodoList</button>
        </>
    )
};
