import UserIconDetails from "./user-icon-details";
import ProfileClose from "./close-icon";
import ProfileUserActions from "./actions";
import { useRef } from "react";
import { SwipeableHandlers, useSwipeable } from "react-swipeable";
import { useDispatch } from "react-redux";
import { setShowUserProfile } from "@reducers";

const UserProfile = () => {
  const profileRef = useRef<HTMLDivElement>(null);

  const closeRef = useRef<{ closeTimer?: NodeJS.Timeout }>({});
  const dispatch = useDispatch();

  const handleUserClick = () => {
    clearTimeout(closeRef.current.closeTimer);
    if (profileRef.current) {
      profileRef.current.classList.remove("show-user-profile");
      profileRef.current.classList.add("hide-user-profile");
    }
    closeRef.current.closeTimer = setTimeout(() => {
      dispatch(setShowUserProfile(false));
    }, 500);
  };

  const handlers: SwipeableHandlers = useSwipeable({
    onSwipedLeft: handleUserClick,
    trackMouse: true,
  });

  return (
    <div className="user-profile show-user-profile" ref={profileRef}>
      <div {...handlers} className="swipeable-div">
        <UserIconDetails />
        <ProfileUserActions />
        <ProfileClose closeClick={handleUserClick} />
      </div>
    </div>
  );
};
export default UserProfile;
