import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get, isNil } from 'lodash';
import { buildClassName, UIK } from '../../lib';
import { BlockElement } from '../Base';

export default class GridCell extends BlockElement {
  static meta = {
    name: 'GridCell',
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    grow: PropTypes.oneOf(['auto', 'full', 'none']),
    matchHeight: PropTypes.bool,
    order: PropTypes.oneOfType([
      PropTypes.oneOf(['first', 'last']),
      PropTypes.shape({
        first: PropTypes.oneOf(UIK.BREAKPOINTS),
        last: PropTypes.oneOf(UIK.BREAKPOINTS),
      }),
    ]),
  };

  static defaultProps = {
    matchHeight: false,
  };

  render() {
    const {
      inheritedAttributes,
      inheritedClasses,
      inheritedStyle,
      unhandledProps,
    } = this.getInheritedProps(this.props);

    const {
      children,
      className,
      grow,
      matchHeight,
      order,
      ...rest
    } = unhandledProps;

    const flexGrow = isNil(grow) ? null : grow.replace('full', '1');

    const classes = classnames(
      className,
      inheritedClasses,
      buildClassName('flex', order),
      buildClassName('flex', 'first', get(order, 'first')),
      buildClassName('flex', 'last', get(order, 'last')),
      {
        [buildClassName('flex', flexGrow)]: !isNil(grow),
        [buildClassName('grid', 'item', 'match')]: matchHeight,
      },
    );

    return (
      <div
        {...rest}
        className={classes || undefined}
        style={inheritedStyle}
        {...inheritedAttributes}
      >
        {children}
      </div>
    );
  }
}
