import DisaplyGrid from "../assets/display-grid.svg";

const AppHeader = () => {
  return (
    <div className="app-header">
      <div className="category-name-image">
        <label className="category-name">Cyber Security</label>
        <img src={DisaplyGrid} alt="dispaly-type" />
      </div>
    </div>
  );
};

export default AppHeader;
