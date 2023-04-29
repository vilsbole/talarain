import { useEffect } from 'react';
import { Carrousel } from '../../components';
import { getPosts } from '../../services';

const data = [
  {
    author: {
      imageUrl: 'https://picsum.photos/200',
      firstName: 'john',
      lastName: 'doe',
    },
    image: {
      url: 'https://picsum.photos/300/200',
      createdAt: '2021-01-01',
      likes: 10,
    },
    title: 'Lorem ipsum.',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  },
];

export const Home = () => {
  useEffect(() => {
    getPosts().then((posts) => {
      console.log(posts);
    });
  }, []);
  return (
    <Carrousel
      post={data[0]}
      getNextPost={() => {
        console.log('HEllo');
      }}
    />
  );
};
