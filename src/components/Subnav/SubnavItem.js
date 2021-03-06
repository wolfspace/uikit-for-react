import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import isObject from 'lodash/isObject';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class SubnavItem extends React.Component {
  static displayName = 'SubnavItem';

  static propTypes = {
    ...Base.propTypes,
    active: PropTypes.bool,
    as: customPropTypes.customOrStringElement('li'),
    href: PropTypes.string,
  };

  static defaultProps = {
    ...Base.defaultProps,
    active: false,
    as: 'li',
    href: '#',
  };

  render() {
    const { active, children, className, href, ...rest } = this.props;

    const classes = classnames(className, { 'uk-active': active });

    return (
      <Base {...rest} className={classes || undefined} component={SubnavItem}>
        {isObject(children) ? children : <a href={href}>{children}</a>}
      </Base>
    );
  }
}
