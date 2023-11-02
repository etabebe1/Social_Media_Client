function CloseFriends({ user }) {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
// console.log(user)

  return (
    <div>
      <li className="friend flex items-center gap-5">
        <img
          src={PublicFolder + user.profile}
          className="w-8.6 h-8.6 rounded-full"
          alt=""
        />
        <span className="friend_name text-gray-900 flex items-center gap-2">
          <div className="first-name">{user.first_name}</div>
          <div className="last-name">{user.last_name}</div>
        </span>
      </li>
    </div>
  );
}

export default CloseFriends;
