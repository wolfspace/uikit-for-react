import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildClassName,
  childrenHaveClass,
  customPropTypes,
  getElementType,
  HTML,
} from '../../../lib';
import { Flex, Margin, Width } from '../../common';

export default class Container extends React.Component {
  static displayName = 'Container';

  static propTypes = {
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    flex: Flex.propTypes,
    margin: Margin.propTypes,
    size: PropTypes.oneOf(['expand', 'large', 'small']),
    width: Width.propTypes,
  };

  static defaultProps = {
    as: 'div',
    className: '',
  };

  render() {
    const {
      as,
      children,
      className,
      flex,
      margin,
      size,
      width,
      ...rest
    } = this.props;

    const classes = classnames(
      className,
      'uk-container',
      buildClassName('container', size),
      Flex.getClasses(flex),
      Margin.getClasses(margin),
      Width.getClasses(width),
      {
        'uk-inline': childrenHaveClass(children, 'position'),
      },
    );

    const Element = getElementType(Container, as);
    return (
      <Element {...rest} className={classes}>
        {children}
      </Element>
    );
  }
}
