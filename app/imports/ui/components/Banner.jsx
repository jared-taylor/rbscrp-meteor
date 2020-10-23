import React from 'react';
import { Image, Container, Grid } from 'semantic-ui-react';

export default class Banner extends React.Component {
  render() {
    return (
        <Container>
          <Grid columns={4}>
            <Grid.Column>
              <Image
                  src='https://static.wixstatic.com/media/2d58de_558eb8081f2c46dfbe8e5ab026121c94~mv2.png/v1/fill/w_183,h_50,al_c,usm_0.66_1.00_0.01/banner.png'
                  floated='left'/>
            </Grid.Column>
            <Grid.Column>
              Oracle/Micros Point of Sale Solutions Provider
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
            <Grid.Column>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}
