import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import {
  Division,
  Button,
  Card,
  Grid,
  Image,
  Label,
  Link,
  Text,
} from '../src/components';
import { imageLinks } from './common';

Card.displayName = 'Card';

const cardContent = faker.lorem.paragraph();

storiesOf('Card', module)
  .add('Usage', () => (
    <Division margin={{ all: 'large' }}>
      <Card width={{ atMd: '1/2' }}>
        <Card.Title>Default</Card.Title>
        <Card.Content>
          Lorem ipsum <Link>dolor</Link> sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Content>
      </Card>
    </Division>
  ))

  .add('Style modifiers', () => (
    <Division margin={{ all: 'large' }}>
      <Grid childWidth={{ atMd: '1/3' }} gutter="small" matchHeight>
        <Grid.Cell>
          <Card>
            <Card.Title>Default</Card.Title>
            <Card.Content>{cardContent}</Card.Content>
          </Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card primary>
            <Card.Title>Primary</Card.Title>
            <Card.Content>{cardContent}</Card.Content>
          </Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card secondary>
            <Card.Title>Secondary</Card.Title>
            <Card.Content>{cardContent}</Card.Content>
          </Card>
        </Grid.Cell>
      </Grid>
    </Division>
  ))

  .add('Hover modifier', () => (
    <Division margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: '1/2' }} matchHeight>
        <Grid.Cell>
          <Card hover simple>
            <Card.Title>Hover</Card.Title>
            <Card.Content>{cardContent}</Card.Content>
          </Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card hover>
            <Card.Title>Default</Card.Title>
            <Card.Content>{cardContent}</Card.Content>
          </Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card primary hover inverse="light">
            <Card.Title>Primary</Card.Title>
            <Card.Content>{cardContent}</Card.Content>
          </Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card secondary hover inverse="dark">
            <Card.Title>Secondary</Card.Title>
            <Card.Content>{cardContent}</Card.Content>
          </Card>
        </Grid.Cell>
      </Grid>
    </Division>
  ))

  .add('Size modifiers', () => (
    <Division margin={{ all: 'large' }}>
      <Grid childWidth={{ atSm: '1/2' }}>
        <Grid.Cell>
          <Card size="small">
            <Card.Title>Small</Card.Title>
            <Card.Content>{cardContent}</Card.Content>
          </Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card size="large">
            <Card.Title>Large</Card.Title>
            <Card.Content>{cardContent}</Card.Content>
          </Card>
        </Grid.Cell>
      </Grid>
    </Division>
  ))

  .add('Header & footer', () => (
    <Division margin={{ all: 'large' }}>
      <Card width={{ atMd: '1/2' }}>
        <Card.Header>
          <Grid gutter="small" alignItems="middle">
            <Grid.Cell width="auto">
              <Image
                border="circle"
                src={imageLinks.avatar}
                width={40}
                height={40}
              />
            </Grid.Cell>
            <Grid.Cell width="expand">
              <Card.Title margin={{ bottom: 'remove' }}>Title</Card.Title>
              <Text meta as="p" margin={{ top: 'remove' }}>
                <time dateTime="2016-04-01T19:00">April 01, 2016</time>
              </Text>
            </Grid.Cell>
          </Grid>
        </Card.Header>
        <Card.Body>
          <p>{cardContent}</p>
        </Card.Body>
        <Card.Footer>
          <Button as="a" text>
            Read more
          </Button>
        </Card.Footer>
      </Card>
    </Division>
  ))

  .add('Media', () => (
    <Division margin={{ all: 'large' }}>
      <Grid childWidth={{ atMd: '1/2' }}>
        <Grid.Cell>
          <Card>
            <Card.Media alignTo="top">
              <img src={imageLinks.light} alt="" />
            </Card.Media>
            <Card.Body>
              <Card.Title>Media Top</Card.Title>
              <p>{cardContent}</p>
            </Card.Body>
          </Card>
        </Grid.Cell>
        <Grid.Cell>
          <Card>
            <Card.Body>
              <Card.Title>Media Bottom</Card.Title>
              <p>{cardContent}</p>
            </Card.Body>
            <Card.Media alignTo="bottom">
              <img src={imageLinks.light} alt="" />
            </Card.Media>
          </Card>
        </Grid.Cell>
      </Grid>
    </Division>
  ))

  .add('Horizontal alignment', () => (
    <Division margin={{ all: 'large' }}>
      <Card as={Grid} childWidth={{ atSm: '1/2' }} gutter="collapse" margin>
        <Card.Media alignTo="left" cover={{ width: 600, height: 400 }}>
          <img src={imageLinks.light} alt="" />
        </Card.Media>
        <Card.Body>
          <Card.Title>Media Left</Card.Title>
          <p>{cardContent}</p>
        </Card.Body>
      </Card>
      <Card as={Grid} childWidth={{ atSm: '1/2' }} gutter="collapse" margin>
        <Card.Media
          alignTo="right"
          cover={{ width: 600, height: 400 }}
          flex={{ order: { last: '@s' }, display: false }}
        >
          <img src={imageLinks.light} alt="" />
        </Card.Media>
        <Card.Body>
          <Card.Title>Media Right</Card.Title>
          <p>{cardContent}</p>
        </Card.Body>
      </Card>
    </Division>
  ))

  .add('Badge', () => (
    <Division margin={{ all: 'large' }}>
      <Card width={{ atMd: '1/2' }}>
        <Card.Badge as={Label}>Badge</Card.Badge>
        <Card.Title>Title</Card.Title>
        <Card.Content>{cardContent}</Card.Content>
      </Card>
    </Division>
  ));
