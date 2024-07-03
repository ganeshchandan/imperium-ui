import UserIconDetails from "./user-icon-details";
import ProfileClose from "./close-icon";
import ProfileUserActions from "./actions";
import { useRef } from "react";

const UserProfile = () => {
  const profileRef = useRef<HTMLDivElement>(null);

  return (
    <div className="user-profile show-user-profile" ref={profileRef}>
      <UserIconDetails />
      <ProfileUserActions />
      <ProfileClose profileRef={profileRef} />
    </div>
  );
};
export default UserProfile;
