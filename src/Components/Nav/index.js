import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight, faLaptopCode, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { Navbar } from './styles';

export default class Nav extends Component {
  state = {

  };

  render() {
    return (
      <Navbar>
          <unorderedList>
            <listItem>
              <Link to="/">
                <FontAwesomeIcon icon={faAlignRight}/>
              </Link>
            </listItem>
            <listItem>
              <Link to="/projects">
                <FontAwesomeIcon icon={faLaptopCode}/>  
              </Link>
            </listItem>
            <listItem>
              <Link to="/contact">
                <FontAwesomeIcon icon={faAddressBook}/>
              </Link>
            </listItem>
          </unorderedList>
      </Navbar>
    );
  }
}
