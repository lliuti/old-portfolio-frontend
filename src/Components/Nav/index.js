import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight, faLaptopCode, faAddressBook } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default function Nav() {
  return (
    <div className="nav">
      <ul>
        <li><FontAwesomeIcon icon={faAlignRight}/></li>
        <li><FontAwesomeIcon icon={faLaptopCode}/></li>
        <li><FontAwesomeIcon icon={faAddressBook}/></li>
      </ul>
    </div>
  );
}
