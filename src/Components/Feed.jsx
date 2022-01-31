import React from 'react';
import { useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from '../Firebase';

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

        {
            post.map(post => (
                <Post avatar={post.avatar} name="Hitesh Sukhwani" verified={post.verified} username={post.username} text={post.desc} image={post.image} />
            ))
        }

        
        <Post text="" username="hiteshsukhwani6"/>
        <Post text="Wanted to reveal something from a long time. The year of 2021 was one of craziest years and it brought some good news too. I received my dream intership from Mitacs and now i am excited to share that i have also received an internship offer from Microsoft for '22" username="hiteshsukhwani6"/>
        <Post text="Wanted to reveal something from a long time. The year of 2021 was one of craziest years and it brought some good news too. I received my dream intership from Mitacs and now i am excited to share that i have also received an internship offer from Microsoft for '22" username="hiteshsukhwani6"/>
        
    </div>;
}
