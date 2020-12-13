export const initialState = {
  posts: {
    data: [
      {
        id: '1',
        title: 'Card1',
        content: 'Content1',
        publicationDate: '2020-12-13 17:30',
        lastUpdate: '2020-12-13 17:30',
        email: 'owner@cards.com',
        status: 'Active',
        photo: 'https://images.pexels.com/photos/847483/pexels-photo-847483.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        price: 9.99,
        phone: '+48500100100',
        location: 'Warsaw',
      },
      {
        id: '2',
        title: 'Card2',
        content: 'Content2',
        publicationDate: '2020-12-13 17:30',
        lastUpdate: '2020-12-13 17:30',
        email: 'owner@cards.com',
        status: 'Active',
        photo: 'https://images.pexels.com/photos/1008000/pexels-photo-1008000.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        price: 9.99,
        phone: '+48500100100',
        location: 'Warsaw',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};
