/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { customPropTypes, getElementType } from '../../../lib';
import { Flex, Margin, Width } from '../../common';

export default class NavItemGroup extends React.Component {
  static displayName = 'NavItemGroup';

  static propTypes = {
    as: customPropTypes.customOrStringElement('ul'),
    children: PropTypes.node,
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    title: PropTypes.node.isRequired,
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'ul',
    className: '',
  };

  render() {
    const {
      as,
      children,
      className,
      flex,
      margin,
      title,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
    );

    const Title = React.isValidElement(title) ? title : <a href="#">{title}</a>;
    const Element = getElementType(NavItemGroup, as);
    return (
      <Fragment>
        <Title />
        <Element {...rest} className={classes || undefined}>
          {children}
        </Element>
      </Fragment>
    );
  }
}
