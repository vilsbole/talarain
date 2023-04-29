export interface Post {
  id: string;
  title: string;
  desc: string;
  image: {
    url: string;
    createdAt: number;
    likes: number;
  };
  author: {
    profileUrl: string;
    firstName: string;
    lastName: string;
  };
}
