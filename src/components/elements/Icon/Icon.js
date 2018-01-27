import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { buildClassName, getOptionsString, UIK } from '../../../lib/index';
import { InlineElement } from '../../base/index';

export default class Icon extends React.Component {
  static displayName = 'Icon';

  static propTypes = {
    ...InlineElement.propTypes,
    as: PropTypes.oneOf(['a', 'span']),
    className: PropTypes.string,
    link: PropTypes.bool,
    name: PropTypes.oneOf(UIK.ICON_NAMES).isRequired,
    ratio: PropTypes.number,
  };

  static defaultProps = {
    ...InlineElement.defaultProps,
    as: 'span',
    className: null,
    link: false,
    ratio: null,
  };

  render() {
    const { className, link, name, ratio, ...rest } = this.props;

    const ukClass = 'uk-icon';
    const classes = classnames(className, ukClass, {
      [buildClassName(ukClass, 'link')]: link,
    });

    const componentOptions = getOptionsString({
      icon: name,
      ratio,
    });

    return (
      <InlineElement
        {...rest}
        className={classes || undefined}
        data-uk-icon={componentOptions}
      />
    );
  }
}