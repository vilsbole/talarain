import React, { PropsWithChildren } from 'react';
import { Box, Card, Divider, Image, Text } from 'theme-ui';
import { Profile } from './Profile';

export const Post: React.FC<
  PropsWithChildren<{
    title: string;
    desc: string;
    image: {
      url: string;
      createdAt: string;
      likes: number;
    };
    author: {
      imageUrl: string;
      firstName: string;
      lastName: string;
    };
  }>
> = ({ image, author, title, desc }) => {
  return (
    <Card
      sx={{
        padding: '2em',
      }}
    >
      <Profile
        imageUrl={author.imageUrl}
        firstName={author.firstName}
        lastName={author.lastName}
      />
      <Divider />
      <Box>
        <Image src={image.url} />
        <Text>{image.createdAt}</Text>
        <Text>{image.likes}</Text>
      </Box>
      <Box>
        <Text>{title}</Text>
        <Text>{desc}</Text>
      </Box>
    </Card>
  );
};
