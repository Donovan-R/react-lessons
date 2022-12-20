import React from "react";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  return (
    <aside className="sidebar">
      <div className={`sidebar${isSidebarOpen ? ` show-sidebar` : ""}`}>
        <img
          src="https://cdn.discordapp.com/attachments/1018864381607559188/1053266820670439454/logo.png"
          alt="ForEach academy"
          className="logo"
        />
        <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, icon, text } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
