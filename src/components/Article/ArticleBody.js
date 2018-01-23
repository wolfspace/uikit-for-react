import React from 'react';
import PropTypes from 'prop-types';
import { BlockElement } from '../Base';

export default class ArticleBody extends BlockElement {
  static displayName = 'ArticleBody';

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
    className: null,
  };

  render() {
    return <BlockElement {...this.props} />;
  }
}
