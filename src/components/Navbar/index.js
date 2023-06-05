import React, { useState } from "react";
import "./index.scss";
import { Sidebar } from "./sidebar";

export const menu = [
  { id: 0, title: "Home", section: "home" },
  { id: 1, title: "About Me", section: "about" },
  { id: 2, title: "Skills", section: "skills" },
  { id: 3, title: "My Journey", section: "journey" },
  { id: 4, title: "Contact Me", section: "contact" },
];
export default function Navbar(props) {
  return (
    <>
      <Sidebar />
      <div className="navbar-container">
        <nav className="navbar">
          <ul>
            {menu?.map((item) => {
              return (
                <li key={item.id}>
                  <a href={`#${item.section}`}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
