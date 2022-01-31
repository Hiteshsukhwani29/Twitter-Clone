import React from 'react';
import { useState } from 'react';
import './TweetBox.css'
import {Avatar, Button} from '@material-ui/core';
import db from '../Firebase';

export default function TweetBox() {

    const [ message, setmessage ] = useState("");
    const [ imgurl, setimgurl ] = useState("");

    const tweet = (e) => {
        e.preventDefault();
        db.collection("Posts").add({
            name: "Hitesh Sukhwani",
            avatar: "https://avatars.githubusercontent.com/u/55627571?v=4",
            verified: true,
            username: "hiteshsukhwani6",
            desc: message,
            image: imgurl
        });
    };

  return <div className='tweetbox'>
      <form>
          <div className='tweetbox-input'>
              <Avatar src="https://avatars.githubusercontent.com/u/55627571?v=4" />
              <input value={message} placeholder="What's happening?" onChange={(e) => setmessage(e.target.value)} />
          </div>
          <div className='tweetboximgurl-input'>
              <input value={imgurl} placeholder="Image Url (optional)" onChange={(e) => setimgurl(e.target.value)} />
          </div>
          <Button className='tweetboxbtn-tweet' type="submit" onClick={tweet}>Tweet</Button>
      </form>
  </div>;
}
