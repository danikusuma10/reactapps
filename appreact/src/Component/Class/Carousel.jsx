import React from 'react'
import { UncontrolledCarousel } from 'reactstrap';

const items = [
     
    {
      src: '',

      altText: 'Slide 1',
      caption: 'Slide 1',
      header: 'JAWA TENGAH',
      key: '1'
    },
    {
      src: '',
      altText: 'Slide 2',
      caption: '',
      header: '',
      key: '2'
    },
    {
      src: '',
      altText: 'Slide 3',
      caption: '',
      header: '',
      key: '3'
    }
  ];
  const Example = () => <UncontrolledCarousel items={items} />;

export default Carousel