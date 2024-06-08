import AppLogo from "../../assets/app_logo.gif";

const AppLoader = () => {
  return (
    <div className="app-loading">
      <img className="app-image" src={AppLogo} alt="Imperium" />
      <label className="app-name">IMPERIUM</label>
      <label className="app-tag">CYBER SECURITY</label>
    </div>
  );
};

export default AppLoader;
