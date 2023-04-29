import type {
  ApiResponse,
  PostResponse,
  PostsResponse,
  MediaResponse,
  UserResponse,
} from './apiTypes';
import type { Post } from '../types';

const API_URL = 'https://apis.slstice.com/mock';
const API_KEY = process.env.REACT_APP_API_KEY;
const MAX_POSTS = 5; // FYI: API endpoint limit: "You can only retrieve maximum 20 elements at a time""
export const MIN_DELAY = 4000; // FYI: API rate limiting seems to be 5 seconds

const apiFetch = async <T>(
  path: string,
  query?: URLSearchParams
): Promise<ApiResponse<T>> => {
  const withAuth = `${API_URL}${path}?api_key=${API_KEY}${
    query ? '&' + query.toString() : ''
  }`;
  const response = await fetch(withAuth, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};

export const getPosts = async (queryParams: {
  offset: number;
}): Promise<PostsResponse> => {
  const query = new URLSearchParams({
    limit: MAX_POSTS.toString(),
    offset: queryParams.offset.toString(),
  });
  const res = await apiFetch<PostsResponse>('/posts', query);
  return res.response;
};

export const getMedia = async (mediaId: string): Promise<MediaResponse> => {
  const res = await apiFetch<MediaResponse>(`/medias/${mediaId}`);
  return res.response;
};

export const getUser = async (userId: string): Promise<UserResponse> => {
  const res = await apiFetch<UserResponse>(`/users/${userId}`);
  return res.response;
};

export const getPostDetails = async (post: PostResponse) => {
  return Promise.all([
    getMedia(post.mediaId),
    getUser(post.user.username),
  ]).then(
    ([{ media }, { user }]): Post => ({
      id: post.id,
      title: post.title,
      desc: post.description,
      image: {
        url: media.urls.regular,
        createdAt: media.statistics.created,
        likes: media.statistics.likes,
      },
      author: {
        profileUrl: user.profile_images.medium,
        firstName: user.first_name,
        lastName: user.last_name,
      },
    })
  );
};
