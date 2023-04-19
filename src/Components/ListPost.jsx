import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import postActions from '../Actions/postActions';
import ItemPost from './ItemPost';

const ListPost = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.post);

    useEffect(() => {
        dispatch(postActions);
    }, [dispatch])

    return(
        <div>
            {posts.map(post => (<ItemPost key={post.id} post={post}/>))}
        </div>
    )
}

export default ListPost;