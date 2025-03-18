// src/components/Header.tsx
import { FaLanguage } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Logo } from "../../assets/logo";
import {
  closeDropdown,
  openDropdown,
} from "../../features/dropdown/dropdownSlice";
import { ILink } from "../../Utils/Interface";
import "./Header.scss";
import { RootState } from "../../store/store";
import { useState } from "react";

export const Header = () => {
  const languages = ["English", "Português - BR"];
  const [websiteLang, setWebsiteLang] = useState(languages[0]);
  const isOpen = useSelector((state: RootState) => state.dropdown.isOpen);
  const dispatch = useDispatch();

  const links: ILink[] = [
    { label: "About", link: "#about" },
    { label: "Skills", link: "#skills" },
    { label: "Contact", link: "#contact" },
    { label: "Hobbies", link: "#hobbies" },
  ];

  const toggleDropdown = () => {
    if (isOpen) {
      dispatch(closeDropdown());
    } else {
      dispatch(openDropdown());
    }
  };

  const handleLanguageChange = (lang: string) => {
    setWebsiteLang(lang);
    dispatch(closeDropdown());
  };

  return (
    <div className="header-container">
      <Logo />
      {links.map((item) => (
        <a key={item.label} href={item.link} className="header-link">
          {item.label}
        </a>
      ))}
      <div className="header-language">
        <div className="header-language__link" onClick={toggleDropdown}>
          <FaLanguage size={40} />
        </div>
        <div className={`header-language__options ${isOpen ? "open" : ""}`}>
          {languages.map((lang) => (
            <div
              key={lang}
              className={`dropdown-language-option ${
                lang === websiteLang ? "selected" : ""
              }`}
              onClick={() => handleLanguageChange(lang)}
            >
              {lang}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
