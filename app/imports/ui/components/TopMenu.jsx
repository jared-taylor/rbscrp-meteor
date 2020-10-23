import React from 'react';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu className='ui borderless menu'>
          <Menu.Item href="#">Home</Menu.Item>
          <Dropdown item text="Solutions">
            <Dropdown.Menu>
              <Dropdown.Item>Heartland Restaurant</Dropdown.Item>
              <Dropdown.Item>Oracle RES 3700</Dropdown.Item>
              <Dropdown.Item>Oracle|Micros Simphony</Dropdown.Item>
              <Dropdown.Item>Paylink Curbside</Dropdown.Item>
              <Dropdown.Item>Paylink In House</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item href="#">Support</Menu.Item>
          <Menu.Item href="#">Online Ordering Promotion</Menu.Item>
          <Menu.Item position="right" href="mailto:sales@rbscrp.com">sales@rbscrp.com</Menu.Item>
          <Menu.Item href="#">(808) 848-0355</Menu.Item>
          <Menu.Item href="https://maps.google.com/?cid=17015445907283500306"><Icon name="map marker alternate" /></Menu.Item>
        </Menu>
    );
  }
}
