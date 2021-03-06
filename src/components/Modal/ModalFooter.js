import React from 'react';
import classnames from 'classnames';
import { customPropTypes } from '../../lib';
import Base from '../Base';

export default class ModalFooter extends React.Component {
  static displayName = 'ModalFooter';

  static propTypes = {
    ...Base.propTypes,
    as: customPropTypes.customOrStringElement('div'),
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
  };

  render() {
    const { className, ...rest } = this.props;

    const classes = classnames(className, 'uk-modal-footer');

    return <Base {...rest} className={classes} component={ModalFooter} />;
  }
}
