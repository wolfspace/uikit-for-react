import React from 'react';
import PropTypes from 'prop-types';
import { getOptionsString } from '../../lib';
import Grid, { GridCell } from '../Grid';

export default class GridParallax extends React.Component {
  static meta = {
    name: 'GridParallax',
  };

  static propTypes = {
    ...Grid.propTypes,
    children: PropTypes.node.isRequired,
    target: PropTypes.string,
    translate: PropTypes.number,
  };

  static Cell = GridCell;

  render() {
    const { children, target, translate, ...rest } = this.props;

    const componentOptions = getOptionsString({
      target,
      translate,
    });

    return (
      <Grid
        {...rest}
        data-uk-grid={undefined}
        data-uk-grid-parallax={componentOptions}
      >
        {children}
      </Grid>
    );
  }
}
