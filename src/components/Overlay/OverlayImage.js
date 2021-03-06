import React from 'react';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class OverlayImage extends React.Component {
  static displayName = 'OverlayImage';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('img'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'img',
  };

  render() {
    return <Base {...this.props} component={OverlayImage} />;
  }
}
