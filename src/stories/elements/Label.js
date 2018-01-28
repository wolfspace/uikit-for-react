import React from 'react';
import { storiesOf } from '@storybook/react';
import { BlockElement, Container, Label } from '../../components';

Label.displayName = 'Label';

storiesOf('Label', module)
  .add('Basic Usage', () => (
    <Container margin={{ all: 'large' }}>
      <Label>Default</Label>
    </Container>
  ))

  .add('Style modifiers', () => (
    <Container margin={{ all: 'large' }}>
      <BlockElement margin>
        <Label margin={{ right: 'small' }}>Default</Label>
        <Label margin={{ right: 'small' }} success>
          Success
        </Label>
        <Label margin={{ right: 'small' }} warning>
          Warning
        </Label>
        <Label danger>Danger</Label>
      </BlockElement>
    </Container>
  ));