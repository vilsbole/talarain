import React, { PropsWithChildren } from 'react';
import { Box, Image, Text } from 'theme-ui';

export const AuthorProfile: React.FC<
  PropsWithChildren<{
    imageUrl: string;
    username: string;
  }>
> = ({ imageUrl, username }) => {
  return (
    <Box>
      <Image src={imageUrl} />
      <Text>{username}</Text>
    </Box>
  );
};
