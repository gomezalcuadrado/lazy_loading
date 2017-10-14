/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';
import Logo from './img/logo.png';

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="row">
              <div className="col-xs-6">
                <h1><i className="ti-dropbox-alt"></i> Lazy Loading</h1>
              </div>
              <div className="col-xs-6 text-right">
                <img src={Logo} />
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {

};

export default Header;
