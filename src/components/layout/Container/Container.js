import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, childrenHaveClass } from '../../../lib';
import { BlockElement } from '../../base';

export default class Container extends React.Component {
  static displayName = 'Container';

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(['expand', 'large', 'small']),
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
    className: '',
  };

  render() {
    const { children, className, size, ...rest } = this.props;

    const ukClass = 'uk-container';
    const classes = classnames(
      className,
      ukClass,
      buildClassName(ukClass, size),
      {
        [buildClassName('inline')]: childrenHaveClass(
          children,
          'position',
        ),
      },
    );

    return (
      <BlockElement {...rest} className={classes}>
        {children}
      </BlockElement>
    );
  }
}
