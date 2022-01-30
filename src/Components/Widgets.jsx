import React from 'react';
import './Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

export default function Widgets() {
  return <div className='widgets'>
    <div className="widgets-input">
      <SearchIcon className="widgets-searchicon" />
      <input placeholder='Search Twitter' />
    </div>
    <div className="widgets-container">
      <h2>What's happening</h2>
      <TwitterTweetEmbed tweetId={"1486215086356066306"} />
      <TwitterTimelineEmbed sourceType='profile' screenName='hiteshsukhwani6' options={{ height: 400 }} />
      <TwitterShareButton
        url={"https://twitter.com/HiteshSukhwani6"}
        options={{ text: "Hello World", via: "hiteshsukhwani6" }}
      />
    </div>
  </div>;
}
