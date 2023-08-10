import { createSlice } from '@reduxjs/toolkit';

import { fetchUser } from './operationUser';

const initialState = {
  user: {},
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder: any) => {
    builder.addCase(fetchUser.fulfilled, (store: any, action: any) => {
      store.loading = false;
      store.user = action.payload;
    });
    builder.addCase(fetchUser.pending, (store: any) => {
      store.loading = true;
      store.error = null;
    });
    builder.addCase(fetchUser.rejected, (store: any, action: any) => {
      store.loading = false;
      store.error = action.payload;
    });
  },
});

export default userSlice;