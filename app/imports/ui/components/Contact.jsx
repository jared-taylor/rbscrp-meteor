import React from 'react';
import { Container, Form, Button, Header, Embed } from 'semantic-ui-react';

export default class Contact extends React.Component {
  render() {
    return (
        <div className="contact">
          <Container className={'map'}>
          <Embed
              iframe={{
                allowFullScreen: '',
                width: '60%',
                style: {
                  padding: 10,
                },
              }}
              url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.6657378609443!2d-157.88747208506234!3d21.32422038583906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xec2301e6a681dd12!2sRbs%20Crp%20Inc.!5e0!3m2!1sen!2sus!4v1602056700935!5m2!1sen!2sus'
          />
          </Container>
        <Container className="ui contact container">
          <Header>GET IN TOUCH</Header>
          <Form className="ui form">
            <Form.Group widths='equal'>
              <Form.Input fluid label='Name' placeholder='Name' />
              <Form.Input fluid label='Email' placeholder='Email' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Phone' placeholder='Phone' />
              <Form.Input fluid label='Address' placeholder='Address' />
            </Form.Group>
            <input type="text" placeholder="Subject"/>
            <Form.TextArea label='Type your message here...' placeholder='Type your message here...' />
            <Button fluid position='left' className={'contact-button'}>
              Submit
            </Button>
          </Form>
        </Container>
        </div>
    );
  }
}
