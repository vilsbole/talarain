import { useEffect, useReducer } from 'react';
import { Carrousel, Text } from '../../components';
import { getPosts, getPostDetails, MIN_DELAY } from '../../services';
import {
  reducer,
  DEFAULT_STATE,
  getCurrentPost,
  getCurrentRawPost,
  ActionKind,
} from './reducer';

export const Home = () => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  useEffect(() => {
    const getRawPosts = async () => {
      return getPosts({ offset: state.rawPostOffset })
        .then(({ posts }) => {
          if (!posts) throw new Error('An error occurred while fetching posts');
          dispatch({
            type: ActionKind.FETCH_RAW_POSTS_SUCCESS,
            payload: posts,
          });
        })
        .catch((err) => {
          dispatch({ type: ActionKind.FETCH_RAW_POSTS_SUCCESS, payload: err });
        });
    };

    if (state.rawPosts.length === 0) {
      getRawPosts();
    } else if (state.currentIdx + 2 >= state.rawPosts.length) {
      getRawPosts();
    }
  }, [state.currentIdx, state.rawPosts]);

  useEffect(() => {
    const targetPost = getCurrentRawPost(state);
    if (!targetPost) return;

    getPostDetails(getCurrentRawPost(state))
      .then((post) => {
        dispatch({ type: ActionKind.SET_POST, payload: post });
      })
      .catch((err) => {
        dispatch({ type: ActionKind.FETCH_RAW_POSTS_SUCCESS, payload: err });
      });
  }, [state.rawPosts, state.currentIdx]);

  const post = getCurrentPost(state);

  return (
    <>
      <pre>
        <code>
          {JSON.stringify(
            {
              rawPosts: state.rawPosts.length,
              currentIdx: state.currentIdx,
              currentPostId: getCurrentPost(state)?.id,
            },
            null,
            2
          )}
        </code>
      </pre>
      {!state.error && post && (
        <Carrousel
          intervalDelay={MIN_DELAY}
          post={post}
          getNextPost={() => {
            dispatch({ type: ActionKind.INCREMENT_CURRENT_IDX });
          }}
        />
      )}
      {state.error && (
        <div>
          <Text>Something went wrong</Text>
        </div>
      )}
    </>
  );
};
