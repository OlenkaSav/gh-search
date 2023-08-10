import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../api/apiService';

export const fetchUser = createAsyncThunk(
  'user/fetch',
  async (user: string, thunkAPI: any) => {
    try {
      const data = await api.getUser(user);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);