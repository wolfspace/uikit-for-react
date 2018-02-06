import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { Block, Comment, Grid, Link, SubNav } from '../../components';

Comment.displayName = 'Comment';

const avatarLink = 'https://getuikit.com/docs/images/avatar.jpg';

storiesOf('Comment', module)
  .add('Basic Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Comment>
        <Grid as={Comment.Header} flex={{ align: 'middle' }}>
          <Grid.Cell width="auto">
            <Comment.Avatar src={avatarLink} width={80} height={80} />
          </Grid.Cell>
          <Grid.Cell width="expand">
            <Comment.Title as="h4" margin="remove">
              <Link reset>Author</Link>
            </Comment.Title>
            <Comment.Meta as={SubNav} divider>
              <SubNav.Item>12 days ago</SubNav.Item>
              <SubNav.Item>Reply</SubNav.Item>
            </Comment.Meta>
          </Grid.Cell>
        </Grid>
        <Comment.Body>
          <p>{faker.lorem.paragraph()}</p>
        </Comment.Body>
      </Comment>
    </Block>
  ))

  .add('Primary modifier', () => (
    <Block margin={{ all: 'large' }}>
      <Comment primary>
        <Grid as={Comment.Header} flex={{ align: 'middle' }}>
          <Grid.Cell width="auto">
            <Comment.Avatar src={avatarLink} width={80} height={80} />
          </Grid.Cell>
          <Grid.Cell width="expand">
            <Comment.Title as="h4" margin="remove">
              <Link reset>Author</Link>
            </Comment.Title>
            <Comment.Meta as={SubNav} divider>
              <SubNav.Item>12 days ago</SubNav.Item>
              <SubNav.Item>Reply</SubNav.Item>
            </Comment.Meta>
          </Grid.Cell>
        </Grid>
        <Comment.Body>
          <p>{faker.lorem.paragraph()}</p>
        </Comment.Body>
      </Comment>
    </Block>
  ))

  // TODO: Fix this, the list style isn't working
  .add('Comment list', () => (
    <Block margin={{ all: 'large' }}>
      <Comment.List>
        <Comment visibleToggle>
          <Comment.Header position="relative">
            <Grid flex={{ align: 'middle' }} gutter="medium">
              <Grid.Cell width="auto">
                <Comment.Avatar src={avatarLink} width={80} height={80} />
              </Grid.Cell>
              <Grid.Cell width="expand">
                <Comment.Title as="h4" margin="remove">
                  <Link reset>Author</Link>
                </Comment.Title>
                <Comment.Meta margin={{ top: 'remove' }}>
                  <Link reset>12 days ago</Link>
                </Comment.Meta>
              </Grid.Cell>
            </Grid>
            <Block
              as="div"
              position={{
                horizontal: 'right',
                vertical: 'top',
                marginSize: 'small',
              }}
              hidden="hover"
            >
              <Link muted>Reply</Link>
            </Block>
          </Comment.Header>
          <Comment.Body>
            <p>{faker.lorem.paragraph()}</p>
          </Comment.Body>
        </Comment>
        <Comment.List nested>
          <Comment primary visibleToggle>
            <Comment.Header position="relative">
              <Grid flex={{ align: 'middle' }} gutter="medium">
                <Grid.Cell width="auto">
                  <Comment.Avatar src={avatarLink} width={80} height={80} />
                </Grid.Cell>
                <Grid.Cell width="expand">
                  <Comment.Title as="h4" margin="remove">
                    <Link reset>Author</Link>
                  </Comment.Title>
                  <Comment.Meta margin={{ top: 'remove' }}>
                    <Link reset>12 days ago</Link>
                  </Comment.Meta>
                </Grid.Cell>
              </Grid>
              <Block
                as="div"
                position={{
                  horizontal: 'right',
                  vertical: 'top',
                  marginSize: 'small',
                }}
                hidden="hover"
              >
                <Link muted>Reply</Link>
              </Block>
            </Comment.Header>
            <Comment.Body>
              <p>{faker.lorem.paragraph()}</p>
            </Comment.Body>
          </Comment>
          <Comment visibleToggle>
            <Comment.Header position="relative">
              <Grid flex={{ align: 'middle' }} gutter="medium">
                <Grid.Cell width="auto">
                  <Comment.Avatar src={avatarLink} width={80} height={80} />
                </Grid.Cell>
                <Grid.Cell width="expand">
                  <Comment.Title as="h4" margin="remove">
                    <Link reset>Author</Link>
                  </Comment.Title>
                  <Comment.Meta margin={{ top: 'remove' }}>
                    <Link reset>12 days ago</Link>
                  </Comment.Meta>
                </Grid.Cell>
              </Grid>
              <Block
                as="div"
                position={{
                  horizontal: 'right',
                  vertical: 'top',
                  marginSize: 'small',
                }}
                hidden="hover"
              >
                <Link muted>Reply</Link>
              </Block>
            </Comment.Header>
            <Comment.Body>
              <p>{faker.lorem.paragraph()}</p>
            </Comment.Body>
          </Comment>
        </Comment.List>
      </Comment.List>
    </Block>
  ));
