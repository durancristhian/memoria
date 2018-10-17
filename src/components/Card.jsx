import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Card = ({ children, index, onCardClick, shown }) => (
  <li className="w-25">
    <button
      className="b--black-20 ba bg-white bw1 db ma3 pa0 pointer shadow-5"
      type="button"
      onClick={() => onCardClick(index)}
    >
      <div className={classnames(shown ? 'dn' : 'db')}>
        <img
          src="https://place-hold.it/300/fff4e0?text="
          alt="Token placeholder"
          className="db"
        />
      </div>
      <div className={classnames(shown ? 'db' : 'dn')}>{children}</div>
    </button>
  </li>
);

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  index: PropTypes.number.isRequired,
  shown: PropTypes.bool.isRequired,
  onCardClick: PropTypes.func.isRequired
};

export default Card;
