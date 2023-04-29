import React, { PropsWithChildren } from 'react';
import { Box, Card, Image, Text } from 'theme-ui';
import { AuthorProfile } from './AuthorProfile';

export const Post: React.FC<
  PropsWithChildren<{
    imageUrl: string;
    author: {
      imageUrl: string;
      username: string;
    };
  }>
> = ({ imageUrl, author }) => {
  return (
    <Card>
      <AuthorProfile imageUrl={author.imageUrl} username={author.username} />
      <Box>
        <Image src={imageUrl} />
        <Text></Text>
      </Box>
    </Card>
  );
};
