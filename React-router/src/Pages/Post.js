import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Post = () => {
    const { id } = useParams();
    const query = new URLSearchParams(useLocation().search);


    return (
        <>
            <h5>ID is = {id}</h5>
            <h2>{query.get('first')}</h2>
            <h2>{query.get('last')}</h2>
        </>
    )
}

export default Post
