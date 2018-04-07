import React, { Fragment } from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import noop from 'lodash/noop';
import {
  addMultipleEventInvokers,
  customPropTypes,
  getOptionsString,
  HTML,
  joinListProp,
  LibraryComponent,
  UIK,
} from '../../../lib';
import Base from '../../base';
import DropBoundary from './DropBoundary';

export default class Drop extends React.Component {
  static displayName = 'Drop';

  static propTypes = {
    ...Base.propTypes,
    animation: PropTypes.shape({
      name: PropTypes.oneOfType([
        PropTypes.oneOf(UIK.ANIMATIONS),
        PropTypes.arrayOf(UIK.ANIMATIONS),
      ]),
      duration: PropTypes.number,
    }),
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    boundaryAlign: PropTypes.bool,
    children: PropTypes.node.isRequired,
    delayHide: PropTypes.number,
    delayShow: PropTypes.number,
    flip: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['x', 'y'])]),
    mode: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.MODES),
      PropTypes.arrayOf(UIK.MODES),
    ]),
    offset: PropTypes.number,
    onBeforeHide: PropTypes.func,
    onBeforeShow: PropTypes.func,
    onHidden: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    onShown: PropTypes.func,
    onStack: PropTypes.func,
    onToggle: PropTypes.func,
    position: PropTypes.oneOf(UIK.DROP_POSITIONS),
    shown: PropTypes.bool,
    toggle: PropTypes.element,
  };

  static defaultProps = {
    ...Base.defaultProps,
    as: 'div',
    onBeforeHide: noop,
    onBeforeShow: noop,
    onHidden: noop,
    onHide: noop,
    onShow: noop,
    onShown: noop,
    onStack: noop,
    onToggle: noop,
    shown: false,
  };

  static Boundary = DropBoundary;

  constructor(props) {
    super(props);
    this.libComp = new LibraryComponent('drop');
  }

  componentDidMount() {
    const ukToPropsEventMap = {
      beforehide: 'onBeforeHide',
      beforeshow: 'onBeforeShow',
      hidden: 'onHidden',
      hide: 'onHide',
      show: 'onShow',
      shown: 'onShown',
      stack: 'onStack',
      toggle: 'onToggle',
    };
    addMultipleEventInvokers(
      this.libComp.cssSelector,
      ukToPropsEventMap,
      this.props,
    );

    const firstGrid = LibraryComponent.findFirstWithName('grid');
    if (firstGrid) {
      firstGrid.classList.add('uk-drop-grid');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.shown !== this.props.shown) {
      const drop = UIkit.drop(this.libComp.cssSelector);
      if (nextProps.shown === true && this.props.shown === false) {
        drop.show();
      }
      if (nextProps.shown === false && this.props.shown === true) {
        drop.hide();
      }
    }
  }

  render() {
    const {
      animation,
      boundaryAlign,
      className,
      delayHide,
      delayShow,
      flip,
      mode,
      offset,
      position,
      toggle,
      ...rest
    } = this.props;

    const classes = classnames(className, 'uk-drop');

    const componentOptions = getOptionsString({
      animation,
      boundaryAlign,
      delayHide,
      delayShow,
      flip,
      mode: joinListProp(mode, ','),
      offset,
      pos: position,
    });

    return (
      <Fragment>
        {toggle && toggle}
        <Base
          {...rest}
          className={classes}
          component={Drop}
          uk-drop={componentOptions}
          {...this.libComp.appendProps(this.props)}
        />
      </Fragment>
    );
  }
}
