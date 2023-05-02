import { Reducer } from 'react';
import type { Post } from '../../types';
import type { PostResponse } from '../../services/apiTypes';
interface State {
  rawPosts: PostResponse[];
  rawPostOffset: number;
  posts: Post[];
  currentIdx: number;
  error: unknown;
}

export enum ActionKind {
  FETCH_RAW_POSTS_SUCCESS = 'FETCH_RAW_POSTS_SUCCESS',
  FETCH_RAW_POSTS_ERROR = 'FETCH_RAW_POSTS_ERROR',
  FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS',
  FETCH_POST_ERROR = 'FETCH_POST_ERROR',
  INCREMENT_CURRENT_IDX = 'INCREMENT_CURRENT_IDX',
  RESET = 'RESET',
}

type Action =
  | { type: ActionKind.FETCH_RAW_POSTS_SUCCESS; payload: PostResponse[] }
  | { type: ActionKind.FETCH_RAW_POSTS_ERROR; payload: unknown }
  | { type: ActionKind.FETCH_POST_SUCCESS; payload: Post }
  | { type: ActionKind.FETCH_POST_ERROR; payload: unknown }
  | { type: ActionKind.INCREMENT_CURRENT_IDX }
  | { type: ActionKind.RESET };

export const DEFAULT_STATE: State = {
  rawPosts: [],
  rawPostOffset: 0,
  posts: [],
  currentIdx: 0,
  error: undefined,
};

export const reducer: Reducer<State, Action> = (state, action): State => {
  switch (action.type) {
    case ActionKind.FETCH_RAW_POSTS_SUCCESS:
      return {
        ...state,
        rawPosts: [...state.rawPosts, ...action.payload],
        rawPostOffset: state.rawPostOffset + action.payload.length,
      };
    case ActionKind.FETCH_RAW_POSTS_ERROR:
    case ActionKind.FETCH_POST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ActionKind.FETCH_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case ActionKind.INCREMENT_CURRENT_IDX:
      return {
        ...state,
        currentIdx: state.currentIdx + 1,
      };
    case ActionKind.RESET:
      return { ...DEFAULT_STATE };
    default:
      return state;
  }
};

export const getCurrentPost = (state: State): Post => {
  return state.posts[state.currentIdx];
};

export const getCurrentRawPost = (state: State): PostResponse => {
  return state.rawPosts[state.currentIdx];
};

export const shouldFetchRawPosts = (state: State): Boolean => {
  return (
    state.rawPosts.length === 0 ||
    (state.rawPosts.length > 0 && state.rawPosts.length - 2 <= state.currentIdx)
  );
};
