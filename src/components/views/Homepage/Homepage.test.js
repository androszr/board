import React from 'react';
import { shallow } from 'enzyme';
import { HomepageComponent } from './Homepage';

const posts = [
  {
    _id: 1,
    title: 'Title',
    content: 'Content',
    publicationDate: 'Publication date',
    lastUpdate: 'Last update date',
    email: 'Email',
    status: 'Status',
    photo: 'Photo',
    price: 0,
    phone: 123456789,
    location: 'Location',
  },
];

const fetchfunc = () => {
  
};

describe('Component Homepage', () => {
  it('should render without crashing', () => {
    const component = shallow(<HomepageComponent posts={posts} fetchPublishedPosts={fetchfunc} />);
    expect(component).toBeTruthy();
  });
});