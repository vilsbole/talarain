import type {
  ApiResponse,
  PostsResponse,
  MediaResponse,
  UserResponse,
} from './apiTypes';

const API_URL = 'https://apis.slstice.com/mock';
const API_KEY = process.env.REACT_APP_API_KEY;

const apiFetch = async (path: string, query?: URLSearchParams) => {
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

export const getPosts = async (): Promise<ApiResponse<PostsResponse>> => {
  return await apiFetch('/posts');
};

export const getMedia = async (
  mediaId: string
): Promise<ApiResponse<MediaResponse>> => {
  return await apiFetch(`/medias/${mediaId}`);
};

export const getUser = async (
  userId: string
): Promise<ApiResponse<UserResponse>> => {
  return await apiFetch(`/users/${userId}`);
};
