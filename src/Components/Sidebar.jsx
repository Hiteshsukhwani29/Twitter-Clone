import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MessagesIcon from '@material-ui/icons/Message';
import BookmarksIcon from '@material-ui/icons/Bookmark';
import ListsIcon from '@material-ui/icons/List';
import ProfileIcon from '@material-ui/icons/Person';
import MoreIcon from '@material-ui/icons/More';
import SidebarOption from './SidebarOption';

export default function Sidebar() {
  return <div>
      <TwitterIcon/>
      <SidebarOption text="Explore" Icon={ExploreIcon}/>
      <SidebarOption text="Notifications" Icon={NotificationsIcon}/>
      <SidebarOption text="Messages" Icon={MessagesIcon}/>
      <SidebarOption text="Bookmarks" Icon={BookmarksIcon}/>
      <SidebarOption text="Lists" Icon={ListsIcon}/>
      <SidebarOption text="Profile" Icon={ProfileIcon}/>
      <SidebarOption text="More" Icon={MoreIcon}/>

  </div>;
}
