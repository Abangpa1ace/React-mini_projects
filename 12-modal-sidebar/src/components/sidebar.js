import React from 'react';
import { links, social } from './data';

const Side = ({ showSide, closeSide }) => {
  return (
    <div id="sidebar-container" className={showSide && 'show'}>
      <button className="close-sidebar-btn" onClick={closeSide}>X</button>
      <p className="title">Coding <span>Addict</span></p>
      <ul className="link-list">
        {links.map(link => <li key={link.id}>{link.icon}<a href={link.url}>{link.text}</a></li>)}
      </ul>
      <ul className="social-list">
        {social.map(sns => <li key={sns.id}><a href={sns.url}>{sns.icon}</a></li>)}
      </ul>
    </div>
  )
}

export default Side;