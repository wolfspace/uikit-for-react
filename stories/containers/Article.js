import React from 'react';
import faker from 'faker';
import range from 'lodash/range';
import { storiesOf } from '@storybook/react';
import { Article, Block, Button, Grid, Link } from '../../src/components';

Article.displayName = 'Article';

const leadText = faker.lorem.paragraph();
const bodyText = faker.lorem.paragraphs(2);

storiesOf('Article', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Article>
        <Article.Title>
          <Link reset>Heading</Link>
        </Article.Title>
        <Article.Meta>
          Written by <a href="#">Super User</a> on 12 April 2012. Posted in{' '}
          <a href="#">Blog</a>
        </Article.Meta>
        <Article.Lead>{leadText}</Article.Lead>
        <Article.Body as="p">{bodyText}</Article.Body>
        <Grid gutter="small" childWidth="auto">
          <Grid.Cell>
            <Button as="a" text>
              Read more
            </Button>
          </Grid.Cell>
          <Grid.Cell>
            <Button as="a" text>
              5 Comments
            </Button>
          </Grid.Cell>
        </Grid>
      </Article>
    </Block>
  ))

  .add('Other stuff', () => (
    <Block margin={{ all: 'large' }}>
      <Grid>
        {range(0, 1000).map(cellNum => (
          <Grid.Cell key={cellNum} margin="small" animation="fade">This is cell {cellNum}</Grid.Cell>
        ))}
      </Grid>
    </Block>
  ));