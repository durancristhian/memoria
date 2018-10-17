import classnames from 'classnames';
import React from 'react';

const Button = props => {
  const { className, onClick, children, disabled, ...rest } = props;

  return (
    <button
      className={classnames(
        'no-underline',
        'pa3',
        disabled ? 'o-30' : '',
        className
      )}
      onClick={onClick}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
