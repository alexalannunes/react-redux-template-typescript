import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  Reducer,
} from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

interface User {
  login: string;
  id: number;
  avatar_url: string;
}

export const fetchByUsername = createAsyncThunk(
  "counter/fetchSomeUsername",
  async (username: string) => {
    const req = await fetch(`https://api.github.com/users/${username}`);
    const response = await req.json();
    return response as User;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchByUsername.fulfilled,
      (state, action: PayloadAction<User>) => {
        state.value = action.payload.id;
      }
    );
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer as Reducer<CounterState>;
