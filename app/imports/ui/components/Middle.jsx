import React from 'react';
import { Grid, Button, Container, Header, Image, Icon } from 'semantic-ui-react';

export default class Middle extends React.Component {
  render() {
    return (
    <Container>
        <Grid centered columns={2}>
          <Grid.Column>
            <Image src='https://static.wixstatic.com/media/2d58de_25382d126e1a49889a29cd13b53affc0~mv2.png/v1/fill/w_569,h_494,al_c,lg_1/main-slide-1.png'/>
          </Grid.Column>
          <Grid.Column>
            <Header as='h1' className={'top header'}>POS SOLUTIONS</Header>
            <Header as='h2'>Solutions for restaurants, bars, and hotels of any size</Header>
            <Button className="ui button">
              Learn more <Icon name="right chevron" />
            </Button>
          </Grid.Column>
        </Grid>
    </Container>
    );
  }
}
