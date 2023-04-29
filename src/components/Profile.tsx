import React, { PropsWithChildren } from 'react';
import { Avatar, Flex, Text } from 'theme-ui';
import { capitalize } from '../utils';

export const Profile: React.FC<
  PropsWithChildren<{
    profileUrl: string;
    firstName: string;
    lastName: string;
  }>
> = ({ profileUrl, firstName, lastName }) => {
  return (
    <Flex sx={{}}>
      <Avatar
        sx={{
          width: '48px',
          height: '48px',
        }}
        src={profileUrl}
      />

      <Flex sx={{ marginLeft: '0.75em' }}>
        <Text
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            fontWeight: 'bold',
          }}
        >
          {capitalize(firstName)} {capitalize(lastName)}
        </Text>
      </Flex>
    </Flex>
  );
};
