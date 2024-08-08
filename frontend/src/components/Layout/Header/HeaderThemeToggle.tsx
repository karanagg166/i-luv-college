import { useEffect, useState } from "react";
import { themeIcon } from "@/constants/icons";

const themes = [
  "light-theme",
  "dark-theme",
  "cyberpunk",
  "garden",
  "cupcake",
  "synthwave",
];

interface HeaderThemeToggleProps {
  onThemeChange: (theme: string) => void;
}

const HeaderThemeToggle: React.FC<HeaderThemeToggleProps> = ({
  onThemeChange,
}) => {
  const [selectedTheme, setSelectedTheme] = useState<string>(
    localStorage.getItem("selectedTheme") || themes[0]
  );

  useEffect(() => {
    localStorage.setItem("selectedTheme", selectedTheme);
    onThemeChange(selectedTheme);
  }, [selectedTheme, onThemeChange]);

  const handleThemeChange = (theme: string) => {
    setSelectedTheme(theme);
  };

  return (
    <div className="dropdown  dropdown-end">
      <button
        tabIndex={0}
        className="btn m-1 btn-ghost   mq450:m-0  "
        aria-label="Theme Selector"
      >
        <img
          src={themeIcon}
          alt="Theme Icon"
          className={`w-5   ${
            selectedTheme === "dark-theme" || selectedTheme === "synthwave"
              ? "invert"
              : ""
          }`}
        />
      </button>
      <ul
        tabIndex={0}
        className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border-base-300 border-2"
      >
        {themes.map((theme) => (
          <li key={theme}>
            <a href="#" onClick={() => handleThemeChange(theme)}>
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderThemeToggle;
