import React, { ComponentProps, useState } from 'react';
import { useInterval } from '../hooks';
import { Post } from './Post';

export const Carrousel: React.FC<{
  post: ComponentProps<typeof Post>;
  getNextPost: () => void;
}> = ({ post, getNextPost }) => {
  const [delay] = useState(5000);
  const [isRunning] = useState(true);

  useInterval(
    () => {
      getNextPost();
    },
    isRunning ? delay : null
  );

  return <Post {...post} />;
};
