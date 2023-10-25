// importing important icons form material-icon
import RssFeedIcon from "@mui/icons-material/RssFeed";
import MessageIcon from "@mui/icons-material/Message";
import GroupsIcon from "@mui/icons-material/Groups";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";

// importing styling sheet
import "./SideBar.css";

// close friends component
import CloseFriends from "../CloseFriends/CloseFriends";

// importing user from MOCK_DATA_FRIEND to render in friend list
import { FRIEND_LIST } from "../../MOCK_DATA_FRIEND";

function SideBar() {
  return (
    <div className="leftBar px-6">
      <div className="leftBarWrapper">
        <ul className="leftBarList">
          <li className="leftBarListItem flex items-center">
            <RssFeedIcon className="my-3 mr-4 text-gray-900"></RssFeedIcon>
            <span className="text-gray-900">Feed</span>
          </li>
          <li className="leftBarListItem flex items-center">
            <MessageIcon className="my-3 mr-4 text-gray-900"></MessageIcon>
            <span className="text-gray-900">Message</span>
          </li>
          <li className="leftBarListItem flex items-center">
            <PlayCircleIcon className="my-3 mr-4 text-gray-900"></PlayCircleIcon>
            <span className="text-gray-900">Videos</span>
          </li>
          <li className="leftBarListItem flex items-center">
            <GroupsIcon className="my-3 mr-4 text-gray-900"></GroupsIcon>
            <span className="text-gray-900">Groups</span>
          </li>
          <li className="leftBarListItem flex items-center">
            <BookmarkIcon className="my-3 mr-4 text-gray-900"></BookmarkIcon>
            <span className="text-gray-900">Bookmarks</span>
          </li>
          <li className="leftBarListItem flex items-center">
            <HelpOutlineIcon className="my-3 mr-4 text-gray-900"></HelpOutlineIcon>
            <span className="text-gray-900">Questions</span>
          </li>
          <li className="leftBarListItem flex items-center">
            <WorkOutlineIcon className="my-3 mr-4 text-gray-900"></WorkOutlineIcon>
            <span className="text-gray-900">Jobs</span>
          </li>
          <li className="leftBarListItem flex items-center">
            <EventIcon className="my-3 mr-4 text-gray-900"></EventIcon>
            <span className="text-gray-900">Events</span>
          </li>
          <li className="leftBarListItem flex items-center">
            <SchoolIcon className="my-3 mr-4 text-gray-900"></SchoolIcon>
            <span className="text-gray-900">Courses</span>
          </li>
        </ul>

        <button className="w-12 h-8.6 bg-gray-200 rounded-md text-gray-900 hover:bg-gray-300 transition-all duration-300">
          Show More
        </button>

        <hr className="my-6" />

        {/* friend list here */}
        <ul className="friendList flex flex-col gap-3">
          {FRIEND_LIST.map((friend) => {
            return <CloseFriends key={friend.id} user={friend}></CloseFriends>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
