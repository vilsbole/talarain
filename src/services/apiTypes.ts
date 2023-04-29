export interface ApiResponse<T> {
  success: boolean;
  response: T;
}

export interface PostResponse {
  id: string;
  created: string;
  mediaId: string;
  user: {
    id: string;
    username: string;
  };
  likes: number;
  title: number;
  description: string;
}

export interface PostsResponse {
  count: 15;
  posts: PostResponse[];
}

export interface MediaResponse {
  media: {
    id: string;
    type: 'image' | 'video';
    statistics: {
      views: number;
      downloads: number;
      likes: number;
      created: number;
    };
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
    };
    owner: {
      id: string;
      username: string;
    };
  };
}

export interface UserResponse {
  user: {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    profile_images: {
      small: string;
      medium: string;
      large: string;
    };
  };
}
