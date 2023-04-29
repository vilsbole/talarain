import { Post } from '../components';

export const Home = () => {
  return (
    <Post
      author={{
        imageUrl: 'https://picsum.photos/200',
        username: 'johndoe',
      }}
      imageUrl="https://picsum.photos/200/300"
    />
  );
};
