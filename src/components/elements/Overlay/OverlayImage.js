import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import { InlineElement } from '../../base';

export default class OverlayImage extends React.Component {
  static displayName = 'OverlayImage';

  static propTypes = {
    ...InlineElement.propTypes,
    children: ExtraPropTypes.explicitNull,
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    className: '',
  };

  render() {
    return <InlineElement {...this.props} as="img" />;
  }
}