import React, { useState } from 'react';
import { BsPerson, BsCheck } from 'react-icons/bs';
import { BiMaleSign, BiFemaleSign } from 'react-icons/bi';
import './styles.css';

export default function Auth() {
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(true);

  const user = {
    username: '',
    email: '',
    select: '',
  };

  function SetGender() {
    if (female) {
      setFemale(false);
      setMale(true);
    }
    if (male) {
      setFemale(true);
      setMale(false);
    }
  }

  return (
    <div id="footer">
      <div id="container">
        <div className="line">
          <button
            type="button"
            onClick={() => alert('Sign Up')}
            id="signup-button"
          >
            Sign Up
          </button>
        </div>
        <div className="line">
          <button
            type="button"
            onClick={() => alert('Login')}
            id="login-button"
          >
            Login
          </button>
        </div>
        <div className="line">
          <button
            type="button"
            onClick={SetGender}
            className={male ? 'btn-true' : 'btn-false'}
          >
            <BiMaleSign size={24} color={male ? '#4723AE' : '#FFF'} />
          </button>
          <button
            type="button"
            onClick={SetGender}
            className={female ? 'btn-true' : 'btn-false'}
          >
            <BiFemaleSign size={24} color={female ? '#4723AE' : '#FFF'} />
          </button>
        </div>
        <div className="line">
          <div className="user-input-container">
            <input
              type="text"
              className="user-input"
              value={user.username}
              placeholder="nome"
            />
            <BsPerson size={16} color="#c0c0c0" />
          </div>
        </div>
        <div className="line">
          <div type="text" className="user-input-container">
            <input
              type="text"
              className="user-input"
              value={user.email}
              placeholder="e-mail"
            />
            <BsPerson size={16} color="#c0c0c0" />
          </div>
        </div>
        <div className="line">
          <div type="text" className="user-input-container">
            <input
              type="text"
              className="user-input"
              value={user.select}
              placeholder="interesse"
            />
            <BsCheck size={18} color="#c0c1c1" />
          </div>
        </div>
        <div className="line">
          <button onClick={() => alert('Send')} type="submit" className="add">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
