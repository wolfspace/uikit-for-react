import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName } from '../../lib';
import { BlockElement } from '../Base';

export default class BreadcrumbItem extends BlockElement {
  static meta = {
    name: 'BreadcrumbItem',
  };

  static propTypes = {
    ...BlockElement.propTypes,
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
  };

  static defaultProps = {
    active: false,
    disabled: false,
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
