import { Close } from "@assets";

const ProfileClose = ({ closeClick }: { closeClick: () => void }) => {
  return (
    <div className="close-icon" onClick={closeClick}>
      <img src={Close}></img>
    </div>
  );
};

export default ProfileClose;
