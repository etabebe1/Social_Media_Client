// import image from "./4.jpg";

function OnlineUser({ user }) {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div>
      <li className="individual_user flex gap-4 items-center my-5">
        <div className="user-status">
          <div className="status w-3.8 h-3.8 bg-green-600 rounded-full absolute translate-x-7 border-white border-2"></div>

          <img
            src={PublicFolder + user.ProfilePicture}
            className="rounded-full object-cover w-8.6 h-8.6"
            alt=""
          />
        </div>
        <span className="">{user.username}</span>
      </li>
    </div>
  );
}

export default OnlineUser;
