import React from 'react';
import { Paragraph, Flex, Box, Card, Divider, Image, Text } from 'theme-ui';
import { time } from '../utils';
import { Profile } from './Profile';
import { IconLike } from './IconLike';
import type { Post as PostDetails } from '../types';

export const Post: React.FC<PostDetails> = ({ image, author, title, desc }) => {
  const formatDate = (timestamp: number) => time(timestamp).fromNow();

  return (
    <Card
      sx={{
        padding: '2em',
      }}
    >
      <Profile
        profileUrl={author.profileUrl}
        firstName={author.firstName}
        lastName={author.lastName}
      />
      <Divider />
      <Flex sx={{ flexDirection: 'column', alignContent: 'flex-start' }}>
        <Image
          src={image.url}
          sx={{ objectFit: 'contain', maxHeight: '575px', aspectRatio: '1/1' }}
        />
        <Divider />
        <Flex
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text sx={{ verticalAlign: 'middle' }}>
            {formatDate(image.createdAt * 1000)}
          </Text>
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
        <Paragraph sx={{ fontSize: '2' }}>{desc}</Paragraph>
      </Flex>
    </Card>
  );
};
