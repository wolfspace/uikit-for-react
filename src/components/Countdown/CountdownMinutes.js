import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, getElementType } from '../../lib';
import CountdownLabel from './CountdownLabel';

export default class CountdownMinutes extends React.Component {
  static displayName = 'CountdownMinutes';

  static propTypes = {
    as: PropTypes.oneOf(['div', 'span']),
    className: PropTypes.string,
    label: PropTypes.instanceOf(CountdownLabel),
  };

  static defaultProps = {
    as: 'span',
    className: null,
    label: null,
  };

  render() {
    const { className, label, ...rest } = this.props;

    const classes = classnames(
      className,
      'uk-countdown-minutes',
      buildClassName('countdown', 'number'),
    );

    const Element = getElementType(CountdownMinutes, rest);
    if (!label) return <Element className={classes} />;
    return (
      <div>
        <Element className={classes} />
        {label}
      </div>
    );
  }
}
