import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  buildObjectOrValueClassNames,
  commonPropTypes,
  generateSelector,
} from '../../lib';
import ArticleBody from './ArticleBody';
import ArticleLead from './ArticleLead';
import ArticleMeta from './ArticleMeta';
import ArticleTitle from './ArticleTitle';

class Article extends React.Component {
  static meta = {
    name: 'Article',
    ukClass: 'uk-article',
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    margin: commonPropTypes.margin,
    padding: commonPropTypes.padding,
  };

  static defaultProps = {
    className: '',
  };

  static Body = ArticleBody;
  static Lead = ArticleLead;
  static Meta = ArticleMeta;
  static Title = ArticleTitle;

  componentDidMount() {
    console.log(this.selector);
  }

  handleRef = element => (this.ref = element);

  render() {
    const {
      children,
      className,
      margin,
      padding,
      ...rest
    } = this.props;

    this.selector = generateSelector();

    const classes = classnames(
      className,
      Article.meta.ukClass,
      this.selector,
      buildObjectOrValueClassNames('margin', margin),
      buildObjectOrValueClassNames('padding', padding),
    );

    return (
      <article
        {...rest}
        className={classes || undefined}
        ref={this.handleRef}
      >
        {children}
      </article>
    );
  }
}

export default Article;
