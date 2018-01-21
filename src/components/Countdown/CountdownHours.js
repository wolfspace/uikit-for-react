import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, getElementType } from '../../lib';
import CountdownLabel from './CountdownLabel';

export default class CountdownHours extends React.Component {
  static meta = {
    name: 'CountdownHours',
    ukClass: 'uk-countdown-hours',
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
      CountdownHours.meta.ukClass,
      buildClassName('countdown', 'number'),
    );

    const Element = getElementType(CountdownHours, rest);

    if (!label) return <Element className={classes} />;
    return (
      <div>
        <Element className={classes} />
        {label}
      </div>
    );
  }
}
