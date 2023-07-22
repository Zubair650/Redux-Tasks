// import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './PostSlice';

const PostView = () => {
    const { isLoading, posts, error } = useSelector((state) => state.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {posts && posts.map((post) => {
                return <article key={post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </article>
            })}
        </div>
    );
};

export default PostView;