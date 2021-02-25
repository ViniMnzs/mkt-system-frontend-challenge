import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { MdNotifications } from 'react-icons/md';
import './styles.css';

export default function Menu() {
  return (
    <div id="header">
      <div id="container-head">
        <div className="row">
          <button className="selected-button-navigator" type="button" onClick={() => alert('HOME')}>
            HOME
          </button>
          <button className="button-navigator" type="button" onClick={() => alert('ARTICLES')}>
            ARTICLES
          </button>
          <button className="button-navigator" type="button" onClick={() => alert('AUDIO')}>
            AUDIO
          </button>
        </div>
      </div>
      <div id="mobile-head">
        <div className="row-mobile">
          <FiMenu size={25} onClick={() => alert('Menu não concluido :( Sorry ')} />
          <button onClick={() => alert('Send')} type="submit" className="add">
            L
          </button>
          <MdNotifications onClick={() => alert('Notifications')} size={25} color="#c0c0c0c0" />
        </div>
      </div>
    </div>
  );
}
