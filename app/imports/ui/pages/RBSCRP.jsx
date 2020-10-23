import React from 'react';
import TopMenu from '../components/TopMenu';
import BannerImage from '../components/BannerImage';
import Middle from '../components/Middle';
import Support from '../components/Support';
import Hours from '../components/Hours';
import Contact from '../components/Contact';

export default class RBSCRP extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <BannerImage/>
          <Middle/>
          <Support/>
          <Hours/>
          <Contact/>
        </div>
    );
  }
}
