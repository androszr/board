import React from 'react';
import { shallow } from 'enzyme';
import { PostComponent } from './Post';

const post = 
  {
    id: 1,
    title: 'Card',
    content: 'Content',
    publicationDate: 'Publication date',
    lastUpdate: 'Last update date',
    email: 'Email',
    status: 'Status',
    photo: 'Photo',
    price: 1,
    phone: 123,
    location: 'Poland',
  };

describe('Component Post', () => {
  it('should render without crashing', () => {
    const component = shallow(<PostComponent post={post} />);
    expect(component).toBeTruthy();
  });
});