import React, { ComponentProps, useState } from 'react';
import { useInterval } from '../hooks';
import { Post } from './Post';

export const Carrousel: React.FC<{
  post: ComponentProps<typeof Post>;
  intervalDelay: number;
  getNextPost: () => void;
}> = ({ post, getNextPost, intervalDelay }) => {
  const [isRunning] = useState(true);

  useInterval(
    () => {
      getNextPost();
    },
    isRunning ? intervalDelay : null
  );

  return <Post {...post} />;
};
