import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../Base';

export default class ModalHeader extends BlockElement {
  static displayName = 'ModalHeader';

  static propTypes = {
    ...BlockElement.propTypes,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-modal-header');
    return <BlockElement {...rest} as="div" className={classes || undefined} />;
  }
}
