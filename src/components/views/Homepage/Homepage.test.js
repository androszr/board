import React from 'react';
import { shallow } from 'enzyme';
import { HomepageComponent } from './Homepage';

const posts = [
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
  },
];

describe('Component Homepage', () => {
  it('should render without crashing', () => {
    const component = shallow(<HomepageComponent posts={posts} />);
    expect(component).toBeTruthy();
  });
});