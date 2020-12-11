import React from 'react';

const Navigation = ({ links, social }) => {
  return (
    <nav id="nav-bar">
      <div className="nav-container">
        <p className="title">Coding <span>Addict</span></p>
        <ul className="link-list">
          {links.map(link => <li key={link.id}><a href={link.url}>{link.text}</a></li>)}
        </ul>
        <ul className="social-list">
          {social.map(sns => <li key={sns.id}><a href={sns.url}>{sns.icon}</a></li>)}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation;