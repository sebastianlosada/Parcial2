import axios from 'axios';

export const postActions = () => async dispatch => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
    const posts = response.data;
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: { posts } });
  } catch (error) {
    dispatch({ type: 'FETCH_POSTS_FAILURE', payload: { error } });
  }
};

export default postActions;
