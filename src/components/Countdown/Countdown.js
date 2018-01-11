import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import UIkit from 'uikit';
import {
  buildObjectOrValueClassNames,
  commonPropTypes,
  getElementType,
  getOptionsString,
  HTML,
} from '../../lib';
import CountdownDays from './CountdownDays';
import CountdownHours from './CountdownHours';
import CountdownLabel from './CountdownLabel';
import CountdownMinutes from './CountdownMinutes';
import CountdownSeconds from './CountdownSeconds';
import CountdownSeparator from './CountdownSeparator';

class Countdown extends React.Component {
  static meta = {
    name: 'Countdown',
    ukClass: 'uk-countdown',
  };

  static propTypes = {
    as: PropTypes.oneOfType([
      PropTypes.oneOf(HTML.BLOCK_ELEMENTS),
      PropTypes.func,
    ]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    date: PropTypes.string,
    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,
    paused: PropTypes.bool,
  };

  static defaultProps = {
    as: 'div',
    className: '',
    paused: false,
  };

  static Days = CountdownDays;
  static Hours = CountdownHours;
  static Minutes = CountdownMinutes;
  static Seconds = CountdownSeconds;
  static Label = CountdownLabel;
  static Separator = CountdownSeparator;

  componentWillReceiveProps(nextProps) {
    const selector = (this.ref instanceof Countdown) ? this.ref : `.${Countdown.meta.ukClass}`;
    if (nextProps.paused === true && this.props.paused === false) {
      UIkit.countdown(selector).stop();
    }

    if (nextProps.paused === false && this.props.paused === true) {
      UIkit.countdown(selector).start();
    }
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      as,
      children,
      className,
      date,
      margin,
      padding,
      paused,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      Countdown.meta.ukClass,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );

    const Element = getElementType(Countdown, as, rest);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
        data-uk-countdown={getOptionsString({ date })}
      >
        {children}
      </Element>
    );
  }
}

export default Countdown;