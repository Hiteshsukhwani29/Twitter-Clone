import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';

export default function Feed() {
    return <div className='feed'>
        <div className='feed-header'>
            <h2>Home</h2>
        </div>

        <TweetBox/>

        <Post text="Wanted to reveal something from a long time. The year of 2021 was one of craziest years and it brought some good news too. I received my dream intership from Mitacs and now i am excited to share that i have also received an internship offer from Microsoft for '22" username="@hiteshsukhwani6"/>
        <Post text="Wanted to reveal something from a long time. The year of 2021 was one of craziest years and it brought some good news too. I received my dream intership from Mitacs and now i am excited to share that i have also received an internship offer from Microsoft for '22" username="@hiteshsukhwani6"/>
        <Post text="Wanted to reveal something from a long time. The year of 2021 was one of craziest years and it brought some good news too. I received my dream intership from Mitacs and now i am excited to share that i have also received an internship offer from Microsoft for '22" username="@hiteshsukhwani6"/>
        <Post text="Wanted to reveal something from a long time. The year of 2021 was one of craziest years and it brought some good news too. I received my dream intership from Mitacs and now i am excited to share that i have also received an internship offer from Microsoft for '22" username="@hiteshsukhwani6"/>
        
    </div>;
}
