import React from 'react';
import PropTypes from 'prop-types';
import { customPropTypes, getElementType } from '../../../lib';

export default class FormOption extends React.Component {
  static displayName = 'FormOption';

  static propTypes = {
    as: customPropTypes.customOrStringElement('option'),
    children: PropTypes.node,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'option',
    className: '',
  };

  render() {
    const { as, ...rest } = this.props;
    const Element = getElementType(FormOption, this.props);
    return <Element {...rest} />;
  }
}
