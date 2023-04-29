import React, { PropsWithChildren } from 'react';
import { Flex, Box, Card, Divider, Image, Text } from 'theme-ui';
import { Profile } from './Profile';
import { IconLike } from './IconLike';

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
        maxHeight: '70%',
      }}
    >
      <Profile
        imageUrl={author.imageUrl}
        firstName={author.firstName}
        lastName={author.lastName}
      />
      <Divider />
      <Flex sx={{ flexDirection: 'column', alignContent: 'flex-start' }}>
        <Image
          src={image.url}
          sx={{ objectFit: 'contain', aspectRation: '1/1' }}
        />
        <Divider />
        <Flex
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text sx={{ verticalAlign: 'middle' }}>{image.createdAt}</Text>
          <Box sx={{ display: 'inline-block' }}>
            <IconLike size="1.1em" />
            <Text sx={{ verticalAlign: 'middle' }}>{image.likes}</Text>
          </Box>
        </Flex>
      </Flex>
      <Flex sx={{ flexDirection: 'column', marginTop: '2em' }}>
        <Text as="h1" sx={{ fontSize: '4' }}>
          {title}
        </Text>
        <Text as="p" sx={{ fontSize: '2' }}>
          {desc}
        </Text>
      </Flex>
    </Card>
  );
};
