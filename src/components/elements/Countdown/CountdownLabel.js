import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { BlockElement } from '../../base';

export default class CountdownLabel extends React.Component {
  static displayName = 'CountdownLabel';

  static propTypes = {
    ...BlockElement.propTypes,
    as: PropTypes.oneOf(['div', 'span']),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
    className: null,
  };

  render() {
    const { className, ...rest } = this.props;
    const classes = classnames(className, 'uk-countdown-label');
    return <BlockElement {...rest} className={classes || undefined} />;
  }
}
