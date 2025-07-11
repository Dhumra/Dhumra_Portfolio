// src/components/SideBar.jsx
import React from "react";
import Leetcode from "../assets/leetcode.svg";


export const SideBar = () => {
  const navLinks = [
    { id: "home", icon: "fas fa-home", label: "Home" },
    { id: "about", icon: "fas fa-user", label: "About Me" },
    { id: "projects", icon: "fas fa-briefcase", label: "Projects" },
    { id: "publications", icon: "fas fa-file-alt", label: "Publications" },
    { id: "research", icon: "fas fa-flask", label: "Research & Tools" },
    { id: "education", icon: "fas fa-graduation-cap", label: "Education" },
    { id: "connect", icon: "fas fa-handshake", label: "Let's Connect" },
  ];

  const socials = [
    { href: "https://github.com/Dhumra", icon: "fab fa-github", label: "GitHub" },
    { href: "https://www.linkedin.com/in/dambre/", icon: "fab fa-linkedin", label: "LinkedIn" },
    { href: "https://leetcode.com/dhumravarnaambre36/", icon: "fas fa-code", label: "LeetCode" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-group">
        {navLinks.map((link, i) => (
          <a key={i} href={`#${link.id}`} className="sidebar-icon" title={link.label}>
            <i className={link.icon}></i>
          </a>
        ))}
      </div>
      <div className="sidebar-divider"></div>
      <div className="sidebar-group">
        {socials.map((social, i) => (
          <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="sidebar-icon" title={social.label}>
            <i className={social.icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
};