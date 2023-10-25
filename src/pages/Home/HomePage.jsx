import NavBar from "../../components/NavForApp/Navbar";
import SideBar from "../../components/sideBar/SideBar";
import Feeds from "../../components/feed/Feed";
import Right from "../../components/rightBar/RightSide";

import "./Home.css";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex gap-1">
        <SideBar />
        <div className="feed-right-container flex">
          <Feeds />
          <Right />
        </div>
      </div>
    </div>
  );
}

export default Home;
