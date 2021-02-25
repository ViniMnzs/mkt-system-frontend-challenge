import React from 'react';
import { BiMicrophone } from 'react-icons/bi';
import { CgAppleWatch } from 'react-icons/cg';
import { MdShowChart } from 'react-icons/md';
import { GiCutDiamond } from 'react-icons/gi';
import './styles.css';

export default function Main() {
  return (
    <div id="main">
      <div id="column-container">
        <div className="row">
          <span id="title">Join us today</span>
        </div>
        <div className="row">
          <span id="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>
        <div id="block-list">
          <div className="column">
            <CgAppleWatch size={70} color="#FFEE00" />
            <div className="row">
              <span className="subtitle">Spend Smart Time</span>
            </div>
            <div className="row">
              <span className="subdescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
          </div>
          <div className="column">
            <BiMicrophone size={70} color="#FFEE00" />
            <div className="row">
              <span className="subtitle">Audio Podcast</span>
            </div>
            <div className="row">
              <span className="subdescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
          </div>
          <div className="column">
            <MdShowChart size={70} color="#FFEE00" />
            <div className="row">
              <span className="subtitle">Boost your time</span>
            </div>
            <div className="subdescription">
              <span id="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
          </div>
          <div className="column">
            <GiCutDiamond size={70} color="#FFEE00" />
            <div className="row">
              <span className="subtitle">Quality</span>
            </div>
            <div className="row">
              <span className="subdescription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
