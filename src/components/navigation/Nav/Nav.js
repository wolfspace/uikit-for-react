import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import classnames from 'classnames';
import {
  customPropTypes,
  getOptionsString,
  HTML,
  LibraryComponent,
  UIK,
} from '../../../lib';
import Base from '../../base';
import NavDivider from './NavDivider';
import NavHeader from './NavHeader';
import NavItem from './NavItem';
import NavItemGroup from './NavItemGroup';
import NavSubNav from './NavSubNav';

export default class Nav extends React.Component {
  static displayName = 'Nav';

  static propTypes = {
    ...Base.propTypes,
    accordion: PropTypes.bool,
    activeIndex: customPropTypes.validateIndex,
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.ANIMATIONS),
      PropTypes.arrayOf(UIK.ANIMATIONS),
      PropTypes.shape({
        in: PropTypes.oneOfType([
          PropTypes.oneOf(UIK.ANIMATIONS),
          PropTypes.arrayOf(UIK.ANIMATIONS),
        ]),
        out: PropTypes.oneOfType([
          PropTypes.oneOf(UIK.ANIMATIONS),
          PropTypes.arrayOf(UIK.ANIMATIONS),
        ]),
        duration: ExtraPropTypes.nonNegativeInteger,
      }),
    ]),
    as: customPropTypes.customOrStringElement('ul'),
    center: PropTypes.bool,
    children: PropTypes.node.isRequired,
    collapsible: PropTypes.bool,
    hideOpenAnimation: PropTypes.bool,
    multiple: PropTypes.bool,
    primary: PropTypes.bool,
    transition: PropTypes.oneOf(HTML.CSS_EASING),
  };

  static defaultProps = {
    ...Base.defaultProps,
    accordion: false,
    activeIndex: 0,
    as: 'ul',
    center: false,
    hideOpenAnimation: false,
    primary: false,
  };

  static Divider = NavDivider;
  static Header = NavHeader;
  static Item = NavItem;
  static ItemGroup = NavItemGroup;
  static Subnav = NavSubNav;

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('nav');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeIndex !== this.props.activeIndex) {
      UIkit.nav(this.libComp.cssSelector).toggle(
        nextProps.activeIndex,
        nextProps.hideOpenAnimation,
      );
    }
  }

  render() {
    const {
      accordion,
      animation,
      center,
      className,
      collapsible,
      multiple,
      primary,
      transition,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-nav', {
      'uk-nav-center': center,
      'uk-nav-default': !primary,
      'uk-nav-parent-icon': accordion,
      'uk-nav-primary': primary,
    });

    const componentOptions = getOptionsString({
      animation,
      collapsible,
      multiple,
      transition,
    });

    return (
      <Base
        {...rest}
        baseRef={this.handleRef}
        className={classes}
        component={Nav}
        uk-nav={accordion ? componentOptions : undefined}
        {...this.libComp.appendProps(this.props)}
      />
    );
  }
}
