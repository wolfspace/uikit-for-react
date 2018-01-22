import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { get } from 'lodash';
import { getOptionsString } from '../../lib';
import { BlockElement } from '../Base';
import Cover from './Cover';

export default class CoverContainer extends BlockElement {
  static meta = {
    name: 'CoverContainer',
    ukClass: 'uk-cover-container',
  };
  static displayName = 'CoverContainer';

  static propTypes = {
    ...BlockElement.propTypes,
    as: BlockElement.asPropType,
    children: PropTypes.instanceOf(Cover).isRequired,
    className: PropTypes.string,
    responsive: PropTypes.shape({
      height: PropTypes.number,
      width: PropTypes.number,
    }),
    viewportOptions: PropTypes.shape({
      expand: PropTypes.bool,
      minHeight: PropTypes.number,
      offsetBottom: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
      offsetTop: PropTypes.bool,
    }),
  };

  static defaultProps = {
    ...BlockElement.defaultProps,
    as: 'div',
    className: null,
    responsive: false,
    viewportOptions: null,
  };

  render() {
    const {
      children,
      className,
      responsive,
      viewportOptions,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-cover-container');

    const responsiveProps = {
      height: get(responsive, 'height', 600),
      width: get(responsive, 'width', 800),
    };

    return (
      <BlockElement
        {...rest}
        className={classes || undefined}
        data-uk-height-viewport={getOptionsString(viewportOptions)}
      >
        {responsive && <canvas {...responsiveProps} />}
        {children}
      </BlockElement>
    );
  }
}
