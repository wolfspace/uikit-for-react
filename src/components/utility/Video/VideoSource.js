import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import { customPropTypes, getElementType } from '../../../lib';

export default class VideoSource extends React.Component {
  static displayName = 'VideoSource';

  static propTypes = {
    as: customPropTypes.customOrStringElement('source'),
    children: ExtraPropTypes.explicitNull(),
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

  static defaultProps = {
    as: 'source',
    className: '',
  };

  render() {
    const { as, ...rest } = this.props;
    const Element = getElementType(VideoSource, this.props);
    return <Element {...rest} />;
  }
}
