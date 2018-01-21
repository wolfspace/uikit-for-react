import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, getElementType } from '../../lib';
import CountdownLabel from './CountdownLabel';

export default class CountdownSeconds extends React.Component {
  static meta = {
    name: 'CountdownSeconds',
    ukClass: 'uk-countdown-seconds',
  };

  static propTypes = {
    as: PropTypes.oneOf(['div', 'span']),
    className: PropTypes.string,
    label: PropTypes.instanceOf(CountdownLabel),
  };

  static defaultProps = {
    as: 'span',
    label: null,
  };

  render() {
    const { className, label, ...rest } = this.props;

    const classes = classnames(
      className,
      CountdownSeconds.meta.ukClass,
      buildClassName('countdown', 'number'),
    );

    const Element = getElementType(CountdownSeconds, rest);

    if (!label) return <Element className={classes} />;
    return (
      <div>
        <Element className={classes} />
        {label}
      </div>
    );
  }
}
