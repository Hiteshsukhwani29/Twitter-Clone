import React from 'react';
import { useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from '../Firebase';
import FlipMove from 'react-flip-move';

export default function Feed() {

    const [post, setpost] = useState([]);
    
    useEffect(() => {
        db.collection("Posts").onSnapshot(snapshot=>(
            setpost(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);
    

    return <div className='feed'>
        <div className='feed-header'>
            <h2>Home</h2>
        </div>

        <TweetBox/>

        <FlipMove>
        {
            post.map(post => (
                <Post key={post.text} avatar={post.avatar} name="Hitesh Sukhwani" verified={post.verified} username={post.username} text={post.desc} image={post.image} />
            ))
        }
        </FlipMove>

    </div>;
}
