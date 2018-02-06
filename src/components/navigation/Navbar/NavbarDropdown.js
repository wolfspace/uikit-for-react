/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import { omit } from 'lodash';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';
import { Dropdown } from '../../elements';
import NavbarItem from './NavbarItem';

export default class NavbarDropdown extends React.Component {
  static displayName = 'NavbarDropdown';

  static propTypes = {
    ...Dropdown.propTypes,
    as: customPropTypes.customOrStringElement('div'),
    children: ExtraPropTypes.elementType(NavbarItem),
    className: PropTypes.string,
    multiplyWidth: PropTypes.oneOf([2, 3, 4, 5]),
    navOptions: PropTypes.object,
  };

  static defaultProps = {
    ...Dropdown.defaultProps,
    as: 'div',
    className: '',
  };

  render() {
    const {
      children,
      className,
      multiplyWidth,
      navOptions,
      ...rest
    } = this.props;

    const ukClass = 'uk-navbar-dropdown';
    const classes = classnames(
      className,
      ukClass,
      buildClassName(ukClass, 'width', multiplyWidth),
    );

    const navProps = {
      ...omit(navOptions, 'as'),
      className: classnames(
        navOptions.className,
        'uk-nav',
        buildClassName(ukClass, 'nav'),
      ),
    };

    const InnerElement = getElementType(navOptions, navOptions);
    return (
      <Dropdown {...rest} className={classes}>
        <InnerElement {...navProps}>{children}</InnerElement>
      </Dropdown>
    );
  }
}
