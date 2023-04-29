import { useEffect, useState } from 'react';
import { Carrousel } from '../../components';
import { getPosts, getPostDetails } from '../../services';
import type { Post } from '../../types';

export const Home = () => {
  const [post, setPost] = useState<Post | undefined>();

  useEffect(() => {
    getPosts().then(({ posts }) => {
      return getPostDetails(posts[0]).then((post) => {
        console.log(post);
        setPost(post);
      });
    });
  }, []);

  return (
    <>
      {post && (
        <Carrousel
          post={post}
          getNextPost={() => {
            console.log('HEllo');
          }}
        />
      )}
    </>
  );
};
