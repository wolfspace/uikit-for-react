import React from 'react';
import PropTypes from 'prop-types';
import { BlockElement } from '../Base';

export default class ListItem extends BlockElement {
  static displayName = 'ListItem';

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: null,
  };

  render() {
    return <BlockElement {...this.props} as="li" />;
  }
}
