import {createSlice} from '@reduxjs/toolkit';

export const getPostsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    comments: [],
    albums: [],
    photos: [],
    todos: [],
    users: [],
    loopsNumber: 1,
  },
  reducers: {
    getPosts(state, action) {
      state.loopsNumber = action.payload;
    },

    setPosts: (state, action) => {
      const {posts, comments, albums, photos, todos, users} = action.payload;
      state.posts = posts;
      state.comments = comments;
      state.albums = albums;
      state.photos = photos;
      state.todos = todos;
      state.users = users;
    },
  },
});

export const {getPosts, setPosts} = getPostsSlice.actions;
