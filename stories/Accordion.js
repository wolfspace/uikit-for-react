import React from 'react';
import faker from 'faker';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  Accordion,
  Block,
  Checkbox,
  FormLabel,
  Grid,
} from '../src/components';

Accordion.displayName = 'Accordion';

const firstParagraph = <p>{faker.lorem.paragraph()}</p>;
const secondParagraph = <p>{faker.lorem.paragraph()}</p>;
const thirdParagraph = <p>{faker.lorem.paragraph()}</p>;

storiesOf('Accordion', module)
  .add('Usage', () => (
    <Block margin={{ all: 'large' }}>
      <Accordion collapsible>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 1</Accordion.Title>
          <Accordion.Content>{firstParagraph}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 2</Accordion.Title>
          <Accordion.Content>{secondParagraph}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 3</Accordion.Title>
          <Accordion.Content>{thirdParagraph}</Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </Block>
  ))

  .add('No collapsing', () => (
    <Block margin={{ all: 'large' }}>
      <Accordion collapsible={false}>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 1</Accordion.Title>
          <Accordion.Content>{firstParagraph}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 2</Accordion.Title>
          <Accordion.Content>{secondParagraph}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 3</Accordion.Title>
          <Accordion.Content>{thirdParagraph}</Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </Block>
  ))

  .add('Multiple open items', () => (
    <Block margin={{ all: 'large' }}>
      <Accordion collapsible multiple>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 1</Accordion.Title>
          <Accordion.Content>{firstParagraph}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 2</Accordion.Title>
          <Accordion.Content>{secondParagraph}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 3</Accordion.Title>
          <Accordion.Content>{thirdParagraph}</Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </Block>
  ))

  .add('Set open items', () => {
    class SetAccordion extends React.Component {
      state = {
        openIndices: [],
      };

      handleUpdate = index => () => {
        let updatedIndices = this.state.openIndices;
        if (updatedIndices.includes(index)) {
          updatedIndices = updatedIndices.filter(
            stateIndex => stateIndex !== index,
          );
        } else {
          updatedIndices.push(index);
        }
        this.setState({ openIndices: updatedIndices });
      };

      render() {
        const { openIndices } = this.state;
        return (
          <Block margin={{ all: 'large' }}>
            <Grid>
              {[0, 1, 2].map(panelIndex => (
                <Checkbox
                  key={`checkbox-${panelIndex}`}
                  style={{ marginRight: 8 }}
                  label={<FormLabel>Item {panelIndex + 1}</FormLabel>}
                  checked={openIndices.includes(panelIndex)}
                  onChange={this.handleUpdate(panelIndex)}
                />
              ))}
            </Grid>
            <Accordion multiple openIndex={openIndices}>
              <Accordion.Panel>
                <Accordion.Title href="#">Item 1</Accordion.Title>
                <Accordion.Content>{firstParagraph}</Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title href="#">Item 2</Accordion.Title>
                <Accordion.Content>{secondParagraph}</Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title href="#">Item 3</Accordion.Title>
                <Accordion.Content>{thirdParagraph}</Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </Block>
        );
      }
    }
    return <SetAccordion />;
  })

  .add('Event handlers', () => (
    <Block margin={{ all: 'large' }}>
      <Accordion
        collapsible
        onBeforeHide={action('onBeforeHide')}
        onBeforeShow={action('onBeforeShow')}
        onHidden={action('onHidden')}
        onHide={action('onHide')}
        onShow={action('onShow')}
        onShown={action('onShown')}
      >
        <Accordion.Panel open>
          <Accordion.Title href="#">Item 1</Accordion.Title>
          <Accordion.Content>{firstParagraph}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 2</Accordion.Title>
          <Accordion.Content>{secondParagraph}</Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title href="#">Item 3</Accordion.Title>
          <Accordion.Content>{thirdParagraph}</Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </Block>
  ));