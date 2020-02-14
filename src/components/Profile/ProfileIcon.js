import React, { useState } from 'react';
import { 
  Dropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem
} 
  from 'reactstrap';
import './ProfileIcon.css';
import Group2 from './Group-2.png';

const ProfileIcon = ({ onRouteChange, toggleModal }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div>    
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle
          tag="span"
          data-toggle="dropdown"
          aria-expanded={dropdownOpen}
        >
          <img src={Group2} className="br-100 pa1 ba b--black-10 h3 w3" alt="avatar" />
        </DropdownToggle>
        <DropdownMenu
          right
          className="b--transparent shadow-5"
          style={{marginTop: '-10px', backgroundColor: 'rgba(255, 255, 255, 0.5'}}>
          <DropdownItem
            className="purple"
            onClick={() => toggleModal()}>View Profile</DropdownItem>
          <DropdownItem 
            className="purple"
            onClick={() => onRouteChange('signout')}>Sign Out</DropdownItem>
        </DropdownMenu>
      </Dropdown>

    </div>
  );
}

export default ProfileIcon;