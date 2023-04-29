import { Post } from '../components';

export const Home = () => {
  return (
    <Post
      author={{
        imageUrl: 'https://picsum.photos/200',
        firstName: 'john',
        lastName: 'doe',
      }}
      image={{
        url: 'https://picsum.photos/200/300',
        createdAt: '2021-01-01',
        likes: 10,
      }}
      title="Lorem ipsum."
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
    />
  );
};
