import React from 'react';
import UIkit from 'uikit';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'airbnb-prop-types';
import get from 'lodash/get';
import isPlainObject from 'lodash/isPlainObject';
import noop from 'lodash/noop';
import {
  addMultipleEventInvokers,
  childTypeNameLike,
  customPropTypes,
  getOptionsString,
  HTML,
  recurseChildren,
  UIK,
} from '../../lib';
import Base from '../Base';
import Ref from '../Ref';
import SlideshowItem from './SlideshowItem';
import SlideshowItems from './SlideshowItems';
import SlideshowNext from './SlideshowNext';
import SlideshowPrevious from './SlideshowPrevious';

export default class Slideshow extends React.Component {
  static displayName = 'Slideshow';

  static propTypes = {
    ...Base.propTypes,
    activeIndex: customPropTypes.validateIndex,
    animation: PropTypes.oneOfType([
      PropTypes.oneOf(UIK.SLIDESHOW_ANIMATIONS),
      PropTypes.shape({
        name: PropTypes.oneOf(UIK.SLIDESHOW_ANIMATIONS),
        velocity: PropTypes.number,
      }),
    ]),
    as: customPropTypes.customOrStringElement(HTML.BLOCK_ELEMENTS),
    autoplay: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        enabled: PropTypes.bool,
        interval: PropTypes.number,
      }),
    ]),
    defaultIndex: customPropTypes.validateIndex,
    finite: PropTypes.bool,
    maxHeight: PropTypes.oneOfType([
      PropTypes.bool,
      ExtraPropTypes.nonNegativeInteger,
    ]),
    minHeight: PropTypes.oneOfType([
      PropTypes.bool,
      ExtraPropTypes.nonNegativeInteger,
    ]),
    onBeforeItemHide: PropTypes.func,
    onBeforeItemShow: PropTypes.func,
    onItemHidden: PropTypes.func,
    onItemHide: PropTypes.func,
    onItemShow: PropTypes.func,
    onItemShown: PropTypes.func,
    paused: PropTypes.bool,
    pauseOnHover: PropTypes.bool,
    ratio: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  };

  static defaultProps = {
    as: 'div',
    onBeforeItemHide: noop,
    onBeforeItemShow: noop,
    onItemHidden: noop,
    onItemHide: noop,
    onItemShow: noop,
    onItemShown: noop,
    paused: false,
  };

  static Item = SlideshowItem;
  static Items = SlideshowItems;
  static Next = SlideshowNext;
  static Previous = SlideshowPrevious;

  constructor(props) {
    super(props);
    this.ref = null;
  }

  componentDidMount() {
    const ukToPropsEventMap = {
      beforeitemhide: 'onBeforeItemHide',
      beforeitemshow: 'onBeforeItemShow',
      itemhidden: 'onItemHidden',
      itemhide: 'onItemHide',
      itemshow: 'onItemShow',
      itemshown: 'onItemShown',
    };
    addMultipleEventInvokers(this.ref, ukToPropsEventMap, this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.paused !== this.props.paused) {
      const slideshow = UIkit.slideshow(this.ref);
      if (nextProps.paused === true) {
        slideshow.stopAutoplay();
      }
      if (nextProps.paused === false) {
        slideshow.startAutoplay();
      }
    }

    if (nextProps.activeIndex !== this.props.activeIndex) {
      UIkit.slideshow(this.ref).show(nextProps.activeIndex);
    }
  }

  handleRef = element => (this.ref = element);

  renderChildren = children =>
    recurseChildren(children, child => {
      if (childTypeNameLike(child, /Next/g)) {
        return React.cloneElement(child, {
          'uk-slideshow-item': 'next',
        });
      }
      if (childTypeNameLike(child, /Previous/g)) {
        return React.cloneElement(child, {
          'uk-slideshow-item': 'previous',
        });
      }
      return child;
    });

  render() {
    const {
      activeIndex,
      animation,
      autoplay,
      children,
      defaultIndex,
      finite,
      maxHeight,
      minHeight,
      paused,
      pauseOnHover,
      ratio,
      ...rest
    } = this.props;

    const componentOptions = getOptionsString({
      activeIndex: defaultIndex,
      animation,
      autoplay: isPlainObject(autoplay) ? get(autoplay, 'enabled') : autoplay,
      autoplayInterval: get(autoplay, 'interval'),
      finite,
      maxHeight,
      minHeight,
      pauseOnHover,
      ratio,
    });

    return (
      <Ref innerRef={this.handleRef}>
        <Base {...rest} component={Slideshow} uk-slideshow={componentOptions}>
          {this.renderChildren(children)}
        </Base>
      </Ref>
    );
  }
}
