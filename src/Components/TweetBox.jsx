import React from 'react';
import './TweetBox.css'
import {Avatar, Button} from '@material-ui/core';

export default function TweetBox() {
  return <div className='tweetbox'>
      <form>
          <div className='tweetbox-input'>
              <Avatar src="https://avatars.githubusercontent.com/u/55627571?v=4" />
              <input placeholder="What's happening?" />
          </div>
          <div className='tweetboximgurl-input'>
              <input placeholder="Image Url (optional)" />
          </div>
          <Button className='tweetboxbtn-tweet'>Tweet</Button>
      </form>
  </div>;
}
