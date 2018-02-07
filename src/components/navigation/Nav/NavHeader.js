import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';

export default class NavHeader extends React.Component {
  static displayName = 'NavHeader';

  static propTypes = {
    as: customPropTypes.customOrStringElement('li'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'li',
    className: '',
  };

  render() {
    const { as, className, flex, margin, width, ...rest } = this.props;

    const classes = classnames(
      className,
      'uk-nav-header',
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Element = getElementType(NavHeader, as);
    return <Element {...rest} className={classes} />;
  }
}
