// import image from "./124.jpg";
// import profileImage from "./image.jpg";

function UserProfile({ currentUser }) {
  const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="profile-container-top ">
      <div className="cover-picture ">
        <img
          src={
            currentUser.coverPicture ||
            PublicFolder + "PersonNoAvatar/default-cover.png"
          }
          className="h-13 w-full object-cover"
          alt=""
        />
        <div className="profile-picture flex flex-col justify-center items-center gap-5 -mt-11 ">
          <img
            src={
              currentUser.profile ||
              PublicFolder + "PersonNoAvatar/person-4.svg"
            }
            className="h-12 w-12 rounded-full border-4 border-white bg-gray-200 p-2"
            alt=""
          />

          <div className="flex flex-col justify-center items-center gap-3 text-gray-800">
            <h1 className="font-bold text-3xl ">{currentUser.username}</h1>
            <p>{currentUser.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
