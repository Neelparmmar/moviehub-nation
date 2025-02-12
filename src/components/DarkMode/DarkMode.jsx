import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";
import "./darkmode.css";
const DarkMode = () => {
  const setdarkTheame = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setlightTheame = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setdarkTheame();
      localStorage.setItem("selectedTheme", "dark");
    } else {
      setlightTheame();
      localStorage.setItem("selectedTheme", "light");
    }
  };
  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme == "light") {
    setlightTheame();
  } else {
    setdarkTheame();
  }
  return (
    <div className="darkmode">
      <input
        className="dark-mode-input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme !== "light"}
      />
      <label className="darkmode-label" htmlFor="darkmode-toggle">
        <img src={sunIcon} alt="Sun Icon" className="sunicon" />
        <img src={moonIcon} alt="Moon Icon" className="moonicon" />
      </label>
    </div>
  );
};

export default DarkMode;
