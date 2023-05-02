import { useEffect, useReducer } from 'react';
import { Carrousel, Text } from '../../components';
import {
  getPosts,
  getPostDetails,
  MIN_DELAY,
  PostResponse,
} from '../../services';
import {
  reducer,
  DEFAULT_STATE,
  getCurrentPost,
  getCurrentRawPost,
  ActionKind,
  shouldFetchRawPosts,
} from './reducer';

export const Home = () => {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  useEffect(() => {
    const getRawPosts = async (offset = 0) => {
      try {
        const { posts } = await getPosts({ offset });
        if (!posts) throw new Error('An error occurred while fetching posts');
        dispatch({
          type: ActionKind.FETCH_RAW_POSTS_SUCCESS,
          payload: posts,
        });
      } catch (err) {
        dispatch({ type: ActionKind.FETCH_RAW_POSTS_ERROR, payload: err });
      }
    };

    if (shouldFetchRawPosts(state)) {
      getRawPosts(state.rawPostOffset);
    }
  }, [state]);

  useEffect(() => {
    const getPost = async (post: PostResponse) => {
      try {
        const postDetails = await getPostDetails(post);
        dispatch({ type: ActionKind.FETCH_POST_SUCCESS, payload: postDetails });
      } catch (err) {
        dispatch({ type: ActionKind.FETCH_POST_ERROR, payload: err });
      }
    };

    const targetPost = getCurrentRawPost(state);
    if (!targetPost) {
      return;
    } else {
      getPost(targetPost);
    }
    // FYI: We only want to run after an update to the currentIdx.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.currentIdx, state.rawPosts]);

  const post = getCurrentPost(state);

  return (
    <>
      {/* <pre>
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
      </pre> */}
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
