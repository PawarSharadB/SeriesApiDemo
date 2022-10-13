import {call, put} from 'redux-saga/effects';
import Axios from 'axios';
import {sagaActions} from './sagaActions';
import {setPosts} from '../slices/getPostsSlice';

const URL = 'https://jsonplaceholder.typicode.com/';

async function fetchData(link: string) {
  const response = await Axios.get(`${URL}${link}`);
  return response.data;
}

// async function fetchPosts() {
//   const response = await Axios.get(`${URL}posts?_start=0&_limit=5`);
//   return response.data;
// }

// async function fetchComments() {
//   const response = await Axios.get(`${URL}comments?_start=0&_limit=5`);
//   return response.data;
// }

// async function fetchAlbums() {
//   const response = await Axios.get(`${URL}albums?_start=0&_limit=5`);
//   return response.data;
// }

// async function fetchPhotos() {
//   const response = await Axios.get(`${URL}photos?_start=0&_limit=5`);
//   return response.data;
// }

// async function fetchTodos() {
//   const response = await Axios.get(`${URL}todos?_start=0&_limit=5`);
//   return response.data;
// }

// async function fetchUsers() {
//   const response = await Axios.get(`${URL}users?_start=0&_limit=5`);
//   return response.data;
// }

export function* getPostsSaga(action: any): any {
  // const loopsNumber = action.payload;
  try {
    //const [posts, comments, albums, photos, todos, users] = yield all([
    // call(fetchPosts),
    // call(fetchData, 'posts'),
    // call(fetchData, 'comments'),
    // call(fetchData, 'albums'),
    // call(fetchData, 'photos'),
    // call(fetchData, 'todos'),
    // call(fetchData, 'users'),

    // call(fetchComments),
    // call(fetchAlbums),
    // call(fetchPhotos),
    // call(fetchTodos),
    // call(fetchUsers),
    // ]);
    // for (let i = 0; i < loopsNumber; i++) {
    const posts = yield call(fetchData, 'posts');
    const comments = posts.length ? yield call(fetchData, 'comments') : [];
    const albums = comments.length ? yield call(fetchData, 'albums') : [];
    const photos = albums.length ? yield call(fetchData, 'photos') : [];
    const todos = photos.length ? yield call(fetchData, 'todos') : [];
    const users = todos.length ? yield call(fetchData, 'users') : [];

    yield put(setPosts({posts, comments, albums, photos, todos, users}));
    // }
  } catch (e) {
    yield put({type: sagaActions.FETCH_TOKEN_SAGA_FAILED});
  }
}
