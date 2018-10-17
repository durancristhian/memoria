import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const Header = ({ userName }) => (
  <div className="mb3">
    <div className="flex items-center justify-center">
      <h1 className="mv0 tc">Memoria</h1>
      <p className="ml3 mv0">{userName}</p>
    </div>
  </div>
);

Header.propTypes = {
  userName: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  userName: state.user.name
});

const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader;
