import React from "react";
import './NavigationHeader.css';

const menuItems = ['SALES', 'RENTALS', 'ABOUT', 'TEAM', 'CONTACT US'];

const NavigationHeader = () => {
  return (
    <div className="navigation-header">
      {menuItems.map((item, index) => {
        return (
          <div key={index}>
            <a href='about:blank' className="header-item">{item}</a>
          </div>
        );
      })}
    </div>
  );
}

export default NavigationHeader;
