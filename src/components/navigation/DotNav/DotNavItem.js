import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';

export default class DotNavItem extends React.Component {
  static displayName = 'DotNavItem';

  static propTypes = {
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    href: PropTypes.string,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    active: false,
    as: 'li',
    className: '',
  };

  render() {
    const {
      active,
      as,
      children,
      className,
      flex,
      href,
      margin,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-active': active,
      },
    );

    const Element = getElementType(DotNavItem, as);
    return (
      <Element {...rest} className={classes || undefined}>
        <a href={href}>{children}</a>
      </Element>
    );
  }
}
