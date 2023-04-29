import { Card, Image, Text } from '../components';

export const Home = () => {
  return (
    <Card
      sx={{
        maxWidth: 256,
      }}
    >
      <Image src={'https://picsum.photos/200/300'} />
      <Text>Card</Text>
    </Card>
  );
};
