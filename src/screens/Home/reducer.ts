import { Reducer } from 'react';
import type { Post } from '../../types';
import type { PostResponse } from '../../services/apiTypes';
interface State {
  rawPosts: PostResponse[];
  rawPostOffset: number;
  posts: Post[];
  currentIdx: number;
  error: undefined | string;
}

export enum ActionKind {
  FETCH_RAW_POSTS_SUCCESS = 'FETCH_RAW_POSTS_SUCCESS',
  FETCH_RAW_POSTS_ERROR = 'FETCH_RAW_POSTS_ERROR',
  SET_POST = 'SET_POST',
  INCREMENT_CURRENT_IDX = 'INCREMENT_CURRENT_IDX',
}

type Action =
  | { type: ActionKind.FETCH_RAW_POSTS_SUCCESS; payload: PostResponse[] }
  | { type: ActionKind.FETCH_RAW_POSTS_ERROR; payload: string }
  | { type: ActionKind.SET_POST; payload: Post }
  | { type: ActionKind.INCREMENT_CURRENT_IDX };

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
      return {
        ...state,
        error: action.payload,
      };
    case ActionKind.SET_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case ActionKind.INCREMENT_CURRENT_IDX:
      return {
        ...state,
        currentIdx: state.currentIdx + 1,
      };
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
