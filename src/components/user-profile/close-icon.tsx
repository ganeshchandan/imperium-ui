import { Close } from "@assets";
import { setShowUserProfile } from "@reducers";
import { useRef } from "react";
import { useDispatch } from "react-redux";

const ProfileClose = ({
  profileRef,
}: {
  profileRef: React.RefObject<HTMLDivElement>;
}) => {
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

  return (
    <div className="close-icon" onClick={handleUserClick}>
      <img src={Close}></img>
    </div>
  );
};

export default ProfileClose;
