import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../../lib/index';
import { BlockElement } from '../../base/index';

export default class BreadcrumbItem extends React.Component {
  static displayName = 'BreadcrumbItem';

  static propTypes = {
    ...BlockElement.propTypes,
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    active: false,
    children: null,
    className: null,
    disabled: false,
    href: '',
  };

  render() {
    const { active, children, className, disabled, href, ...rest } = this.props;

    const classes = classnames(className, {
      [buildClassName('disabled')]: disabled,
    });

    const InnerElement = active ? 'span' : 'a';
    return (
      <BlockElement {...rest} as="li" className={classes || undefined}>
        <InnerElement href={href}>{children}</InnerElement>
      </BlockElement>
    );
  }
}