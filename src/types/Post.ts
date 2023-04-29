export interface Post {
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
