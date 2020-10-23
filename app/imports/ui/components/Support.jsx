import React from 'react';
import { Container, Button, Header, Icon } from 'semantic-ui-react';

export default class Support extends React.Component {
  render() {
    return (
        <div className={'support'}>
        <Container>
          <Header as='h1' className={'top header'}>NEED SUPPORT NOW?</Header>
          <Header as='h3'>Click below to access our support portal & get remote assistance now</Header>
          <Button className="ui support button">
            Launch portal <Icon name="right arrow" />
          </Button>
        </Container>
        </div>
    );
  }
}
