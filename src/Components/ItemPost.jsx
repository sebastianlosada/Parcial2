import React from 'react';

const ItemPost = ({post}) => {
    return(
        <div className="post-item">
            <h2>{post.title}</h2>
            <img src={post.url}/>

        </div>
    )
}

export default ItemPost;