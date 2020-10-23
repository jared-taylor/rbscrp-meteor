import React from 'react';
import { Image, Container, Grid, Header } from 'semantic-ui-react';

export default class Hours extends React.Component {
  render() {
    return (
        <div className={'hours'}>
        <Container>
          <Grid centered compact columns={2} className="ui two column centered compact grid">
            <Grid.Column className={'left'}>
              <Image className="ui hours image column" src='images/kitchen-tab-slide.jpg'/>
            </Grid.Column>
            <Grid.Column className={'right'}>
              <Container className={'hours-text'}>
              <Header as='h2' id="h2-hours">Business Hours</Header>
              <Header as='h3' id="h3-hours">Mon - Fri: 8am - 5pm</Header>
              <Header as='h3' id="h3-hours">Sat - Sun: Closed</Header>
              </Container>
            </Grid.Column>
          </Grid>
        </Container>
        </div>
    );
  }
}
