import React from 'react';
import PropTypes from 'prop-types';
import { BlockElement, InlineElement } from '../../base';

export default class PaginationPrevious extends React.Component {
  static displayName = 'PaginationPrevious';

  static propTypes = {
    ...BlockElement.propTypes,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    className: '',
  };

  render() {
    return (
      <InlineElement {...this.props} as="span" data-uk-pagination-previous />
    );
  }
}
