import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  getElementType,
  HTML,
} from '../../lib';
import { Block } from '../Base';

export default class Marker extends Block {
  static meta = {
    name: 'Marker',
  };

  static propTypes = {
    ...Block.propTypes,
    as: PropTypes.oneOf(HTML.ALL_ELEMENTS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    as: 'a',
  };

  render() {
    const {
      attributes,
      blockClasses,
      blockStyle,
      unhandledProps,
    } = this.getBlockElements(this.props);

    const {
      as,
      children,
      className,
      ...rest
    } = unhandledProps;

    const classes = classnames(
      className,
      blockClasses,
    );

    const Element = getElementType(Marker, this.props);
    return (
      <Element
        {...rest}
        className={classes || undefined}
        style={blockStyle}
        data-uk-marker
        {...attributes}
      >
        {children}
      </Element>
    );
  }
}
