import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, customPropTypes, getElementType } from '../../../lib';
import CountdownLabel from './CountdownLabel';

export default class CountdownMinutes extends React.Component {
  static displayName = 'CountdownMinutes';

  static propTypes = {
    as: customPropTypes.customOrStringElement('div', 'span'),
    className: PropTypes.string,
    label: PropTypes.instanceOf(CountdownLabel),
  };

  static defaultProps = {
    as: 'span',
    className: '',
  };

  render() {
    const { as, className, label, ...rest } = this.props;

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
