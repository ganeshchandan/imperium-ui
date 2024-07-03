import { UserIcon } from "@assets";

const UserIconDetails = () => {
  return (
    <div className="user-icon-details">
      <img src={UserIcon} alt="userIcon" />
      <div className="user-details">
        <span className="user-name">My Profile</span>
        <span className="app-version">Ver. 12.1</span>
      </div>
    </div>
  );
};

export default UserIconDetails;
